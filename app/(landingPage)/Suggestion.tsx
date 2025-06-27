"use client";

import {
  AlertCircle,
  ArrowRight,
  Brain,
  CheckCircle,
  Lightbulb,
  Loader2,
  MessageSquare,
  Rocket,
  Send,
  Shield,
  Sparkles,
  Star,
  Target,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SlidingDiv } from "@/components/custom/SlidingDiv";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export const Suggestion = () => {
  const [formData, setFormData] = useState({
    idea: "",
    category: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.idea.trim()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "A Visitor",
          email: "-",
          message: `Automation Idea Submission:
          
Category: ${formData.category || "General"}
Idea: ${formData.idea}
Description: ${formData.description || "No additional description provided"}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ idea: "", category: "", description: "" });

        // Reset success status after 3 seconds
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 3000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 3000);
      }
    } catch (error) {
      console.error("Error submitting idea:", error);
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const categories = [
    { value: "workflow", label: "Workflow Automation", icon: Zap },
    { value: "ai", label: "AI Integration", icon: Brain },
    { value: "business", label: "Business Process", icon: Target },
    { value: "productivity", label: "Productivity Tool", icon: Rocket },
    { value: "other", label: "Other", icon: Lightbulb },
  ];

  return (
    <section className="py-16 flex flex-col items-center gap-12 text-white bg-gradient-to-r from-slate-900 to-blue-900 relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-500/15 rounded-full blur-2xl -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4">
        {/* Enhanced header section */}
        <SlidingDiv
          direction="top"
          px={50}
          className="text-center relative z-10 mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative">
              <Lightbulb className="w-12 h-12 md:w-16 md:h-16 text-primary animate-spin-slow" />
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-500 animate-pulse" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white relative">
              Automation Ideas
            </h2>
          </div>

          {/* Enhanced underline with multiple layers */}
          <div className="relative mx-auto w-24 md:w-36 h-1 mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-white to-white/60 rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-white/80 rounded-full animate-pulse"></div>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-white rounded-full animate-bounce"></div>
          </div>

          <p className="text-neutral-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4 sm:px-6 md:px-8 font-medium mb-8">
            Have a brilliant automation idea? Share it with us and watch as we
            transform your vision into reality! Every great innovation starts
            with a single spark.
          </p>

          {/* Enhanced idea stats */}
          <div className="flex justify-center items-center gap-8 text-sm md:text-base mb-8 flex-wrap">
            <div className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 shadow-sm">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">Ideas Protected</span>
            </div>
            <div className="w-1 h-1 bg-white/60 rounded-full hidden sm:block"></div>
            <div className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 shadow-sm">
              <Star className="w-5 h-5" />
              <span className="font-semibold">Fast Implementation</span>
            </div>
            <div className="w-1 h-1 bg-white/60 rounded-full hidden sm:block"></div>
            <div className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 shadow-sm">
              <Zap className="w-5 h-5" />
              <span className="font-semibold">Expert Review</span>
            </div>
          </div>
        </SlidingDiv>

        {/* Enhanced form section */}
        <SlidingDiv direction="bottom" px={50} className="relative z-10">
          <div className="bg-gradient-to-br from-white/10 to-white/20 border border-white/30 backdrop-blur-md rounded-3xl w-full p-4 sm:p-6 md:p-12 shadow-2xl max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Category Selection */}
              <div className="relative group">
                <label className=" text-sm font-semibold text-white mb-4 flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Automation Category
                </label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <button
                        key={category.value}
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            category: category.value,
                          }))
                        }
                        className={`relative p-4 rounded-xl border-2 transition-all duration-300 flex flex-col items-center gap-2 text-sm font-medium ${
                          formData.category === category.value
                            ? "border-primary bg-primary/20 text-white shadow-lg scale-105"
                            : "border-white/30 bg-white/10 text-white/80 hover:border-white/50 hover:bg-white/15"
                        }`}
                      >
                        <IconComponent className="w-6 h-6" />
                        <span className="text-center leading-tight">
                          {category.label}
                        </span>
                        {formData.category === category.value && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Enhanced Idea Input */}
              <div className="relative group">
                <label className=" text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  Your Automation Idea
                </label>
                <div className="relative">
                  <Input
                    name="idea"
                    value={formData.idea}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-4 bg-gradient-to-br from-white/90 to-white/95 text-black border border-white/30 rounded-xl placeholder:text-black/50 hover:border-white/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 shadow-lg disabled:opacity-50"
                    placeholder="Describe your automation idea in one sentence..."
                    required
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black/60 group-focus-within:text-primary transition-colors">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Enhanced Description Input */}
              <div className="relative group">
                <label className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Detailed Description (Optional)
                </label>
                <div className="relative">
                  <Textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    rows={4}
                    className="w-full px-4 py-4 bg-gradient-to-br from-white/90 to-white/95 text-black border border-white/30 rounded-xl placeholder:text-black/50 hover:border-white/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 shadow-lg resize-none disabled:opacity-50"
                    placeholder="Provide more details about your idea, what problem it solves, how it would work, or any specific requirements..."
                  />
                  <div className="absolute right-3 top-4 text-black/60 group-focus-within:text-primary transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="flex justify-center pt-4">
                {" "}
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting || !formData.idea.trim()}
                  className="inline-flex items-center justify-center gap-3 w-56 py-5 bg-gradient-to-r from-[#0A5EB0] to-[#2A3335] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      Submitting Idea...
                    </>
                  ) : submitStatus === "success" ? (
                    <>
                      <CheckCircle className="w-6 h-6" />
                      Idea Submitted!
                    </>
                  ) : submitStatus === "error" ? (
                    <>
                      <AlertCircle className="w-6 h-6" />
                      Try Again
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                      Submit Idea
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </Button>
              </div>

              {/* Enhanced Status Messages */}
              {submitStatus === "success" && (
                <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl backdrop-blur-md shadow-lg">
                  <div className="flex items-center gap-3 text-green-700">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">
                        Your idea has been submitted!
                      </p>
                      <p className="text-green-600">
                        Our expert team will review your automation idea and get
                        back to you with implementation possibilities.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mt-6 p-6 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl backdrop-blur-md shadow-lg">
                  <div className="flex items-center gap-3 text-red-700">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                      <AlertCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">
                        Oops! Something went wrong.
                      </p>
                      <p className="text-red-600">
                        Please try again or contact us directly. Your ideas are
                        valuable to us!
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </SlidingDiv>

        {/* Enhanced feature highlights */}
        <SlidingDiv direction="bottom" px={50} className="mt-16 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="flex flex-col items-center gap-3 p-4 sm:p-6 md:p-8 rounded-xl bg-gradient-to-br from-white/10 to-white/20 border border-white/20 backdrop-blur-md hover:from-white/20 hover:to-white/30 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-white/20 to-white/30 border border-white/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Creative Solutions
              </h3>
              <p className="text-neutral-300 text-center leading-relaxed font-medium">
                We transform your innovative concepts into practical automation
                solutions that drive real business value.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 p-4 sm:p-6 md:p-8 rounded-xl bg-gradient-to-br from-white/10 to-white/20 border border-white/20 backdrop-blur-md hover:from-white/20 hover:to-white/30 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-white/20 to-white/30 border border-white/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Rapid Prototyping
              </h3>
              <p className="text-neutral-300 text-center leading-relaxed font-medium">
                Quick evaluation and prototype development to validate your
                ideas before full implementation.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 p-4 sm:p-6 md:p-8 rounded-xl bg-gradient-to-br from-white/10 to-white/20 border border-white/20 backdrop-blur-md hover:from-white/20 hover:to-white/30 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-white/20 to-white/30 border border-white/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Full Implementation
              </h3>
              <p className="text-neutral-300 text-center leading-relaxed font-medium">
                Complete development, testing, and deployment with ongoing
                support and optimization.
              </p>
            </div>
          </div>
        </SlidingDiv>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};
