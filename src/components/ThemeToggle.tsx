import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./hooks/use-theme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="relative overflow-hidden border-2 hover:scale-105 transition-all duration-300"
    >
      <Sun 
        className={`h-4 w-4 transition-all duration-500 ${
          theme === "dark" 
            ? "rotate-90 scale-0 opacity-0" 
            : "rotate-0 scale-100 opacity-100"
        }`} 
      />
      <Moon 
        className={`absolute h-4 w-4 transition-all duration-500 ${
          theme === "dark" 
            ? "rotate-0 scale-100 opacity-100" 
            : "-rotate-90 scale-0 opacity-0"
        }`} 
      />
      <span className="sr-only">Cambiar tema</span>
    </Button>
  );
}