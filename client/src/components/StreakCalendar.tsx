import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame } from "lucide-react";

export default function StreakCalendar() {
  const today = new Date();
  const days = [];
  
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    days.push(date);
  }

  const activeDays = [0, 1, 2, 3, 4, 5, 6];

  return (
    <Card data-testid="streak-calendar">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Flame className="h-5 w-5 text-chart-2" />
          7 Day Streak
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-2">
          {days.map((day, index) => {
            const isActive = activeDays.includes(index);
            const isToday = index === 6;

            return (
              <div
                key={index}
                className="flex flex-col items-center"
                data-testid={`streak-day-${index}`}
              >
                <div
                  className={`
                    w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium
                    ${isActive ? "bg-gradient-to-br from-chart-2 to-destructive text-white" : "bg-muted text-muted-foreground"}
                    ${isToday && "ring-2 ring-primary ring-offset-2"}
                  `}
                >
                  {day.getDate()}
                </div>
                <span className="text-xs text-muted-foreground mt-1">
                  {["S", "M", "T", "W", "T", "F", "S"][day.getDay()]}
                </span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
