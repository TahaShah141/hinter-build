"use client";

import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/custom/ContactForm";
import { Input } from "@/components/ui/input";
import { SlidingDiv } from "@/components/custom/SlidingDiv";
import { Menu, X, Search } from "lucide-react";
import { useState } from "react";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <SlidingDiv
      direction="top"
      px={50}
      className="flex gap-4 md:gap-6 justify-between items-center relative z-50"
    >
      <div
        className="flex gap-3 md:gap-6 items-center backdrop-blur-md cursor-pointer"
        onClick={() => scrollToSection("hero")}
      >
        <img src={"/logo.png"} className="h-6 md:h-8" />
        <h1 className="font-bold text-white text-xl md:text-3xl">
          Hinter
          <span className="text-primary">
            B<span className="font-medium">uild</span>
          </span>
        </h1>
      </div>

      <div className="hidden lg:flex bg-gradient-to-br from-white/5 to-white/20 gap-8 xl:gap-12 px-6 rounded-full text-sm font-semibold py-1.5 border border-white/20 backdrop-blur-md">
        <p
          className="cursor-pointer hover:text-blue-300 transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
          onClick={() => scrollToSection("services")}
        >
          Services
        </p>
        <p
          className="cursor-pointer hover:text-blue-300 transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
          onClick={() => scrollToSection("products")}
        >
          Products
        </p>
        <p
          className="cursor-pointer hover:text-blue-300 transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
          onClick={() => scrollToSection("automations")}
        >
          Automations
        </p>
      </div>

      <div className="hidden md:flex gap-4 items-center backdrop-blur-md">
        <div className="relative hidden lg:block">
          <Input
            placeholder="Search"
            className="bg-gradient-to-br from-white/5 to-white/20 border border-white/20 backdrop-blur-md placeholder:text-white/25 text-white w-32 xl:w-auto"
          />
          <Search className="h-4 w-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-white/25" />
        </div>
        <Button
          size={"sm"}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 md:px-5 md:py-3 bg-gradient-to-r from-[#0A5EB0] to-[#2A3335] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm"
          onClick={() => scrollToSection("contact")}
        >
          {"Let's Chat"}
        </Button>
      </div>

      <Button
        size="sm"
        variant="ghost"
        className="md:hidden text-white hover:bg-white/10 p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <Menu className="w-5 h-5" />
        )}
      </Button>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mx-4 mt-4 bg-gradient-to-br from-white/10 to-white/25 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-2xl md:hidden z-50">
          <div className="flex flex-col gap-4">
            <div className="relative mb-4">
              <Input
                placeholder="Search"
                className="bg-gradient-to-br from-white/10 to-white/25 border border-white/30 backdrop-blur-md placeholder:text-white/50 text-white pr-10"
              />
              <Search className="h-4 w-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50" />
            </div>

            <div className="flex flex-col gap-2">
              <p
                className="text-white font-semibold py-3 px-4 hover:bg-white/10 rounded-lg transition-colors text-center"
                onClick={() => {
                  scrollToSection("services");
                  setIsMobileMenuOpen(false);
                }}
              >
                Services
              </p>
              <p
                className="text-white font-semibold py-3 px-4 hover:bg-white/10 rounded-lg transition-colors text-center"
                onClick={() => {
                  scrollToSection("products");
                  setIsMobileMenuOpen(false);
                }}
              >
                Products
              </p>
              <p
                className="text-white font-semibold py-3 px-4 hover:bg-white/10 rounded-lg transition-colors text-center"
                onClick={() => {
                  scrollToSection("automations");
                  setIsMobileMenuOpen(false);
                }}
              >
                Automations
              </p>
            </div>

            <Button
              className="w-full bg-gradient-to-r from-[#0A5EB0] to-[#2A3335] hover:from-blue-600 hover:to-slate-700 transition-all duration-300 rounded-full py-3"
              onClick={() => {
                scrollToSection("contact");
                setIsMobileMenuOpen(false);
              }}
            >
              {"Let's Chat"}
            </Button>
          </div>
        </div>
      )}
    </SlidingDiv>
  );
};

export const Hero = () => {
  return (
    <section
      id="hero"
      className="py-8 lg:pb-10 md:py-8 min-h-screen flex flex-col items-center gap-8 md:gap-12 text-white bg-gradient-to-r from-slate-900 to-blue-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2" />
      <div className="absolute top-1/2 left-0 w-48 md:w-64 h-48 md:h-64 bg-purple-500/15 rounded-full blur-2xl -translate-x-1/2" />

      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="w-full h-full relative z-10">
        <div className="w-full h-full flex flex-col gap-16 md:gap-32 px-4 md:px-8 lg:px-12 pt-4 ">
          <Navbar />

          <div className="w-full flex flex-col lg:flex-row justify-between gap-8 lg:gap-4 drop-shadow-md">
            <SlidingDiv
              direction="left"
              px={70}
              className="flex flex-1 flex-col gap-8 md:gap-12 text-center lg:text-left"
            >
              <div className="flex flex-col font-bold text-4xl md:text-6xl lg:text-7xl min-[1600px]:text-8xl leading-tight">
                <h2>In World of</h2>
                <h2 className="text-primary">AI Development</h2>
              </div>

              <p className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                {"We've got you covered"}
              </p>

              <p className="font-light text-lg md:text-xl lg:text-2xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {
                  "HinterBuild has the team to create and manage your GenAI Applications"
                }
              </p>

              <div className="flex sm:flex-row gap-4 md:gap-8 items-center justify-center lg:justify-start mt-4">
                <ContactForm />
                <Button
                  className="font-bold px-8 py-3 sm:w-56 md:w-56 h-12 text-lg"
                  variant={"secondary"}
                  onClick={() => scrollToSection("services")}
                >
                  Services
                </Button>
              </div>
            </SlidingDiv>

            <div className="flex flex-col flex-1 gap-4 justify-center">
              <SlidingDiv direction="right" px={70} className="relative">
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 to-white/20 border border-white/10 backdrop-blur-md shadow-2xl p-2">
                  <video
                    className="w-full h-[300px] lg:h-[500px] object-cover rounded-2xl"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/hero-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  <div className="absolute inset-2 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none rounded-2xl" />

                  <div className="absolute inset-2 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none rounded-2xl" />
                </div>
              </SlidingDiv>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
