"use client"

import { AlertCircle, ArrowRight, CheckCircle, Loader2, Mail, MapPin, MessageSquare, Phone, Send, Shield, Sparkles, Star, User, Zap } from "lucide-react"

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
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

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
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('/api/mail', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: "", email: "", message: "" })
        
        // Reset success status after 3 seconds
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 3000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 3000)
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus('error')
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDirectContact = (type: 'call' | 'email') => {
    if (type === 'call') {
      window.open('tel:+1234567890', '_self')
    } else {
      window.open('mailto:contact@company.com', '_self')
    }
  }

  return (
    <section className="py-16 flex flex-col items-center gap-12 text-white bg-gradient-to-r from-slate-900 to-blue-900 relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-500/15 rounded-full blur-2xl -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4">
        {/* Enhanced header section */}
        <SlidingDiv direction="top" px={50} className="text-center relative z-10 mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative">
              <Mail className="w-12 h-12 md:w-16 md:h-16 text-blue-500 animate-spin-slow" />
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-purple-500 animate-pulse" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white relative">
              Contact Us
            </h2>
          </div>

          {/* Enhanced underline with multiple layers */}
          <div className="relative mx-auto w-24 md:w-36 h-1 mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-white to-white/60 rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-white/80 rounded-full animate-pulse"></div>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-white rounded-full animate-bounce"></div>
          </div>

          <p className="text-neutral-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4 font-medium mb-8">
            Ready to start your next project? Drop us a message and we'll get back to you faster than you can say "innovation"!
          </p>

          {/* Enhanced contact stats */}
          <div className="flex justify-center items-center gap-8 text-sm md:text-base mb-8 flex-wrap">
            <div className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 shadow-sm">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">24/7 Support</span>
            </div>
            <div className="w-1 h-1 bg-white/60 rounded-full hidden sm:block"></div>
            <div className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 shadow-sm">
              <Star className="w-5 h-5" />
              <span className="font-semibold">Quick Response</span>
            </div>
            <div className="w-1 h-1 bg-white/60 rounded-full hidden sm:block"></div>
            <div className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 shadow-sm">
              <Zap className="w-5 h-5" />
              <span className="font-semibold">Expert Team</span>
            </div>
          </div>
        </SlidingDiv>

        {/* Enhanced form section */}
        <SlidingDiv direction="bottom" px={50} className="relative z-10">
          <div className="bg-gradient-to-br from-white/10 to-white/20 border border-white/30 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Enhanced Name Input */}
                <div className="relative group">
                  <label className="block text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Your Name
                  </label>
                  <div className="relative">
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-4 bg-gradient-to-br from-white/90 to-white/95 text-black border border-white/30 rounded-xl placeholder:text-black/50 hover:border-white/50 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 shadow-lg disabled:opacity-50"
                      placeholder="Enter your full name"
                      required
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black/60 group-focus-within:text-blue-500 transition-colors">
                      <User className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Enhanced Email Input */}
                <div className="relative group">
                  <label className="block text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </label>
                  <div className="relative">
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-4 bg-gradient-to-br from-white/90 to-white/95 text-black border border-white/30 rounded-xl placeholder:text-black/50 hover:border-white/50 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 shadow-lg disabled:opacity-50"
                      placeholder="your.email@example.com"
                      required
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black/60 group-focus-within:text-blue-500 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Message Input */}
              <div className="relative group">
                <label className="block text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Your Message
                </label>
                <div className="relative">
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    rows={6}
                    className="w-full px-4 py-4 bg-gradient-to-br from-white/90 to-white/95 text-black border border-white/30 rounded-xl placeholder:text-black/50 hover:border-white/50 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 shadow-lg resize-none disabled:opacity-50"
                    placeholder="Tell us about your project, questions, or how we can help you achieve your goals..."
                    required
                  />
                  <div className="absolute right-3 top-4 text-black/60 group-focus-within:text-blue-500 transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Enhanced Submit Button */}
              <div className="flex justify-center pt-4">
                <Button 
                  type="submit"
                  disabled={isSubmitting || !formData.name.trim() || !formData.email.trim() || !formData.message.trim()}
                  className="bg-gradient-to-r from-white/10 to-white/20 hover:from-white/20 hover:to-white/30 border border-white/30 backdrop-blur-md text-white font-bold px-12 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3 min-w-[200px] disabled:opacity-50 disabled:cursor-not-allowed text-lg group hover:scale-105"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      Sending Message...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-6 h-6" />
                      Message Sent!
                    </>
                  ) : submitStatus === 'error' ? (
                    <>
                      <AlertCircle className="w-6 h-6" />
                      Try Again
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                      Send Message
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </Button>
              </div>

              {/* Enhanced Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl backdrop-blur-md shadow-lg">
                  <div className="flex items-center gap-3 text-green-700">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Thank you for reaching out!</p>
                      <p className="text-green-600">Your message has been sent successfully. We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-6 p-6 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl backdrop-blur-md shadow-lg">
                  <div className="flex items-center gap-3 text-red-700">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                      <AlertCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Oops! Something went wrong.</p>
                      <p className="text-red-600">Please try again or contact us directly at support@company.com</p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </SlidingDiv>

        {/* Enhanced contact highlights */}
        <SlidingDiv direction="bottom" px={50} className="mt-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="flex flex-col items-center gap-3 p-8 rounded-xl bg-gradient-to-br from-white/10 to-white/20 border border-white/20 backdrop-blur-md hover:from-white/20 hover:to-white/30 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-white/20 to-white/30 border border-white/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Quick Response</h3>
              <p className="text-neutral-300 text-center leading-relaxed font-medium">We respond to all inquiries within 24 hours. Our dedicated team ensures your questions get the attention they deserve.</p>
            </div>
            
            <div className="flex flex-col items-center gap-3 p-8 rounded-xl bg-gradient-to-br from-white/10 to-white/20 border border-white/20 backdrop-blur-md hover:from-white/20 hover:to-white/30 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-white/20 to-white/30 border border-white/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Direct Support</h3>
              <p className="text-neutral-300 text-center leading-relaxed font-medium">Personal consultation tailored to your specific needs. Get expert advice from our experienced professionals.</p>
            </div>
            
            <div className="flex flex-col items-center gap-3 p-8 rounded-xl bg-gradient-to-br from-white/10 to-white/20 border border-white/20 backdrop-blur-md hover:from-white/20 hover:to-white/30 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-white/20 to-white/30 border border-white/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Global Reach</h3>
              <p className="text-neutral-300 text-center leading-relaxed font-medium">Serving clients worldwide with local expertise. No matter where you are, we're here to help you succeed.</p>
            </div>
          </div>
        </SlidingDiv>

        {/* Additional call to action */}
        <SlidingDiv direction="top" px={50} className="text-center relative mt-16 z-10">
          <div className="bg-gradient-to-br from-white/10 to-white/20 border border-white/30 backdrop-blur-md rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Prefer Direct Contact?
            </h3>
            <p className="text-neutral-300 text-lg md:text-xl font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
              Sometimes a conversation is worth a thousand emails. Let's connect directly!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => handleDirectContact('call')}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full font-semibold border-2 border-blue-400 hover:border-blue-300 transition-all duration-300 hover:scale-105 shadow-lg group"
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Schedule a Call</span>
              </Button>
              
              <Button
                onClick={() => handleDirectContact('email')}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-full font-semibold border-2 border-purple-400 hover:border-purple-300 transition-all duration-300 hover:scale-105 shadow-lg group"
              >
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Email Directly</span>
              </Button>
            </div>
          </div>
        </SlidingDiv>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  )
}