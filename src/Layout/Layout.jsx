import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Seo } from "./Seo";
import Sidebar from "./Aside";
import Header from "./Header";
import Footer from "./Footer";
import { squircle } from "ldrs";
import { useTranslation } from "react-i18next";
import toast, { Toaster } from "react-hot-toast";
import { t } from "i18next";

export default function Layout() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { i18n } = useTranslation();

  // Handle theme toggle and store the theme in localStorage
  const toggleTheme = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");

    // Store the new theme in localStorage
    localStorage.setItem("theme", newTheme);
  };

  // Handle language change, store language in localStorage
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang); // Store language in localStorage
    toast.success(`${t('Language changed to')} ${lang.toUpperCase()}`);
  };

  squircle.register();

  // Fetch the stored theme and language preferences from localStorage
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // After 2 seconds, stop loading
    }, 3500);

    // Check if a theme is stored in localStorage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }

    // Check if a language is stored in localStorage
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      // Only change language if i18n is initialized
      i18n.changeLanguage(storedLanguage);
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
  }, [i18n]); // Adding i18n here to make sure the language is set correctly after i18n is initialized

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
            isLangOpen={isLangOpen}
            setIsLangOpen={setIsLangOpen}
            handleLanguageChange={handleLanguageChange}
          />

          <Toaster/>
          <main className="flex-1 overflow-auto dark:bg-[#26262c]">
            {isLoading ? (
              // Spinner shown while loading
              <div className="flex justify-center items-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
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
              <Outlet />
            )}
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
}
