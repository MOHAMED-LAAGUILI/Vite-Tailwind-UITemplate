import Form0 from "../Components/Form/Form0";
import Form1 from "../Components/Form/Form1";
import Form3 from "../Components/Form/Form3";

export default function FormsPage() {
  return (
    <div className=" mx-auto  max-w-2xl mt-10 ">
      <h2 className="text-2xl font-semibold mb-4 mt-20 dark:text-white">Form Example 1</h2>
      <Form0 />

      <h2 className="text-2xl font-semibold mb-4 mt-20 dark:text-white">Form Example 2</h2>
      <Form1 />

      <h2 className="text-2xl font-semibold mb-4 mt-20 dark:text-white">Form Example 3</h2>
      <Form3/>
    </div>
  );
}
