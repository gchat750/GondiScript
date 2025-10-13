import StatCard from "../StatCard";
import { Flame, BookOpen, Clock, Target } from "lucide-react";

export default function StatCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
      <StatCard
        title="Day Streak"
        value="7"
        icon={Flame}
        subtitle="Keep it up!"
        gradient="from-chart-2 to-destructive"
      />
      <StatCard
        title="Vocabulary"
        value="45"
        icon={BookOpen}
        subtitle="words mastered"
        gradient="from-primary to-chart-1"
      />
      <StatCard
        title="Study Time"
        value="12h"
        icon={Clock}
        subtitle="this week"
        gradient="from-chart-3 to-chart-5"
      />
      <StatCard
        title="Quiz Accuracy"
        value="87%"
        icon={Target}
        subtitle="avg score"
        gradient="from-chart-4 to-primary"
      />
    </div>
  );
}
