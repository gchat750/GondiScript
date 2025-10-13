import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, Trophy, Sparkles } from "lucide-react";

const activities = [
  {
    type: "lesson",
    title: "Completed Greetings & Basics",
    time: "2 hours ago",
    icon: BookOpen,
  },
  {
    type: "achievement",
    title: "Unlocked 'Week Warrior' badge",
    time: "5 hours ago",
    icon: Trophy,
  },
  {
    type: "quiz",
    title: "Scored 90% on Numbers Quiz",
    time: "1 day ago",
    icon: Sparkles,
  },
  {
    type: "lesson",
    title: "Started Family & Relationships",
    time: "2 days ago",
    icon: BookOpen,
  },
];

export default function ActivityTimeline() {
  return (
    <Card data-testid="activity-timeline">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0"
                data-testid={`activity-${index}`}
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground">{activity.title}</p>
                  <p className="text-sm text-muted-foreground">{activity.time}</p>
                </div>
                <Badge variant="secondary" className="flex-shrink-0">
                  {activity.type}
                </Badge>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
