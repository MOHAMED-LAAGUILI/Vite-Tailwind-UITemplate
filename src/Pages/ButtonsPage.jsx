import { MousePointerClickIcon } from "lucide-react";
import SharpCard from "../Components/BodyCard";
import ParticleButton from "../Components/Button/Button1";
import Button2 from "../Components/Button/Button2";
import Button3 from "../Components/Button/Button3";

function ButtonsPage() {
  return (
    <div className=" gap-2">
    
        <SharpCard title={"Buttons"} Icon={MousePointerClickIcon} classes={""}>

          <ParticleButton variant="primary">Click Me</ParticleButton>
          <ParticleButton variant="outline">Outline Button</ParticleButton>
          <ParticleButton variant="ghost">Ghost Button</ParticleButton>

          <Button3 label="btn 3" />

          <Button2 />
      
        </SharpCard>
    </div>
  );
}

export default ButtonsPage;
