import ThemeToggle from "../ThemeToggle";
import { ThemeProvider } from "@/contexts/ThemeContext";

export default function ThemeToggleExample() {
  return (
    <ThemeProvider>
      <div className="p-8">
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}
