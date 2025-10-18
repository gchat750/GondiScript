// Storage interface with database implementation for Gondi Gotul Guru
import { db } from "./db";
import { eq, desc, and } from "drizzle-orm";
import type {
  User,
  UpsertUser,
  UserProgress,
  InsertUserProgress,
  Lesson,
  InsertLesson,
  UserLessonProgress,
  InsertUserLessonProgress,
  Vocabulary,
  InsertVocabulary,
  UserVocabulary,
  InsertUserVocabulary,
  Achievement,
  InsertAchievement,
  UserAchievement,
  InsertUserAchievement,
  Activity,
  InsertActivity,
  QuizResult,
  InsertQuizResult,
} from "@shared/schema";
import {
  users,
  userProgress,
  lessons,
  userLessonProgress,
  vocabulary,
  userVocabulary,
  achievements,
  userAchievements,
  activities,
  quizResults,
} from "@shared/schema";

export interface IStorage {
  // User operations (required for Replit Auth)
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  
  // User progress operations
  getUserProgress(userId: string): Promise<UserProgress | undefined>;
  createUserProgress(progress: InsertUserProgress): Promise<UserProgress>;
  updateUserProgress(userId: string, updates: Partial<InsertUserProgress>): Promise<UserProgress>;
  
  // Lesson operations
  getAllLessons(): Promise<Lesson[]>;
  getLesson(id: string): Promise<Lesson | undefined>;
  createLesson(lesson: InsertLesson): Promise<Lesson>;
  
  // User lesson progress operations
  getUserLessonProgress(userId: string, lessonId: string): Promise<UserLessonProgress | undefined>;
  getAllUserLessonProgress(userId: string): Promise<UserLessonProgress[]>;
  upsertUserLessonProgress(progress: InsertUserLessonProgress): Promise<UserLessonProgress>;
  
  // Vocabulary operations
  getAllVocabulary(): Promise<Vocabulary[]>;
  getVocabularyByLesson(lessonId: string): Promise<Vocabulary[]>;
  createVocabulary(vocab: InsertVocabulary): Promise<Vocabulary>;
  
  // User vocabulary operations
  getUserVocabulary(userId: string): Promise<UserVocabulary[]>;
  markVocabularyMastered(userId: string, vocabularyId: string): Promise<UserVocabulary>;
  
  // Achievement operations
  getAllAchievements(): Promise<Achievement[]>;
  createAchievement(achievement: InsertAchievement): Promise<Achievement>;
  getUserAchievements(userId: string): Promise<UserAchievement[]>;
  unlockAchievement(data: InsertUserAchievement): Promise<UserAchievement>;
  
  // Activity operations
  getUserActivities(userId: string, limit?: number): Promise<Activity[]>;
  createActivity(activity: InsertActivity): Promise<Activity>;
  
  // Quiz operations
  createQuizResult(result: InsertQuizResult): Promise<QuizResult>;
  getUserQuizResults(userId: string): Promise<QuizResult[]>;
}

export class DatabaseStorage implements IStorage {
  // User operations (required for Replit Auth)
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    
    // Initialize user progress if new user
    const existingProgress = await this.getUserProgress(user.id);
    if (!existingProgress) {
      await this.createUserProgress({ userId: user.id });
    }
    
