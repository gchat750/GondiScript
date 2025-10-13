import AchievementBadge from "../AchievementBadge";
import { Trophy, Flame, Star, BookOpen, Target, Award } from "lucide-react";

export default function AchievementBadgeExample() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-8">
      <AchievementBadge
        title="First Steps"
        description="Complete your first lesson"
        icon={Star}
        unlocked={true}
        gradient="from-chart-2 to-destructive"
      />
      <AchievementBadge
        title="Week Warrior"
        description="7 day streak"
        icon={Flame}
        unlocked={true}
        gradient="from-destructive to-chart-2"
      />
      <AchievementBadge
        title="Vocabulary Master"
        description="Learn 50 words"
        icon={BookOpen}
        unlocked={true}
        gradient="from-primary to-chart-1"
      />
      <AchievementBadge
        title="Perfect Score"
        description="100% on a quiz"
        icon={Target}
        unlocked={false}
        gradient="from-chart-4 to-primary"
      />
      <AchievementBadge
        title="Champion"
        description="Complete all lessons"
        icon={Trophy}
        unlocked={false}
        gradient="from-chart-3 to-chart-5"
      />
      <AchievementBadge
        title="Scholar"
        description="Study 20 hours"
        icon={Award}
        unlocked={false}
        gradient="from-chart-5 to-chart-3"
      />
    </div>
  );
}
