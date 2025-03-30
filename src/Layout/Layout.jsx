import {
  Sun,
  Moon,
  Bell,
  User,
  Settings,
  LogOut,
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronFirst,
  PanelLeftIcon,
  MessageCircle,
  PhoneCall,
  ChevronRight,
  Linkedin,
  Github,
  MessageCircleDashed,
} from "lucide-react";
import coffeeLogo from "/coffee-logo.svg";
import logoLight from "/OneUI-light.png";
import logoDark from "/OneUI-dark.png";
import { Seo } from "./Seo";
import Header from "./Header";
import Footer from "./Footer";
import AsideMaximized from "./AsideMaximized";
import Spinner0 from "../Components/Spinner/Spinner0";
import { SearchModal } from "./SearchModal";

import { seoData } from "./data/SeoData";
import { headerFlags } from "./data/HeaderFlags";
import { socialLinks } from "./data/FooterLinks";
import { menuItems } from "./data/AsideMenuItems";
import { HeaderLinks } from "./data/HeaderLinks";
import { useState, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { twMerge } from "tailwind-merge";
import PinnedIcons from "./PinnedIcons";

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
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const formattedTime = currentTime.toLocaleTimeString();
  const [isHovering, setIsHovering] = useState(null);

  const handleMouseEnter = (id) => {
    setIsHovering(id);
  };

  const handleMouseLeave = () => {
    setIsHovering(null);
  };
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
     
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [i18n]);

  useEffect(() => {
    document.title = `One UI | ${pageName}`;
  }, [pageName]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Seo
        Helmet={Helmet}
        title={`One UI | ${pageName}`}
        lang={language}
        seoData={seoData}
      />
      <div className=" overflow-hidden flex h-screen dark:bg-[#0f0f12]">
        <AsideMaximized
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
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          ChevronFirst={ChevronFirst}
          twMerge={twMerge}
          ChevronRight={ChevronRight}
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
            PanelLeftIcon={PanelLeftIcon}
            translator={t}
            HeaderLinks={HeaderLinks}
            Link={Link}
            SearchModal={SearchModal}
          />

          <main className="flex-1 overflow-auto ">
            <Toaster />

            {isLoading ? (
              <div className="flex justify-center items-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                <Spinner0 />
              </div>
            ) : (
              <Outlet />
            )}
          </main>

          <Footer
            socialLinks={socialLinks}
            formattedTime={formattedTime}
            devSite={seoData.devSite}
            DevName={seoData.author}
          />
        </div>
        <PinnedIcons
  phoneNumber={seoData.contact.phone}
  whatsappMessage="Chat with us on WhatsApp"
  phoneMessage="Call us now"
  supportUrl={seoData.supportUrl}
  supportMessage="Buy me a coffee"
  coffeeLogo={coffeeLogo}
  position="bottom-right" // Example position
  showSupport={true}
  showWhatsApp={true}
  showPhone={true}
  showLinkedIn={true}
  showGitHub={true}
  showDiscord={true}
  className=""
  MessageCircle={MessageCircle}
  PhoneCall={PhoneCall}
  Linkedin={Linkedin}
  Github={Github}
  Discord={MessageCircleDashed}
  twMerge={twMerge}
  handleMouseEnter={handleMouseEnter}
  handleMouseLeave={handleMouseLeave}
  isHovering={isHovering}
  socialLinks={seoData.socialLinks}

/>

      </div>
    </div>
  );
}
