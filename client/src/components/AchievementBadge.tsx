import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface AchievementBadgeProps {
  title: string;
  description: string;
  icon: LucideIcon;
  unlocked: boolean;
  gradient?: string;
}

export default function AchievementBadge({
  title,
  description,
  icon: Icon,
  unlocked,
  gradient = "from-chart-2 to-destructive",
}: AchievementBadgeProps) {
  return (
    <Card
      className={`hover-elevate ${!unlocked && "opacity-40 grayscale"}`}
      data-testid={`achievement-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-3">
          <div
            className={`
              h-16 w-16 rounded-full bg-gradient-to-br ${gradient} 
              flex items-center justify-center
              ${unlocked && "animate-pulse"}
            `}
          >
            <Icon className="h-8 w-8 text-white" />
          </div>
          <div>
            <h4 className="font-bold text-foreground">{title}</h4>
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
