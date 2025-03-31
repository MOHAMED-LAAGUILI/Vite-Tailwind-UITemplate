import HeroGeometric from "../Components/BackGround/BackgroundShape";
import BackgroundPaths from "../Components/BackGround/BackgroundPath";
import HeroSection from "../Components/BackGround/BackgroundShape2";
import ParticlesBackground3 from "../Components/BackGround/BackgroundShape3";
import SharpCard from "../Components/BodyCard";
import {  Shapes } from "lucide-react";


function BgPage() {
  const backgroundComponents = [
    { title: "Background Paths", component: <BackgroundPaths /> },
    { title: "Hero Geometric", component: <HeroGeometric /> },
    { title: "Hero section", component: <HeroSection /> },
  ];

  return (
    <>
      {backgroundComponents.map(({ title, component }, index) => (
        <SharpCard key={index} title={title} Icon={Shapes}>
          {component}
        </SharpCard>
      ))}

<SharpCard  title={"Particles Background"} Icon={Shapes}/>

<ParticlesBackground3 />
    </>
  );
}

export default BgPage;
