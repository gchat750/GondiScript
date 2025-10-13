import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy } from "lucide-react";

interface UserProfileProps {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  xp: number;
  nextLevelXp: number;
}

export default function UserProfile({ name, level, xp, nextLevelXp }: UserProfileProps) {
  const progress = (xp / nextLevelXp) * 100;
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const levelColors = {
    Beginner: "from-chart-1 to-primary",
    Intermediate: "from-chart-2 to-destructive",
    Advanced: "from-chart-3 to-chart-5",
    Expert: "from-chart-4 to-primary",
  };

  return (
    <Card data-testid="user-profile">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-chart-2" />
          Your Profile
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarFallback className={`bg-gradient-to-br ${levelColors[level]} text-white text-xl font-bold`}>
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground">{name}</h3>
            <Badge variant="secondary" className="mt-1">
              {level}
            </Badge>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Level Progress</span>
            <span className="font-medium text-foreground">
              {xp} / {nextLevelXp} XP
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardContent>
    </Card>
  );
}
