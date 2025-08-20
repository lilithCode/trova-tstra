import HeroSection from "./../components/HeroSection";
import Particles from "./../components/Particles";


export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative min-h-screen bg-gradient-to-b from-[#000000] to-[#0f0f2e]">
        <Particles className="absolute inset-0 z-0" />
        <HeroSection className="relative z-10" />
      </div>
    </main>
  );
}