import { Star } from "lucide-react";
import Hero1 from "../Components/HeroSection/Hero1";
import Hero2 from "../Components/HeroSection/Hero2";
import Hero3 from "../Components/HeroSection/Hero3";
import Hero4 from "../Components/HeroSection/Hero4";
import Hero5 from "../Components/HeroSection/Hero5";
import SharpCard from "../Components/BodyCard";
import HeroSection from "../Components/BackGround/BackgroundShape2";

export default function HeroSectionPage() {
  return (
    <>
      <SharpCard title={"Hero1"} Icon={Star} classes={""}>
        <Hero1 />
      </SharpCard>

      <SharpCard title={"Hero2"} Icon={Star} classes={""}>
        <Hero2 />
      </SharpCard>

      <SharpCard title={"Hero3"} Icon={Star} classes={""}>
        <Hero3 />
      </SharpCard>

      <SharpCard title={"Hero4"} Icon={Star} classes={""}>
        <Hero4 />
      </SharpCard>

      <SharpCard title={"Hero5"} Icon={Star} classes={""}>
        <Hero5 />
      </SharpCard>
      <SharpCard title={"Hero6"} Icon={Star} classes={""}>
        <HeroSection />
      </SharpCard>
    </>
  );
}
