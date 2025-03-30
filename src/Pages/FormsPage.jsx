
import RegistrationForm from "../Components/FormSection/Form2";
import Form3 from "../Components/FormSection/Form3";
import MultiTabForm from './../Components/FormSection/MultiTabForm';


export default function FormsPage() {
  return (
    <div className=" mx-auto  mt-10 ">
      <h2 className="text-2xl font-semibold mb-4 mt-20 dark:text-white">Ultra Multiform</h2>
      <MultiTabForm />
    
      <h2 className="text-2xl font-semibold mb-4 mt-20 dark:text-white">Form Example 2</h2>
      <RegistrationForm/>
    
      <h2 className="text-2xl font-semibold mb-4 mt-20 dark:text-white">Form Example 3</h2>
      <Form3/>
    </div>
  );
}
