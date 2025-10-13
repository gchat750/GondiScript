import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MessageSquare, HelpCircle, Send } from "lucide-react";
import { useState } from "react";

export default function Help() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Help request submitted:", { subject, message });
    setSubject("");
    setMessage("");
  };

  const faqs = [
    {
      q: "How do I start learning?",
      a: "Begin with Lesson 1: Greetings & Basics from the Lessons tab. Complete each lesson in order to unlock the next one.",
    },
    {
      q: "How are streaks calculated?",
      a: "A streak is maintained by studying at least once per day. Missing a day will reset your streak to 0.",
    },
    {
      q: "Can I download lessons offline?",
      a: "Offline support is coming soon! For now, you need an internet connection to access lessons.",
    },
    {
      q: "How do I unlock achievements?",
      a: "Achievements are unlocked automatically as you complete lessons, maintain streaks, and reach learning milestones.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Help & Support
          </h1>
          <p className="text-muted-foreground">
            Get help with your Gondi learning journey
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5" />
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="pb-4 border-b border-border last:border-0 last:pb-0">
                <h3 className="font-medium text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Send Feedback or Ask a Question
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="What do you need help with?"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  data-testid="input-help-subject"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Describe your question or feedback in detail..."
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  data-testid="input-help-message"
                />
              </div>
              <Button type="submit" className="w-full" data-testid="button-submit-help">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-muted-foreground">
              <strong>Email:</strong> support@gondigotulguru.com
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM IST
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
