import { Star } from "lucide-react";
import Hero1 from "../Components/HeroSection/Hero1";
import Hero2 from "../Components/HeroSection/Hero2";
import SectionTitle from "../Components/Text/SectionTitle";
import Hero3 from "../Components/HeroSection/Hero3";
import Hero4 from "../Components/HeroSection/Hero4";
import Hero5 from "../Components/HeroSection/Hero5";

export default function HeroSectionPage() {
  return (
    <>
      <SectionTitle
        icon={<Star />}
        title="Hero 1"
        subtitle=""
        description=""
        classes="mt-2"
      />

      <Hero1 />

      <SectionTitle
        icon={<Star />}
        title="Hero 2"
        subtitle=""
        description=""
        classes="mt-2"
      />

      <Hero2 />
      <SectionTitle
        icon={<Star />}
        title="Hero 3"
        subtitle=""
        description=""
        classes="mt-2"
      />
      <Hero3 />

      <SectionTitle
        icon={<Star />}
        title="Hero 4"
        subtitle=""
        description=""
        classes="mt-2"
      />

      <Hero4 />

      <SectionTitle
        icon={<Star />}
        title="Hero 5"
        subtitle=""
        description=""
        classes="mt-2"
      />
      <Hero5 />
    </>
  );
}
