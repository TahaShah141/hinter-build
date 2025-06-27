import { Automations } from "./(landingPage)/Automations";
import Calendly from "./(landingPage)/Calendly";
import { Contact } from "./(landingPage)/Contact";
import { Hero } from "./(landingPage)/Hero";
import { Products } from "./(landingPage)/Products";
import { ServicesSection } from "./(landingPage)/ServicesSection";
import { Suggestion } from "./(landingPage)/Suggestion";
import { TechnologiesSection } from "./(landingPage)/TechnologiesSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Hero />
      <TechnologiesSection />
      <ServicesSection />

      <Products />
      <Suggestion />
      <Automations />
      <Calendly />
      <Contact />
    </div>
  );
}
