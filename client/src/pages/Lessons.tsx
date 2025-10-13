import LessonCard from "@/components/LessonCard";
import { HandHeart, Users, Hash, UtensilsCrossed, Sun, Sparkles } from "lucide-react";

export default function Lessons() {
  const lessons = [
    {
      number: 1,
      title: "Greetings & Basics",
      description: "Learn essential greetings and basic phrases in Masaram Gondi",
      icon: HandHeart,
      progress: 100,
      gradient: "from-primary to-chart-1",
    },
    {
      number: 2,
      title: "Family & Relationships",
      description: "Master family terms and relationship vocabulary",
      icon: Users,
      progress: 75,
      gradient: "from-chart-2 to-destructive",
    },
    {
      number: 3,
      title: "Numbers & Counting",
      description: "Count from 1-100 and learn number patterns",
      icon: Hash,
      progress: 45,
      gradient: "from-chart-3 to-chart-5",
    },
    {
      number: 4,
      title: "Food & Dining",
      description: "Explore food vocabulary and dining phrases",
      icon: UtensilsCrossed,
      progress: 20,
      gradient: "from-chart-4 to-primary",
    },
    {
      number: 5,
      title: "Daily Activities",
      description: "Learn about daily routines and common actions",
      icon: Sun,
      progress: 0,
      gradient: "from-chart-5 to-chart-2",
    },
    {
      number: 6,
      title: "Culture & Traditions",
      description: "Discover Gondi culture, customs, and traditions",
      icon: Sparkles,
      progress: 0,
      isLocked: true,
      gradient: "from-chart-3 to-primary",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Learning Lessons
          </h1>
          <p className="text-muted-foreground">
            Choose a lesson to continue your Gondi journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <LessonCard
              key={lesson.number}
              {...lesson}
              onClick={() => console.log(`Opening lesson ${lesson.number}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
