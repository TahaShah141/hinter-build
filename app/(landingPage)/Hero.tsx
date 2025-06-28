"use client";

import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/custom/ContactForm";
import { SlidingDiv } from "@/components/custom/SlidingDiv";
import { Navbar } from "@/components/custom/Navbar";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export const Hero = () => {
  return (
    <>
      <Navbar />
      <section
        id="hero"
        className="pt-32 pb-8 lg:pb-10 md:pb-8 min-h-screen flex flex-col items-center gap-8 md:gap-12 text-white bg-gradient-to-r from-slate-900 to-blue-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2" />
        <div className="absolute top-1/2 left-0 w-48 md:w-64 h-48 md:h-64 bg-purple-500/15 rounded-full blur-2xl -translate-x-1/2" />

        <div className="absolute inset-0 bg-grid opacity-30" />

        <div className="w-full h-full relative z-10 ">
          <div className="w-full h-full flex flex-col justify-center  px-4 md:px-8 lg:px-12">
            <div className="w-full flex flex-col lg:flex-row justify-between gap-8 lg:gap-2 drop-shadow-md">
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
                    "HinterBuild has the team to develop and deploy your GenAI Applications"
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
                  <div className="relative  overflow-hidden backdrop-blur-md ">
                    <video
                      className="w-full h-[350px] lg:h-[570px] object-cover "
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
    </>
  );
};
