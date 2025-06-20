import { Automations } from "./(landingPage)/Automations";
import { Contact } from "./(landingPage)/Contact";
import { Hero } from "./(landingPage)/Hero";
import { Products } from "./(landingPage)/Products";
import { Services } from "./(landingPage)/Services";
import { Suggestion } from "./(landingPage)/Suggestion";
import { Technologies } from "./(landingPage)/Technologies";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Technologies />
      <Services />
      <Products />
      <Suggestion />
      <Automations />
      <Contact />
    </div>
  );
}
