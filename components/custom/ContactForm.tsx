"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Mail, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    fetch('/api/mail', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData)
    })
    setFormData({ name: "", email: "", message: "" })
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          size="lg"
          className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 w-56 h-12 text-lg"
        >
          <Mail className="w-5 h-5" />
          Get In Touch
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-white to-gray-50/90 border border-gray-200/50 backdrop-blur-md">
        <DialogHeader className="text-center pb-4">
          <DialogTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-dark to-primary bg-clip-text text-transparent">
            Contact Us
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-base mt-2">
            {"Drop a message and we'll get back to you ASAP!"}
          </DialogDescription>
          <div className="mx-auto w-16 h-1 bg-gradient-to-r from-primary to-primary/70 rounded-full mt-3"></div>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your name"
              required
              className="bg-white/80 border border-gray-200/50 backdrop-blur-sm focus:border-primary/50 focus:ring-primary/20"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              required
              className="bg-white/80 border border-gray-200/50 backdrop-blur-sm focus:border-primary/50 focus:ring-primary/20"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-gray-700">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your project or how we can help..."
              required
              rows={4}
              className="bg-white/80 border border-gray-200/50 backdrop-blur-sm focus:border-primary/50 focus:ring-primary/20 resize-none"
            />
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1 text-black border-gray-200 hover:bg-gray-50"
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send Message
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}