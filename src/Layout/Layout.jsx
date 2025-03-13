import { useState, useEffect } from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "./Aside";
import Header from "./Header";

import { BookDashed, Calendar1, Component, HomeIcon, PenToolIcon, SplineIcon, Table, Text, TrendingUp, User2 } from "lucide-react";

 const menuItems = [
    {
      title: "Components",
      items: [
        { name: "Backgrounds", path: "/", icon: <HomeIcon className="h-4 w-4 mr-3" /> },
        { name: "Text", path: "/text-page", icon: <Text className="h-4 w-4 mr-3" /> },
        { name: "Spinners", path: "/spinner-page", icon: <SplineIcon className="h-4 w-4 mr-3" /> },
        { name: "Dashboard items", path: "/dashboard-items", icon: <BookDashed className="h-4 w-4 mr-3" /> },
        { name: "Accordion items", path: "/accordion-items", icon: <Component className="h-4 w-4 mr-3" /> },
        { name: "Buttons", path: "/button-page", icon: <Component className="h-4 w-4 mr-3" /> },
        { name: "ToolBar", path: "/toolbar-page", icon: <PenToolIcon className="h-4 w-4 mr-3" /> },
        { name: "Alert", path: "/alert-page", icon: <PenToolIcon className="h-4 w-4 mr-3" /> },
        ],
    },
    {
      title: "Auth",
      items: [
        { name: "Auth", path: "/auth", icon: <User2 className="h-4 w-4 mr-3" /> },
  
      ],
    },
    {
      title: "Data Tables",
      items: [
        { name: "Table Filtering", path: "/tables-page", icon: <Table className="h-4 w-4 mr-3" /> },
      ],
    },
    {
      title: "Calendar",
      items: [
        { name: "Calendar", path: "/calendar-page", icon: <Calendar1 className="h-4 w-4 mr-3" /> },
      ],
    },
    {
      title: "Tailwind/css ",
      items: [
        { name: "Other UI Resources", path: "/tailwind-resources-page", icon: <TrendingUp className="h-4 w-4 mr-3" /> },
      ],
    },

    
  ];

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
          menuItems={menuItems}
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
