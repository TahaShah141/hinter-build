"use client";

import {
  AlertCircle,
  CheckCircle,
  Lightbulb,
  Loader2,
  Send,
  Shield,
  Star,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export const Suggestion = () => {
  const [prompt, setPrompt] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async () => {
    if (!prompt.trim()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "A Visitor",
          email: "-",
          message: `Automation Idea: ${prompt}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setPrompt("");
        setTimeout(() => setSubmitStatus("idle"), 3000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("Error submitting idea:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 md:py-32 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Lightbulb className="w-8 h-8 text-yellow-400" />
              <h2 className="text-4xl md:text-5xl font-bold">
                Share Your Automation Idea
              </h2>
            </div>

            <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed mb-12">
              Have a brilliant automation concept? Describe it in simple terms
              and we&apos;ll help transform your vision into reality. Every
              innovation starts with a great idea.
            </p>

            <div className="flex flex-wrap gap-4 text-base md:text-lg">
              <div className="flex items-center gap-2 text-blue-300">
                <Shield className="w-5 h-5" />
                <span>Ideas Protected</span>
              </div>
              <div className="flex items-center gap-2 text-green-300">
                <Zap className="w-5 h-5" />
                <span>Fast Response</span>
              </div>
              <div className="flex items-center gap-2 text-purple-300">
                <Star className="w-5 h-5" />
                <span>Expert Review</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-16 md:p-20 border border-white/20">
            <div className="space-y-10">
              <div className="relative">
                <Textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full h-48 px-8 py-8 bg-white/90 !text-gray-600 border border-white/30 rounded-xl placeholder:text-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none text-lg overflow-y-auto"
                  placeholder="Describe your automation idea... 

e.g., 'Automatically categorize customer support tickets based on urgency and route them to the right team members'"
                />
              </div>

              <Button
                onClick={handleSubmit}
                disabled={isSubmitting || !prompt.trim()}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : submitStatus === "success" ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Submitted!
                  </>
                ) : submitStatus === "error" ? (
                  <>
                    <AlertCircle className="w-5 h-5 mr-2" />
                    Try Again
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Submit Idea
                  </>
                )}
              </Button>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-500/20 border border-green-400/30 rounded-xl">
                  <p className="text-green-300 text-sm">
                    Your idea has been submitted! We&apos;ll review it and get
                    back to you.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-500/20 border border-red-400/30 rounded-xl">
                  <p className="text-red-300 text-sm">
                    Something went wrong. Please try again.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
