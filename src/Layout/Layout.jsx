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
import { headerFlags } from "./data/HeaderFlags";
import { socialLinks } from "./data/FooterLinks";
import Spinner0 from "../Components/Spinner/Spinner0";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logoLight from "/OneUI-light.png";
import logoDark from "/OneUI-dark.png";
import Cursor from "react-cursor-follow"; // Import the custom cursor library

const useRouteAndPageName = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const pageName = pathname.split("/").filter(Boolean).pop() || "Home";
  return { route: pathname, pageName };
};

export default function Layout() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState("en");
  const { pageName } = useRouteAndPageName();
  const { i18n } = useTranslation();

  const langDropdownRef = useRef(null);
  const notificationsDropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);
  const searchModalRef = useRef(null);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [cursorProps, setCursorProps] = useState({
    size: 40,
    color: "rgba(0, 120, 255, 0.5)",
    shape: "circle",
  }); // Default cursor state

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    setLanguage(lang);
    toast.success(`${t("Language changed to")} ${lang.toUpperCase()}`);
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3500);
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }

    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLanguage(storedLanguage);
      i18n.changeLanguage(storedLanguage);
      setIsLangOpen(false);
    }

    const handleClickOutside = (event) => {
      if (
        !document.getElementById("sidebar")?.contains(event.target) &&
        !event.target.closest("#sidebar-toggle")
      ) {
        setTimeout(() => setIsSidebarOpen(false), 150);
      }
      if (!langDropdownRef.current?.contains(event.target))
        setIsLangOpen(false);
      if (!notificationsDropdownRef.current?.contains(event.target))
        setIsNotificationsOpen(false);
      if (!profileDropdownRef.current?.contains(event.target))
        setIsProfileOpen(false);
      if (!searchModalRef.current?.contains(event.target))
        setIsSearchModalOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [i18n]);

  useEffect(() => {
    document.title = `One UI | ${pageName}`;
  }, [pageName]);

  // Change cursor properties dynamically on hover
  const handleMouseEnter = (elementType) => {
    if (elementType === "link") {
      setCursorProps({ size: 50, color: "black", shape: "circle" });
    } else if (elementType === "button") {
      setCursorProps({ size: 60, color: "black", shape: "circle" });
    } else {
      setCursorProps({ size: 40, color: "gray", shape: "circle" });
    }
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Seo
        title={`One UI | ${pageName}`}
        lang={language}
        dir={language === "sa" ? "rtl" : "ltr"}
      />
      <div className=" z-50 flex h-screen bg-gray-50 dark:bg-[#26262c]">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          asideMenuItems={menuItems}
          ChevronDown={ChevronDown}
          ChevronLeft={ChevronLeft}
          isDarkMode={isDarkMode}
          motion={motion}
          translator={t}
          Link={Link}
          logoDark={logoDark}
          logoLight={logoLight}
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
            motion={motion}
            language={language}
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
            isSearchModalOpen={isSearchModalOpen}
            setIsSearchModalOpen={setIsSearchModalOpen}
            searchModalRef={searchModalRef}
          />
          <main
            className="flex-1 overflow-auto dark:bg-[#26262c]"
            onMouseEnter={() => handleMouseEnter("button")}
            onMouseLeave={() => handleMouseEnter("default")}
          >
            <Toaster />

            {isLoading ? (
              <div className="flex justify-center items-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                <Spinner0 />
              </div>
            ) : (
              <Outlet />
            )}

            {/* Custom Cursor */}
            <Cursor
              color={cursorProps.color} // Dynamically change cursor color
              cursorSize={cursorProps.size} // Dynamically change cursor size
              animationSpeed={0.3} // Customize animation speed
              shape={cursorProps.shape} // Dynamically change cursor shape
            />
          </main>
          <Footer socialLinks={socialLinks} />
        </div>
      </div>
    </div>
  );
}
