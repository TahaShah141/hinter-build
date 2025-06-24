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
    <div className="flex flex-col">
      <Hero />
      <ServicesSection />
      <TechnologiesSection />
      <Products />
      <Suggestion />
      <Automations />
      <Calendly />
      <Contact />
    </div>
  );
}
