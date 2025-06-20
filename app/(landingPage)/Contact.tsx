"use client"

import { Mail, MessageSquare, Send, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SlidingDiv } from "@/components/custom/SlidingDiv"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      fetch('/api/mail', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData)
      })      
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Form submission error:", error)
      // Handle error (show error message, etc.)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <SlidingDiv direction="top" px={50} className="py-16 flex flex-col items-center gap-12 text-white bg-gradient-to-r from-dark to-primary/70 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2" />
      
      <header className="text-center relative z-10">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 relative inline-block">
          Contact Us
          <div className="absolute -bottom-2 md:-bottom-6 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-1 bg-gradient-to-r from-white to-white/60 rounded-full shadow-lg" />
        </h2>
        <p className="text-neutral-300 text-base md:text-lg max-w-2xl mx-auto mt-6 md:mt-8 leading-relaxed px-4">
          {"Drop a message and we'll get back to you ASAP!"}
        </p>
      </header>

      <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Name Input */}
          <div className="relative group">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/60 group-focus-within:text-primary transition-colors">
              <User className="w-5 h-5" />
            </div>
            <Input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full py-3 bg-gradient-to-br from-white/90 to-white/95 text-black border border-white/30 backdrop-blur-md placeholder:text-black/50 hover:border-white/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 shadow-lg"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="relative group">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/60 group-focus-within:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full py-3 bg-gradient-to-br from-white/90 to-white/95 text-black border border-white/30 backdrop-blur-md placeholder:text-black/50 hover:border-white/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 shadow-lg"
              placeholder="your.email@example.com"
              required
            />
          </div>
        </div>

        {/* Message Input */}
        <div className="relative group mb-8">
          <div className="absolute left-3 top-4 text-black/60 group-focus-within:text-primary transition-colors">
            <MessageSquare className="w-5 h-5" />
          </div>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={5}
            className="w-full py-3 bg-gradient-to-br from-white/90 to-white/95 text-black border border-white/30 backdrop-blur-md placeholder:text-black/50 hover:border-white/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 shadow-lg resize-none"
            placeholder="Tell us about your project or how we can help..."
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-white/10 to-white/20 hover:from-white/20 hover:to-white/30 border border-white/30 backdrop-blur-md text-white font-semibold px-8 py-3 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 min-w-[140px] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </Button>
        </div>
      </form>
    </SlidingDiv>
  )
}