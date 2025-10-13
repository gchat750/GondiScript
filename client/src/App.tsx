import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { useState } from "react";

import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import NavigationTabs from "@/components/NavigationTabs";
import AuthModal from "@/components/AuthModal";
import { Button } from "@/components/ui/button";

import Dashboard from "@/pages/Dashboard";
import Lessons from "@/pages/Lessons";
import Grammar from "@/pages/Grammar";
import Dictionary from "@/pages/Dictionary";
import Profile from "@/pages/Profile";
import Help from "@/pages/Help";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/lessons" component={Lessons} />
      <Route path="/grammar" component={Grammar} />
      <Route path="/dictionary" component={Dictionary} />
      <Route path="/profile" component={Profile} />
      <Route path="/help" component={Help} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <div className="min-h-screen bg-background">
            <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
              <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Logo size="md" />
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <Button
                    variant="default"
                    onClick={() => setAuthModalOpen(true)}
                    data-testid="button-login"
                  >
                    Login
                  </Button>
                </div>
              </div>
            </header>

            <NavigationTabs />

            <main>
              <Router />
            </main>

            <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
          </div>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
