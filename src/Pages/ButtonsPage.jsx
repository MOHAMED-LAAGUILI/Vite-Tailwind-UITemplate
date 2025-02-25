import ParticleButton from "../Components/Button/Button1";

function ButtonsPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <ParticleButton variant="primary">Click Me</ParticleButton>
        <ParticleButton variant="outline">Outline Button</ParticleButton>
        <ParticleButton variant="ghost">Ghost Button</ParticleButton>
      </div>
    </div>
  );
}

export default ButtonsPage;
