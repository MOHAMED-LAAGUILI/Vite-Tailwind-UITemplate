import 'ldrs/ring';
import 'ldrs/ring2';
import 'ldrs/tailspin';
import 'ldrs/linespinner';
import 'ldrs/squircle';
import 'ldrs/bouncy';
import 'ldrs/zoomies';
import 'ldrs/grid';
import 'ldrs/quantum';
import 'ldrs/pulsar';
import 'ldrs/pinwheel';


function SpinnerPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">
        Loading Spinners UI Kit
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 dark:bg-white p-5">
        <div className="flex flex-col items-center">
          <l-ring size="40" stroke="5" speed="2" color="black"></l-ring>
          <p className="mt-2 text-sm text-gray-700">Ring</p>
        </div>

        <div className="flex flex-col items-center">
          <l-ring-2
            size="40"
            stroke="5"
            stroke-length="0.25"
            speed="0.8"
            color="black"
          ></l-ring-2>
          <p className="mt-2 text-sm text-gray-700 ">
            Ring 2
          </p>
        </div>

        <div className="flex flex-col items-center">
          <l-tailspin
            size="40"
            stroke="5"
            speed="0.9"
            color="black"
          ></l-tailspin>
          <p className="mt-2 text-sm text-gray-700 ">
            Tailspin
          </p>
        </div>

        <div className="flex flex-col items-center">
          <l-line-spinner
            size="40"
            stroke="3"
            speed="1"
            color="black"
          ></l-line-spinner>
          <p className="mt-2 text-sm text-gray-700 ">
            Line Spinner
          </p>
        </div>

        <div className="flex flex-col items-center">
          <l-squircle
            size="37"
            stroke="5"
            stroke-length="0.15"
            speed="0.9"
            color="black"
          ></l-squircle>
          <p className="mt-2 text-sm text-gray-700 ">
            Squircle
          </p>
        </div>

        <div className="flex flex-col items-center">
          <l-bouncy size="45" speed="1.75" color="black"></l-bouncy>
          <p className="mt-2 text-sm text-gray-700 ">
            Bouncy
          </p>
        </div>

        <div className="flex flex-col items-center">
          <l-zoomies size="80" stroke="5" speed="1.4" color="black"></l-zoomies>
          <p className="mt-2 text-sm text-gray-700 ">
            Zoomies
          </p>
        </div>

        <div className="flex flex-col items-center">
          <l-grid size="60" speed="1.5" color="black"></l-grid>
          <p className="mt-2 text-sm text-gray-700 ">Grid</p>
        </div>

        <div className="flex flex-col items-center">
          <l-quantum size="45" speed="1.75" color="black"></l-quantum>
          <p className="mt-2 text-sm text-gray-700 ">
            Quantum
          </p>
        </div>

        <div className="flex flex-col items-center">
          <l-pulsar size="40" speed="1.75" color="black"></l-pulsar>
          <p className="mt-2 text-sm text-gray-700 ">
            Pulsar
          </p>
        </div>

        <div className="flex flex-col items-center">
          <l-pinwheel
            size="35"
            stroke="3.5"
            speed="0.9"
            color="black"
          ></l-pinwheel>
          <p className="mt-2 text-sm text-gray-700 ">
            pinwheel
          </p>
        </div>
      </div>
    </div>
  );
}

export default SpinnerPage;
