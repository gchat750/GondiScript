import LessonCard from "../LessonCard";
import { HandHeart, Users, Hash, UtensilsCrossed, Sun, Sparkles } from "lucide-react";

export default function LessonCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      <LessonCard
        number={1}
        title="Greetings & Basics"
        description="Learn essential greetings and basic phrases"
        icon={HandHeart}
        progress={100}
        gradient="from-primary to-chart-1"
        onClick={() => console.log("Lesson 1 clicked")}
      />
      <LessonCard
        number={2}
        title="Family & Relationships"
        description="Master family terms and relationship words"
        icon={Users}
        progress={75}
        gradient="from-chart-2 to-destructive"
        onClick={() => console.log("Lesson 2 clicked")}
      />
      <LessonCard
        number={3}
        title="Numbers & Counting"
        description="Count from 1-100 in Masaram Gondi"
        icon={Hash}
        progress={45}
        gradient="from-chart-3 to-chart-5"
        onClick={() => console.log("Lesson 3 clicked")}
      />
      <LessonCard
        number={4}
        title="Food & Dining"
        description="Explore food vocabulary and dining phrases"
        icon={UtensilsCrossed}
        progress={20}
        gradient="from-chart-4 to-primary"
        onClick={() => console.log("Lesson 4 clicked")}
      />
      <LessonCard
        number={5}
        title="Daily Activities"
        description="Learn about daily routines and actions"
        icon={Sun}
        progress={0}
        gradient="from-chart-5 to-chart-2"
        onClick={() => console.log("Lesson 5 clicked")}
      />
      <LessonCard
        number={6}
        title="Culture & Traditions"
        description="Discover Gondi culture and customs"
        icon={Sparkles}
        progress={0}
        isLocked={true}
        gradient="from-chart-3 to-primary"
      />
    </div>
  );
}
