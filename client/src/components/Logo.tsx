import { GraduationCap } from "lucide-react";

export default function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  const textSizes = {
    sm: "text-base",
    md: "text-xl",
    lg: "text-3xl",
  };

  return (
    <div className="flex items-center gap-2" data-testid="logo">
      <div className="relative">
        <div className={`${sizes[size]} rounded-lg bg-gradient-to-br from-primary to-chart-3 flex items-center justify-center`}>
          <GraduationCap className={`${size === 'sm' ? 'h-4 w-4' : size === 'md' ? 'h-5 w-5' : 'h-7 w-7'} text-white`} />
        </div>
        <div className="absolute -top-1 -right-1 bg-chart-2 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
          3
        </div>
      </div>
      <div className="flex flex-col">
        <span className={`${textSizes[size]} font-bold leading-none text-foreground`}>
          Gondi Gotul Guru
        </span>
        {size !== "sm" && (
          <span className="text-xs text-muted-foreground">Learn Masaram Gondi</span>
        )}
      </div>
    </div>
  );
}
