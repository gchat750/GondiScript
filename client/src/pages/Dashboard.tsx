import { useState } from "react";
import { Flame, BookOpen, Clock, Target } from "lucide-react";
import StatCard from "@/components/StatCard";
import StreakCalendar from "@/components/StreakCalendar";
import ProgressChart from "@/components/ProgressChart";
import AchievementBadge from "@/components/AchievementBadge";
import ActivityTimeline from "@/components/ActivityTimeline";
import { Trophy, Star, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back! 🎉
          </h1>
          <p className="text-muted-foreground">
            Continue your Masaram Gondi learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <StreakCalendar />
          <ProgressChart />
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-foreground">Achievements</h2>
            <Link href="/profile">
              <Button variant="ghost" size="sm" data-testid="button-view-all-achievements">
                View All
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <AchievementBadge
              title="First Steps"
              description="Complete first lesson"
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
        </div>

        <ActivityTimeline />
      </div>
    </div>
  );
}
