import { useState, useEffect } from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "./Aside";
import Header from "./Header";



export default function Layout() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  useEffect(() => {
    // Check if a theme is stored in localStorage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }

    const handleClickOutside = (event) => {
      const sidebar = document.getElementById("sidebar");
      if (sidebar && !sidebar.contains(event.target) && !event.target.closest("#sidebar-toggle")) {
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

  return (
    <div className={isDarkMode ? "dark" : ""}>
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
          <main className="flex-1 overflow-auto">
            <Outlet />
          </main>
          
          <Footer />
        </div>
      </div>
    </div>
  );
}
