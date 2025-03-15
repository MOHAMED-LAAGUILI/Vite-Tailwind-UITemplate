import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Seo } from "./Seo";
import Sidebar from "./Aside";
import Header from "./Header";
import Footer from "./Footer";
import { squircle } from "ldrs";

export default function Layout() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    squircle.register();

    setTimeout(() => {
      setIsLoading(false); // After 2 seconds, stop loading
    }, 3500);

    // Check if a theme is stored in localStorage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }

    const handleClickOutside = (event) => {
      const sidebar = document.getElementById("sidebar");
      if (
        sidebar &&
        !sidebar.contains(event.target) &&
        !event.target.closest("#sidebar-toggle")
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");

    // Store the new theme in localStorage
    localStorage.setItem("theme", newTheme);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full absolute top[50%] left-[50%]">
        <l-squircle
          size="45"
          stroke="5"
          stroke-length="0.15"
          bg-opacity="0.1"
          speed="0.9"
          color="black"
        ></l-squircle>
      </div>
    );
  }
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Seo />
      <div className="flex h-screen bg-gray-50 dark:bg-[#26262c]">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
        />

        <div className="flex-1 flex flex-col overflow-hidden">
          <Header
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            isDarkMode={isDarkMode}
            toggleTheme={toggleTheme}
            isNotificationsOpen={isNotificationsOpen}
            setIsNotificationsOpen={setIsNotificationsOpen}
            isProfileOpen={isProfileOpen}
            setIsProfileOpen={setIsProfileOpen}
          />
          <main className="flex-1 overflow-auto dark:bg-[#26262c]">
            {isLoading ? (
              // Spinner shown while loading
              <div className="flex justify-center items-center h-full">
                <l-squircle
                  size="37"
                  stroke="5"
                  stroke-length="0.15"
                  bg-opacity="0.1"
                  speed="0.9"
                  color="black"
                ></l-squircle>
              </div>
            ) : (
              // Actual content shown after loading
              <Outlet />
            )}
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
}
