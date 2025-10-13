import { Home, BookOpen, FileText, User, BookA, HelpCircle } from "lucide-react";
import { useLocation, Link } from "wouter";

const tabs = [
  { id: "dashboard", label: "Dashboard", icon: Home, path: "/" },
  { id: "lessons", label: "Lessons", icon: BookOpen, path: "/lessons" },
  { id: "grammar", label: "Grammar", icon: FileText, path: "/grammar" },
  { id: "dictionary", label: "Dictionary", icon: BookA, path: "/dictionary" },
  { id: "profile", label: "Profile", icon: User, path: "/profile" },
  { id: "help", label: "Help", icon: HelpCircle, path: "/help" },
];

export default function NavigationTabs() {
  const [location] = useLocation();

  return (
    <nav className="border-b border-border bg-card" data-testid="navigation-tabs">
      <div className="max-w-7xl mx-auto">
        <div className="flex overflow-x-auto hide-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = location === tab.path;

            return (
              <Link key={tab.id} href={tab.path}>
                <a
                  className={`
                    flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap
                    hover-elevate active-elevate-2
                    ${
                      isActive
                        ? "border-primary text-primary bg-primary/5"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }
                  `}
                  data-testid={`tab-${tab.id}`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="hidden sm:inline font-medium">{tab.label}</span>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </nav>
  );
}
