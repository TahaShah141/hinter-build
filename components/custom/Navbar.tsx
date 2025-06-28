"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900/95 to-blue-900/95 backdrop-blur-xl border-b border-white/20 shadow-lg">
      <div className="px-4 md:px-8 lg:px-12 py-4">
        <div className="flex gap-4 md:gap-6 justify-between items-center relative z-50">
          <div
            className="flex gap-3 md:gap-6 items-center cursor-pointer"
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

          <div className="hidden md:flex gap-4 items-center ">
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
            <div className="absolute top-full left-0 right-0 mx-4 mt-4 bg-gradient-to-br from-slate-900/95 to-blue-900/95 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl md:hidden z-50">
              <div className="flex flex-col gap-4">
                <div className="relative mb-4">
                  <Input
                    placeholder="Search"
                    className="bg-gradient-to-br from-slate-800/80 to-blue-800/80 border border-white/20 backdrop-blur-md placeholder:text-white/60 text-white pr-10 focus:border-primary focus:ring-primary"
                  />
                  <Search className="h-4 w-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60" />
                </div>

                <div className="flex flex-col gap-2">
                  <p
                    className="text-white font-semibold py-3 px-4 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-slate-600/20 hover:border hover:border-primary/30 rounded-lg transition-all duration-200 text-center cursor-pointer"
                    onClick={() => {
                      scrollToSection("services");
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Services
                  </p>
                  <p
                    className="text-white font-semibold py-3 px-4 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-slate-600/20 hover:border hover:border-primary/30 rounded-lg transition-all duration-200 text-center cursor-pointer"
                    onClick={() => {
                      scrollToSection("products");
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Products
                  </p>
                  <p
                    className="text-white font-semibold py-3 px-4 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-slate-600/20 hover:border hover:border-primary/30 rounded-lg transition-all duration-200 text-center cursor-pointer"
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
        </div>
      </div>
    </nav>
  );
};
