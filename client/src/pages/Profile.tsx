import UserProfile from "@/components/UserProfile";
import AchievementBadge from "@/components/AchievementBadge";
import ActivityTimeline from "@/components/ActivityTimeline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Flame, Star, BookOpen, Target, Award, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Profile() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Your Profile
          </h1>
          <p className="text-muted-foreground">
            Track your progress and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <UserProfile
              name="Rajesh Kumar"
              level="Intermediate"
              xp={750}
              nextLevelXp={1000}
            />
          </div>

          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Learning Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-3xl font-bold text-foreground">6</p>
                    <p className="text-sm text-muted-foreground">Lessons Completed</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">45</p>
                    <p className="text-sm text-muted-foreground">Words Mastered</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">87%</p>
                    <p className="text-sm text-muted-foreground">Quiz Average</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">12h</p>
                    <p className="text-sm text-muted-foreground">Total Study Time</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-foreground">All Achievements</h2>
            <p className="text-sm text-muted-foreground">3 of 8 unlocked</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
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
              title="Vocab Master"
              description="Learn 50 words"
              icon={BookOpen}
              unlocked={true}
              gradient="from-primary to-chart-1"
            />
            <AchievementBadge
              title="Perfect Score"
              description="100% on quiz"
              icon={Target}
              unlocked={false}
              gradient="from-chart-4 to-primary"
            />
            <AchievementBadge
              title="Speed Learner"
              description="Lesson in 1 day"
              icon={Zap}
              unlocked={false}
              gradient="from-chart-5 to-chart-2"
            />
            <AchievementBadge
              title="Champion"
              description="Complete all"
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
            <AchievementBadge
              title="Master"
              description="Reach Expert"
              icon={Crown}
              unlocked={false}
              gradient="from-primary to-chart-3"
            />
          </div>
        </div>

        <ActivityTimeline />

        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full justify-start" data-testid="button-edit-profile">
              Edit Profile
            </Button>
            <Button variant="outline" className="w-full justify-start" data-testid="button-clear-data">
              Clear Learning Data
            </Button>
            <Button variant="outline" className="w-full justify-start text-destructive" data-testid="button-logout">
              Logout
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
