import { useState } from "react";
import QuizQuestion from "../QuizQuestion";

export default function QuizQuestionExample() {
  const [score, setScore] = useState(0);

  return (
    <div className="p-8 space-y-4">
      <div className="text-center mb-4">
        <p className="text-2xl font-bold">Score: {score}</p>
      </div>
      <QuizQuestion
        question="What does '𑴌𑴳𑵃𑴱𑵄𑴲' mean?"
        options={["Goodbye", "Hello", "Thank you", "Please"]}
        correctAnswer={1}
        onAnswer={(correct) => {
          if (correct) setScore(score + 1);
          console.log(correct ? "Correct!" : "Incorrect");
        }}
      />
    </div>
  );
}
