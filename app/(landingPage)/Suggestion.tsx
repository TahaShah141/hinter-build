import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const Suggestion = () => {
  return (
    <div className="py-10 flex flex-col items-center gap-8 text-white bg-gradient-to-r from-dark to-primary/70">
      <header className="text-center  relative">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 relative inline-block">
          Automation Ideas
          <div className="absolute -bottom-2 md:-bottom-6 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-1 bg-white rounded-full"></div>
        </h2>
        <p className="text-neutral-300 text-base md:text-lg max-w-2xl mx-auto mt-6 md:mt-8 leading-relaxed px-4">
          Give Us Your Automations Ideas, We Will work on it
        </p>
      </header>
      <div className="flex gap-2 w-full justify-center items-center">
        <Input className="w-full max-w-lg bg-gradient-to-br from-white/80 to-white/90 text-black border border-white/20 backdrop-blur-md placeholder:text-black/50" placeholder="Your Idea..." />
        <Button className="bg-gradient-to-br from-white/5 to-white/20 border border-white/20 backdrop-blur-md placeholder:text-white/25">Submit</Button>
      </div>
    </div>
  )
}
