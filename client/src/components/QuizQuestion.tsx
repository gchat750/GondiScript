import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";

interface QuizQuestionProps {
  question: string;
  options: string[];
  correctAnswer: number;
  onAnswer: (correct: boolean) => void;
}

export default function QuizQuestion({
  question,
  options,
  correctAnswer,
  onAnswer,
}: QuizQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowResult(true);
    const isCorrect = index === correctAnswer;
    setTimeout(() => {
      onAnswer(isCorrect);
      setSelectedAnswer(null);
      setShowResult(false);
    }, 1500);
  };

  return (
    <Card data-testid="quiz-question">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-6 text-foreground">{question}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === correctAnswer;
            const showCorrect = showResult && isCorrect;
            const showIncorrect = showResult && isSelected && !isCorrect;

            return (
              <Button
                key={index}
                variant="outline"
                className={`
                  h-auto py-4 px-6 text-left justify-start relative
                  ${showCorrect && "border-chart-4 bg-chart-4/10"}
                  ${showIncorrect && "border-destructive bg-destructive/10"}
                `}
                onClick={() => handleAnswer(index)}
                disabled={showResult}
                data-testid={`quiz-option-${index}`}
              >
                <span className="flex-1">{option}</span>
                {showCorrect && (
                  <CheckCircle2 className="h-5 w-5 text-chart-4 absolute right-4" />
                )}
                {showIncorrect && (
                  <XCircle className="h-5 w-5 text-destructive absolute right-4" />
                )}
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
