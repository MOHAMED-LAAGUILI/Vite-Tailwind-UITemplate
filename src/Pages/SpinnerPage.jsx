import { useEffect, useState } from "react";
import "ldrs/ring";
import "ldrs/ring2";
import "ldrs/tailspin";
import "ldrs/squircle";
import "ldrs/bouncy";
import "ldrs/zoomies";
import "ldrs/grid";
import "ldrs/quantum";
import "ldrs/pulsar";
import "ldrs/pinwheel";

function SpinnerPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Update theme based on stored preference in localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      setIsDarkMode(false);  // Default to light mode if no theme is stored
    }
  }, []);

 

  const spinners = [
    { tag: "l-ring", props: { size: "40", stroke: "5", speed: "2" }, label: "Ring" },
    { tag: "l-ring-2", props: { size: "40", stroke: "5", "stroke-length": "0.25", speed: "0.8" }, label: "Ring 2" },
    { tag: "l-tailspin", props: { size: "40", stroke: "5", speed: "0.9" }, label: "Tailspin" },
    { tag: "l-squircle", props: { size: "37", stroke: "5", "stroke-length": "0.15", speed: "0.9" }, label: "Squircle" },
    { tag: "l-bouncy", props: { size: "45", speed: "1.75" }, label: "Bouncy" },
    { tag: "l-zoomies", props: { size: "80", stroke: "5", speed: "1.4" }, label: "Zoomies" },
    { tag: "l-grid", props: { size: "60", speed: "1.5" }, label: "Grid" },
    { tag: "l-quantum", props: { size: "45", speed: "1.75" }, label: "Quantum" },
    { tag: "l-pulsar", props: { size: "40", speed: "1.75" }, label: "Pulsar" },
    { tag: "l-pinwheel", props: { size: "35", stroke: "3.5", speed: "0.9" }, label: "Pinwheel" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        Loading Spinners UI Kit
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
        {spinners.map((spinner, index) => {
          const SpinnerTag = spinner.tag;
          return (
            <div key={index} className="flex flex-col items-center">
              <SpinnerTag
                {...spinner.props}
                color={isDarkMode ? "#ffffff" : "#000000"}  // Adjust spinner color based on dark mode
              />
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{spinner.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SpinnerPage;
