// Routes implementation for Gondi Gotul Guru with Replit Auth
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth, isAuthenticated } from "./replitAuth";

export async function registerRoutes(app: Express): Promise<Server> {
  // Set up Replit Auth (based on blueprint:javascript_log_in_with_replit)
  await setupAuth(app);

  // Auth routes
  app.get('/api/auth/user', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      
      const progress = await storage.getUserProgress(userId);
      res.json({ ...user, progress });
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  // User progress routes
  app.get('/api/user/progress', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const progress = await storage.getUserProgress(userId);
      res.json(progress);
    } catch (error) {
      console.error("Error fetching progress:", error);
      res.status(500).json({ message: "Failed to fetch progress" });
    }
  });

  app.patch('/api/user/progress', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const updates = req.body;
      const progress = await storage.updateUserProgress(userId, updates);
      res.json(progress);
    } catch (error) {
      console.error("Error updating progress:", error);
      res.status(500).json({ message: "Failed to update progress" });
    }
  });

  // Lesson routes
  app.get('/api/lessons', async (req, res) => {
    try {
      const lessons = await storage.getAllLessons();
      res.json(lessons);
    } catch (error) {
      console.error("Error fetching lessons:", error);
      res.status(500).json({ message: "Failed to fetch lessons" });
    }
  });

  app.get('/api/lessons/:id', async (req, res) => {
    try {
      const lesson = await storage.getLesson(req.params.id);
      if (!lesson) {
        return res.status(404).json({ message: "Lesson not found" });
      }
      res.json(lesson);
    } catch (error) {
      console.error("Error fetching lesson:", error);
      res.status(500).json({ message: "Failed to fetch lesson" });
    }
  });

  // User lesson progress routes
  app.get('/api/user/lessons/progress', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const progress = await storage.getAllUserLessonProgress(userId);
      res.json(progress);
    } catch (error) {
      console.error("Error fetching lesson progress:", error);
      res.status(500).json({ message: "Failed to fetch lesson progress" });
    }
  });

  app.post('/api/user/lessons/progress', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { lessonId, progress: progressValue, completed } = req.body;
      
      const progressData = await storage.upsertUserLessonProgress({
        userId,
        lessonId,
        progress: progressValue,
        completed,
      });
      
      // Log activity
      await storage.createActivity({
        userId,
        type: completed ? "lesson" : "progress",
        title: completed ? `Completed lesson` : `Updated lesson progress`,
        metadata: { lessonId, progress: progressValue },
      });
      
      res.json(progressData);
    } catch (error) {
      console.error("Error updating lesson progress:", error);
      res.status(500).json({ message: "Failed to update lesson progress" });
    }
  });

  // Vocabulary routes
  app.get('/api/vocabulary', async (req, res) => {
    try {
      const vocabulary = await storage.getAllVocabulary();
      res.json(vocabulary);
    } catch (error) {
      console.error("Error fetching vocabulary:", error);
      res.status(500).json({ message: "Failed to fetch vocabulary" });
    }
  });

  app.get('/api/lessons/:lessonId/vocabulary', async (req, res) => {
    try {
      const vocabulary = await storage.getVocabularyByLesson(req.params.lessonId);
      res.json(vocabulary);
    } catch (error) {
      console.error("Error fetching lesson vocabulary:", error);
      res.status(500).json({ message: "Failed to fetch lesson vocabulary" });
    }
  });

  // User vocabulary routes
  app.get('/api/user/vocabulary', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const userVocab = await storage.getUserVocabulary(userId);
      res.json(userVocab);
    } catch (error) {
      console.error("Error fetching user vocabulary:", error);
      res.status(500).json({ message: "Failed to fetch user vocabulary" });
    }
  });

  app.post('/api/user/vocabulary/:vocabularyId/master', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { vocabularyId } = req.params;
      
      const userVocab = await storage.markVocabularyMastered(userId, vocabularyId);
      
      // Update user progress vocabulary count
      const masteredVocab = await storage.getUserVocabulary(userId);
      const masteredCount = masteredVocab.filter(v => v.mastered).length;
      await storage.updateUserProgress(userId, { vocabularyMastered: masteredCount });
      
      res.json(userVocab);
    } catch (error) {
      console.error("Error marking vocabulary as mastered:", error);
      res.status(500).json({ message: "Failed to mark vocabulary as mastered" });
    }
  });

  // Achievement routes
  app.get('/api/achievements', async (req, res) => {
    try {
      const achievements = await storage.getAllAchievements();
      res.json(achievements);
    } catch (error) {
      console.error("Error fetching achievements:", error);
      res.status(500).json({ message: "Failed to fetch achievements" });
    }
  });

  app.get('/api/user/achievements', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const userAchievements = await storage.getUserAchievements(userId);
      res.json(userAchievements);
    } catch (error) {
      console.error("Error fetching user achievements:", error);
      res.status(500).json({ message: "Failed to fetch user achievements" });
    }
  });

  // Activity routes
  app.get('/api/user/activities', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 50;
      const activities = await storage.getUserActivities(userId, limit);
      res.json(activities);
    } catch (error) {
      console.error("Error fetching activities:", error);
      res.status(500).json({ message: "Failed to fetch activities" });
    }
  });

  // Quiz routes
  app.post('/api/quiz/submit', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { lessonId, score, totalQuestions } = req.body;
      
      const quizResult = await storage.createQuizResult({
        userId,
        lessonId,
        score,
        totalQuestions,
      });
      
      // Log activity
      await storage.createActivity({
        userId,
        type: "quiz",
        title: `Scored ${score}/${totalQuestions} on quiz`,
        metadata: { lessonId, score, totalQuestions },
      });
      
      // Update quiz accuracy
      const allResults = await storage.getUserQuizResults(userId);
      const totalScore = allResults.reduce((acc, r) => acc + r.score, 0);
      const totalQs = allResults.reduce((acc, r) => acc + r.totalQuestions, 0);
      const accuracy = Math.round((totalScore / totalQs) * 100);
      await storage.updateUserProgress(userId, { quizAccuracy: accuracy });
      
      res.json(quizResult);
    } catch (error) {
      console.error("Error submitting quiz:", error);
      res.status(500).json({ message: "Failed to submit quiz" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
