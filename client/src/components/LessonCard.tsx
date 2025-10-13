import { LucideIcon, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface LessonCardProps {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
  progress: number;
  isLocked?: boolean;
  gradient: string;
  onClick?: () => void;
}

export default function LessonCard({
  number,
  title,
  description,
  icon: Icon,
  progress,
  isLocked = false,
  gradient,
  onClick,
}: LessonCardProps) {
  return (
    <Card
      className={`overflow-hidden hover-elevate active-elevate-2 ${!isLocked && 'cursor-pointer'} ${isLocked && 'opacity-60'}`}
      onClick={isLocked ? undefined : onClick}
      data-testid={`lesson-card-${number}`}
    >
      <div className={`h-32 bg-gradient-to-br ${gradient} p-6 relative`}>
        <Badge className="absolute top-4 left-4 bg-white/20 text-white border-white/30">
          Lesson {number}
        </Badge>
        {isLocked && (
          <div className="absolute top-4 right-4">
            <Lock className="h-5 w-5 text-white" />
          </div>
        )}
        <Icon className="h-16 w-16 text-white/80 absolute bottom-4 right-4" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium text-foreground">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardContent>
    </Card>
  );
}
