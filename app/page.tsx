import { Hero } from "./(landingPage)/Hero";
import { Products } from "./(landingPage)/Products";
import { Services } from "./(landingPage)/Services";
import { Technologies } from "./(landingPage)/Technologies";
import { services } from "@/lib/constants/services";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Technologies />
      <Services services={services} />
      <Products />
    </div>
  );
}
