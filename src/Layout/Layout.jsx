import {
  Sun,
  Moon,
  Menu,
  Bell,
  User,
  Settings,
  LogOut,
  Search,
  ChevronDown,
  ChevronLeft,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Seo } from "./Seo";
import Sidebar from "./Aside";
import Header from "./Header";
import Footer from "./Footer";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import { menuItems } from "./data/AsideMenuItems";
import { headerFlags } from './data/HeaderFlags';
import { socialLinks } from "./data/FooterLinks";
import Spinner0 from "../Components/Spinner/Spinner0";

// Custom hook to get route and page name
const useRouteAndPageName = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const pageName = pathname.split('/').filter(Boolean).pop() || 'Home'; // Default to 'Home' if no specific page
  return { route: pathname, pageName };
};

export default function Layout() {
  const [asideMenuItems] = useState(menuItems);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState("en");
  const { pageName } = useRouteAndPageName();  // Get page name from the custom hook

  const langDropdownRef = useRef(null);
  const notificationsDropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);
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
    setLanguage(localStorage.getItem("language"));
    toast.success(`${t('Language changed to')} ${lang.toUpperCase()}`);
  };


  // Fetch the stored theme and language preferences from localStorage
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // After 3.5 seconds, stop loading   
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
      setLanguage(storedLanguage);
      i18n.changeLanguage(storedLanguage);
      setIsLangOpen(false);
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

      if (
        langDropdownRef.current && !langDropdownRef.current.contains(event.target) &&
        notificationsDropdownRef.current && !notificationsDropdownRef.current.contains(event.target) &&
        profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)
      ) {
        setIsLangOpen(false);
        setIsNotificationsOpen(false);
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, [i18n, setLanguage, setIsLangOpen, setIsDarkMode, setIsLoading, setIsSidebarOpen, setIsNotificationsOpen, setIsProfileOpen]);

  // Set document title dynamically whenever the page changes
  useEffect(() => {
    document.title = `One UI | ${pageName}`; // Update title on route change
  }, [pageName]); // Dependency on pageName to trigger the effect when route changes

  return (
    <div className={isDarkMode ? "dark" : ""}>

      <Seo title={`One UI | ${pageName}`} lang={language}  dir={language === 'sa' ? 'rtl' : 'ltr'}/>

      <div className="flex h-screen bg-gray-50 dark:bg-[#26262c]">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          asideMenuItems={asideMenuItems}
          ChevronDown={ChevronDown}
          ChevronLeft={ChevronLeft}
          isDarkMode={isDarkMode}
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
            language={language}
            setLanguage={setLanguage}
            Sun={Sun}
            Moon={Moon}
            Menu={Menu}
            Bell={Bell}
            User={User}
            Settings={Settings}
            LogOut={LogOut}
            Search={Search}
            flags={headerFlags}
            notificationsDropdownRef={notificationsDropdownRef}
            langDropdownRef={langDropdownRef}
            profileDropdownRef={profileDropdownRef}
          />

          <Toaster />

          <main className="flex-1 overflow-auto dark:bg-[#26262c]">
            {isLoading ? (
              // Spinner shown while loading
              <div className="flex justify-center items-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                <Spinner0 />
              </div>
            ) : (
              <Outlet />
            )}
          </main>

          <Footer socialLinks={socialLinks} />
        </div>
      </div>
    </div>
  );
}