    return user;
  }

  // User progress operations
  async getUserProgress(userId: string): Promise<UserProgress | undefined> {
    const [progress] = await db.select().from(userProgress).where(eq(userProgress.userId, userId));
    return progress;
  }

  async createUserProgress(progress: InsertUserProgress): Promise<UserProgress> {
    const [newProgress] = await db.insert(userProgress).values(progress).returning();
    return newProgress;
  }

  async updateUserProgress(userId: string, updates: Partial<InsertUserProgress>): Promise<UserProgress> {
    const [updated] = await db
      .update(userProgress)
      .set(updates)
      .where(eq(userProgress.userId, userId))
      .returning();
    return updated;
  }

  // Lesson operations
  async getAllLessons(): Promise<Lesson[]> {
    return await db.select().from(lessons).orderBy(lessons.number);
  }

  async getLesson(id: string): Promise<Lesson | undefined> {
    const [lesson] = await db.select().from(lessons).where(eq(lessons.id, id));
    return lesson;
  }

  async createLesson(lesson: InsertLesson): Promise<Lesson> {
    const [newLesson] = await db.insert(lessons).values(lesson).returning();
    return newLesson;
  }

  // User lesson progress operations
  async getUserLessonProgress(userId: string, lessonId: string): Promise<UserLessonProgress | undefined> {
    const [progress] = await db
      .select()
      .from(userLessonProgress)
      .where(and(eq(userLessonProgress.userId, userId), eq(userLessonProgress.lessonId, lessonId)));
    return progress;
  }

  async getAllUserLessonProgress(userId: string): Promise<UserLessonProgress[]> {
    return await db.select().from(userLessonProgress).where(eq(userLessonProgress.userId, userId));
  }

  async upsertUserLessonProgress(progress: InsertUserLessonProgress): Promise<UserLessonProgress> {
    const existing = await this.getUserLessonProgress(progress.userId, progress.lessonId);
    
    if (existing) {
      const [updated] = await db
        .update(userLessonProgress)
        .set({ ...progress, lastAccessed: new Date() })
        .where(and(eq(userLessonProgress.userId, progress.userId), eq(userLessonProgress.lessonId, progress.lessonId)))
        .returning();
      return updated;
    } else {
      const [newProgress] = await db
        .insert(userLessonProgress)
        .values({ ...progress, lastAccessed: new Date() })
        .returning();
      return newProgress;
    }
  }

  // Vocabulary operations
  async getAllVocabulary(): Promise<Vocabulary[]> {
    return await db.select().from(vocabulary);
  }

  async getVocabularyByLesson(lessonId: string): Promise<Vocabulary[]> {
    return await db.select().from(vocabulary).where(eq(vocabulary.lessonId, lessonId));
  }

  async createVocabulary(vocab: InsertVocabulary): Promise<Vocabulary> {
    const [newVocab] = await db.insert(vocabulary).values(vocab).returning();
    return newVocab;
  }

  // User vocabulary operations
  async getUserVocabulary(userId: string): Promise<UserVocabulary[]> {
    return await db.select().from(userVocabulary).where(eq(userVocabulary.userId, userId));
  }

  async markVocabularyMastered(userId: string, vocabularyId: string): Promise<UserVocabulary> {
    const existing = await db
      .select()
      .from(userVocabulary)
      .where(and(eq(userVocabulary.userId, userId), eq(userVocabulary.vocabularyId, vocabularyId)));

    if (existing.length > 0) {
      const [updated] = await db
        .update(userVocabulary)
        .set({ mastered: true, lastPracticed: new Date() })
        .where(and(eq(userVocabulary.userId, userId), eq(userVocabulary.vocabularyId, vocabularyId)))
        .returning();
      return updated;
    } else {
      const [newEntry] = await db
        .insert(userVocabulary)
        .values({ userId, vocabularyId, mastered: true, lastPracticed: new Date() })
        .returning();
      return newEntry;
    }
  }

  // Achievement operations
  async getAllAchievements(): Promise<Achievement[]> {
    return await db.select().from(achievements);
  }

  async createAchievement(achievement: InsertAchievement): Promise<Achievement> {
    const [newAchievement] = await db.insert(achievements).values(achievement).returning();
    return newAchievement;
  }

  async getUserAchievements(userId: string): Promise<UserAchievement[]> {
    return await db.select().from(userAchievements).where(eq(userAchievements.userId, userId));
  }

  async unlockAchievement(data: InsertUserAchievement): Promise<UserAchievement> {
    const [achievement] = await db.insert(userAchievements).values(data).returning();
    return achievement;
  }

  // Activity operations
  async getUserActivities(userId: string, limit: number = 50): Promise<Activity[]> {
    return await db
      .select()
      .from(activities)
      .where(eq(activities.userId, userId))
      .orderBy(desc(activities.createdAt))
      .limit(limit);
  }

  async createActivity(activity: InsertActivity): Promise<Activity> {
    const [newActivity] = await db.insert(activities).values(activity).returning();
    return newActivity;
  }

  // Quiz operations
  async createQuizResult(result: InsertQuizResult): Promise<QuizResult> {
    const [quizResult] = await db.insert(quizResults).values(result).returning();
    return quizResult;
  }

  async getUserQuizResults(userId: string): Promise<QuizResult[]> {
    return await db.select().from(quizResults).where(eq(quizResults.userId, userId));
  }
}

export const storage = new DatabaseStorage();
