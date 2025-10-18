// App with Replit Auth integration (based on blueprint:javascript_log_in_with_replit)
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { useAuth } from "@/hooks/useAuth";

import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import NavigationTabs from "@/components/NavigationTabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Loader2 } from "lucide-react";

import Dashboard from "@/pages/Dashboard";
import Lessons from "@/pages/Lessons";
import Grammar from "@/pages/Grammar";
import Dictionary from "@/pages/Dictionary";
import Profile from "@/pages/Profile";
import Help from "@/pages/Help";
import NotFound from "@/pages/not-found";

function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-chart-3/5 flex items-center justify-center p-6">
      <Card className="max-w-2xl w-full">
        <CardContent className="p-12">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <Logo size="lg" />
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl font-bold text-foreground">
                Learn Masaram Gondi
              </h1>
              <p className="text-lg text-muted-foreground">
                Master the authentic Gondi script with interactive lessons, games, and comprehensive tracking
              </p>
            </div>
            <div className="pt-4">
              <Button
                size="lg"
                onClick={() => window.location.href = "/api/login"}
                data-testid="button-landing-login"
                className="text-lg px-8"
              >
                <GraduationCap className="mr-2 h-5 w-5" />
                Start Learning
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                100+ words • 6 interactive lessons • Track your progress
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function AuthenticatedApp() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo size="md" />
          <div className="flex items-center gap-4">
            {user && (
              <span className="text-sm text-muted-foreground hidden sm:inline">
                Welcome, {user.firstName || user.email}!
              </span>
            )}
            <ThemeToggle />
            <Button
              variant="outline"
              onClick={() => window.location.href = "/api/logout"}
              data-testid="button-logout"
            >
              Logout
            </Button>
          </div>
        </div>
      </header>

      <NavigationTabs />

      <main>
        <Switch>
          <Route path="/" component={Dashboard} />
          <Route path="/lessons" component={Lessons} />
          <Route path="/grammar" component={Grammar} />
          <Route path="/dictionary" component={Dictionary} />
          <Route path="/profile" component={Profile} />
          <Route path="/help" component={Help} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}

function Router() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return isAuthenticated ? <AuthenticatedApp /> : <Landing />;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Router />
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
