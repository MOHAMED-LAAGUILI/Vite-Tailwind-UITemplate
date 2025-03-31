import Spinner0 from "../Components/Spinner/Spinner0";
import Spinner1 from "../Components/Spinner/Spinner1";
import Spinner2 from "../Components/Spinner/Spinner2";
import Spinner3 from "../Components/Spinner/Spinner3";
import Spinner4 from "../Components/Spinner/Spinner4";
import SharpCard from "../Components/BodyCard";
import QuantumSpinner from "../Components/Spinner/QuantumSpinner";

function SpinnerPage() {
  return (

    
    <SharpCard title={"Loading Spinners UI Kit"} Icon={""}>

    <div className="flex flex-col items-center justify-center">
     

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
         {/* Spinner 0 */}
         <div className="flex flex-col items-center">
          <Spinner0 />
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
            Spinner 0
          </p>
        </div>
        
        {/* Spinner 1 */}
        <div className="flex flex-col items-center">
          <Spinner1 />
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
            Spinner 1
          </p>
        </div>

        {/* Spinner 2 */}
        <div className="flex flex-col items-center">
          <Spinner2 />
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
            Spinner 2
          </p>
        </div>

{/* Spinner 2 */}
<div className="flex flex-col items-center">
          <Spinner3 />
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
            Spinner 3
          </p>
        </div>

        {/* Spinner 2 */}
        <div className="flex flex-col items-center">
          <Spinner4 />
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
            Spinner 4
          </p>
        </div>

        <div className="flex flex-col items-center">
          <QuantumSpinner />
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
            Spinner 5
          </p>
        </div>
         
      </div>

      {/* Resources Section */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Other Resources:
          <a
            href="https://uiball.com/ldrs/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {" LRDS"}
          </a>{" "}
          &nbsp;|&nbsp;
          <a
            href="https://cssloaders.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            CSS Loaders
          </a>
          &nbsp;|&nbsp;
          <a
            href="https://loading.io/css/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            loading.io
          </a>
          &nbsp;|&nbsp;
          <a
            href="https://10015.io/tools/css-loader-generator"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            100L5
          </a>
          &nbsp;|&nbsp;
          <a
            href="https://devsnap.me/css-spinners"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            devsnap.me
          </a>
          &nbsp;|&nbsp;
          <a
            href="https://freefrontend.com/css-spinners/
"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            freefrontend
          </a>
          &nbsp;|&nbsp;
        </p>
      </div>
    </div>
    </SharpCard>
  );
}

export default SpinnerPage;
