// Seed data for Gondi Gotul Guru lessons, vocabulary, and achievements
import { storage } from "./storage";

export async function seedDatabase() {
  console.log("Seeding database...");

  // Check if lessons already exist
  const existingLessons = await storage.getAllLessons();
  if (existingLessons.length > 0) {
    console.log("Database already seeded, skipping...");
    return;
  }

  // Create lessons
  const lessons = [
    {
      number: 1,
      title: "Greetings & Basics",
      description: "Learn essential greetings and basic phrases in Masaram Gondi",
      category: "basics",
      gradient: "from-primary to-chart-1",
      isLocked: false,
    },
    {
      number: 2,
      title: "Family & Relationships",
      description: "Master family terms and relationship vocabulary",
      category: "family",
      gradient: "from-chart-2 to-destructive",
      isLocked: false,
    },
    {
      number: 3,
      title: "Numbers & Counting",
      description: "Count from 1-100 and learn number patterns",
      category: "numbers",
      gradient: "from-chart-3 to-chart-5",
      isLocked: false,
    },
    {
      number: 4,
      title: "Food & Dining",
      description: "Explore food vocabulary and dining phrases",
      category: "food",
      gradient: "from-chart-4 to-primary",
      isLocked: false,
    },
    {
      number: 5,
      title: "Daily Activities",
      description: "Learn about daily routines and common actions",
      category: "activities",
      gradient: "from-chart-5 to-chart-2",
      isLocked: false,
    },
    {
      number: 6,
      title: "Culture & Traditions",
      description: "Discover Gondi culture, customs, and traditions",
      category: "culture",
      gradient: "from-chart-3 to-primary",
      isLocked: true,
    },
  ];

  const createdLessons = [];
  for (const lesson of lessons) {
    const created = await storage.createLesson(lesson);
    createdLessons.push(created);
  }

  // Create vocabulary for Lesson 1: Greetings & Basics
  const greetingsVocab = [
    {
      lessonId: createdLessons[0].id,
      gondi: "𑴌𑴳𑵃𑴱𑵄𑴲",
      pronunciation: "Namaskar",
      english: "Hello / Greetings",
      hindi: "नमस्कार",
      example: "𑴌𑴳𑵃𑴱𑵄𑴲, 𑴌𑴺𑵄𑴱 𑴬𑴼𑴟 - Hello, how are you?",
      category: "greetings",
    },
    {
      lessonId: createdLessons[0].id,
      gondi: "𑴝𑴱𑴟𑵃𑴱",
      pronunciation: "Danram",
      english: "Thank you",
      hindi: "धन्यवाद",
      category: "greetings",
    },
    {
      lessonId: createdLessons[0].id,
      gondi: "𑴌𑴺𑵄𑴱 𑴬𑴼𑴟",
      pronunciation: "Kese han",
      english: "How are you?",
      hindi: "कैसे हो?",
      category: "greetings",
    },
    {
      lessonId: createdLessons[0].id,
      gondi: "𑴤𑴱𑴥 𑴬𑴼𑴟",
      pronunciation: "Map han",
      english: "I am fine",
      hindi: "मैं ठीक हूं",
      category: "greetings",
    },
    {
      lessonId: createdLessons[0].id,
      gondi: "𑴬𑴱𑴺𑴦𑴱",
      pronunciation: "Haran",
      english: "Yes",
      hindi: "हां",
      category: "basics",
    },
    {
      lessonId: createdLessons[0].id,
      gondi: "𑴌𑴱𑴟𑴴",
      pronunciation: "Kanu",
      english: "No",
      hindi: "नहीं",
      category: "basics",
    },
  ];

  // Create vocabulary for Lesson 2: Family & Relationships
  const familyVocab = [
    {
      lessonId: createdLessons[1].id,
      gondi: "𑴤𑴱𑴥",
      pronunciation: "Map",
      english: "Father",
      hindi: "पिता",
      category: "family",
    },
    {
      lessonId: createdLessons[1].id,
      gondi: "𑴱𑴥",
      pronunciation: "Ap",
      english: "Mother",
      hindi: "माता",
      category: "family",
    },
    {
      lessonId: createdLessons[1].id,
      gondi: "𑴢𑴱𑴥",
      pronunciation: "Bap",
      english: "Brother",
      hindi: "भाई",
      category: "family",
    },
    {
      lessonId: createdLessons[1].id,
      gondi: "𑴢𑴺𑴟",
      pronunciation: "Ben",
      english: "Sister",
      hindi: "बहन",
      category: "family",
    },
    {
      lessonId: createdLessons[1].id,
      gondi: "𑴤𑴱𑴤𑴴",
      pronunciation: "Mamu",
      english: "Grandfather",
      hindi: "दादा",
      category: "family",
    },
    {
      lessonId: createdLessons[1].id,
      gondi: "𑴱𑴱𑴥",
      pronunciation: "Aap",
      english: "Grandmother",
      hindi: "दादी",
      category: "family",
    },
  ];

  // Create vocabulary for Lesson 3: Numbers & Counting
  const numbersVocab = [
    {
      lessonId: createdLessons[2].id,
      gondi: "𑵑",
      pronunciation: "Onji",
      english: "One",
      hindi: "एक",
      category: "numbers",
    },
    {
      lessonId: createdLessons[2].id,
      gondi: "𑵒",
      pronunciation: "Iratt",
      english: "Two",
      hindi: "दो",
      category: "numbers",
    },
    {
      lessonId: createdLessons[2].id,
      gondi: "𑵓",
      pronunciation: "Moond",
      english: "Three",
      hindi: "तीन",
      category: "numbers",
    },
    {
      lessonId: createdLessons[2].id,
      gondi: "𑵔",
      pronunciation: "Nalug",
      english: "Four",
      hindi: "चार",
      category: "numbers",
    },
    {
      lessonId: createdLessons[2].id,
      gondi: "𑵕",
      pronunciation: "Sayyid",
      english: "Five",
      hindi: "पांच",
      category: "numbers",
    },
  ];

  // Create all vocabulary
  for (const vocab of [...greetingsVocab, ...familyVocab, ...numbersVocab]) {
    await storage.createVocabulary(vocab);
  }

  // Create achievements
  const achievements = [
    {
      title: "First Steps",
      description: "Complete your first lesson",
      icon: "Star",
      gradient: "from-chart-2 to-destructive",
      requirement: { type: "lessons_completed", count: 1 },
    },
    {
      title: "Week Warrior",
      description: "Maintain a 7 day streak",
      icon: "Flame",
      gradient: "from-destructive to-chart-2",
      requirement: { type: "streak", count: 7 },
    },
    {
      title: "Vocabulary Master",
      description: "Learn 50 words",
      icon: "BookOpen",
      gradient: "from-primary to-chart-1",
      requirement: { type: "vocabulary_mastered", count: 50 },
    },
    {
      title: "Perfect Score",
      description: "Score 100% on a quiz",
      icon: "Target",
      gradient: "from-chart-4 to-primary",
      requirement: { type: "perfect_quiz", count: 1 },
    },
    {
      title: "Speed Learner",
      description: "Complete a lesson in one day",
      icon: "Zap",
      gradient: "from-chart-5 to-chart-2",
      requirement: { type: "lesson_in_day", count: 1 },
    },
    {
      title: "Champion",
      description: "Complete all lessons",
      icon: "Trophy",
      gradient: "from-chart-3 to-chart-5",
      requirement: { type: "all_lessons_completed", count: 6 },
    },
    {
      title: "Scholar",
      description: "Study for 20 hours",
      icon: "Award",
      gradient: "from-chart-5 to-chart-3",
      requirement: { type: "study_time", count: 1200 },
    },
    {
      title: "Master",
      description: "Reach Expert level",
      icon: "Crown",
      gradient: "from-primary to-chart-3",
      requirement: { type: "level", value: "Expert" },
    },
  ];

  for (const achievement of achievements) {
    await storage.createAchievement(achievement);
  }

  console.log("Database seeded successfully!");
}
