import { Volume2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface VocabularyCardProps {
  gondi: string;
  pronunciation: string;
  english: string;
  hindi: string;
  example?: string;
}

export default function VocabularyCard({
  gondi,
  pronunciation,
  english,
  hindi,
  example,
}: VocabularyCardProps) {
  const handlePlayAudio = () => {
    console.log(`Playing audio for: ${pronunciation}`);
  };

  return (
    <Card className="hover-elevate" data-testid={`vocab-card-${pronunciation}`}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="text-4xl font-gondi text-primary">{gondi}</div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePlayAudio}
            data-testid="button-play-audio"
            className="hover-elevate active-elevate-2"
          >
            <Volume2 className="h-4 w-4" />
          </Button>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground italic">/{pronunciation}/</p>
          <p className="font-medium text-foreground">{english}</p>
          <p className="text-sm text-muted-foreground">{hindi}</p>
          {example && (
            <p className="text-xs text-muted-foreground pt-2 border-t border-border mt-3">
              {example}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
