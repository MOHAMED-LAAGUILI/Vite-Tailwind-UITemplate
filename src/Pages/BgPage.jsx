import HeroGeometric from "../Components/BackGround/BackgroundShape";
import BackgroundPaths from "../Components/BackGround/BackgroundPath";
import HeroSection from "../Components/BackGround/BackgroundShape2";
import ParticlesBackground3 from "../Components/BackGround/BackgroundShape3";
import BackgroundShape4 from "../Components/BackGround/BackgroundShape4";

function BgPage() {
  return (
    <>
      <BackgroundPaths />

      <HeroGeometric />
      <HeroSection/>
      <ParticlesBackground3/>
      <BackgroundShape4/>

    </>
  );
}

export default BgPage;
