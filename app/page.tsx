import { Hero } from "./(landingPage)/Hero";
import { Technologies } from "./(landingPage)/Technologies";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Technologies />
    </div>
  );
}
