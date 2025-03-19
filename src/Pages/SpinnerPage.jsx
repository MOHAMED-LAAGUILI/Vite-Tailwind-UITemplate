import Spinner0 from "../Components/Spinner/Spinner0";
import Spinner1 from "../Components/Spinner/Spinner1";
import Spinner2 from "../Components/Spinner/Spinner2";

function SpinnerPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        Loading Spinners UI Kit
      </h1>

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
  );
}

export default SpinnerPage;
