import { Star } from "lucide-react";
import Hero1 from "../Components/HeroSection/Hero1";
import Hero2 from "../Components/HeroSection/Hero2";
import SectionTitle from "../Components/Text/SectionTitle";
import Hero3 from "../Components/HeroSection/Hero3";

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
      
      <Hero1/>

      <SectionTitle
        icon={<Star />}
        title="Hero 2"
        subtitle=""
        description=""
        classes="mt-2"

      />
      
<Hero2/>
<SectionTitle
        icon={<Star />}
        title="Hero 3"
        subtitle=""
        description=""
        classes="mt-2"

      />
<Hero3/>

    </>
  )
}
