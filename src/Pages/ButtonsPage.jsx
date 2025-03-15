import ParticleButton from "../Components/Button/Button1";
import Button2 from "../Components/Button/Button2";
import Button3 from "../Components/Button/Button3";

function ButtonsPage() {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <ParticleButton variant="primary">Click Me</ParticleButton>
        <ParticleButton variant="outline">Outline Button</ParticleButton>
        <ParticleButton variant="ghost">Ghost Button</ParticleButton>

      <Button3 label="btn 3"/>

<Button2/>
      </div>
    </div>
  );
}

export default ButtonsPage;
