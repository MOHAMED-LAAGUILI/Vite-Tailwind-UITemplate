import { useState, useEffect } from "react";
import {
  Bell,
  Sun,
  Moon,
  Menu,
  Settings,
  ChevronDown,
  LogOut,
  User,
  Calendar1,
  Table,
  User2,
  Component,
  BookDashed,
  SplineIcon,
  Text,
  HomeIcon
} from "lucide-react";

import { Outlet, Link } from "react-router-dom";

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
      { name: "Table Filtring", path: "/tables-page", icon: <Table className="h-4 w-4 mr-3" /> },
    ],
  },
  {
    title: "Calendar",
    items: [
      { name: "Calendar", path: "/calendar-page", icon: <Calendar1 className="h-4 w-4 mr-3" /> },
    ],
  },
  
];



export default function Layout() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Close the sidebar if click is outside of it
  useEffect(() => {
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

    // Listen for clicks on the document
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

 

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="flex h-screen bg-gray-50 dark:bg-[#0F0F12]">
        {/* Sidebar */}
        <aside
      id="sidebar"
      className={`fixed inset-y-0 left-0 z-30 w-64 bg-white dark:bg-[#0F0F12] transform transition-transform duration-200 ease-in-out
      border-r border-gray-200 dark:border-[#1F1F23] lg:translate-x-0 lg:static overflow-y-auto max-h-screen
      ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-[#1F1F23]">
        <span className="text-lg font-semibold text-gray-900 dark:text-white">
          Dashboard
        </span>
      </div>

      <nav className="p-4 space-y-6">
        {menuItems.map((section, index) => (
          <div key={index}>
            <div
              className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 cursor-pointer flex justify-between items-center"
              onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
            >
              {section.title}
              <ChevronDown
                className={`h-4 w-4 transition-transform ${openDropdown === index ? "rotate-180" : ""}`}
              />
            </div>
            <div className={`${openDropdown === index ? "block" : "hidden"} space-y-1`}>
              {section.items.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  className="flex items-center px-3 py-2 text-sm rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#1F1F23]"
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Navigation */}
          <header className="h-16 flex items-center justify-between px-6 border-b border-gray-200 dark:border-[#1F1F23] bg-white dark:bg-[#0F0F12] relative">
      {/* Sidebar Toggle Button */}
      <button
        id="sidebar-toggle"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`lg:hidden ${isSidebarOpen ? "ms-[185px] sticky" : ""} p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1F1F23] z-50`}
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Right-side Icons */}
      <div className="flex items-center gap-4 relative">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#1F1F23]"
        >
          {isDarkMode ? (
            <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          ) : (
            <Sun className="h-5 w-5 text-gray-600" />
          )}
        </button>

        {/* Notifications Dropdown */}
        <div className="relative z-40">
          <button
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#1F1F23] relative"
          >
            <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </button>
          {isNotificationsOpen && (
  <div
    className={`absolute z-[40] right-0 border mt-2 w-64 bg-white dark:bg-[#1F1F23] shadow-md rounded-lg p-2 
     `}
  >
    <div className="text-sm text-gray-700 dark:text-gray-300 p-2">
      New comment on your post
    </div>
    <div className="text-sm text-gray-700 dark:text-gray-300 p-2">
      Server maintenance at 2 AM
    </div>
    <div className="text-sm text-gray-700 dark:text-gray-300 p-2">
      Your password was changed
    </div>
    <button
      onClick={() => setIsNotificationsOpen(false)}
      className="w-full text-center py-1 text-sm text-blue-600 dark:text-blue-400 hover:underline"
    >
      View all
    </button>
  </div>
)}

        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
          >
            <User className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </button>
          {isProfileOpen && (
            <div className="absolute z-[100] border right-0 mt-2 w-48 bg-white dark:bg-[#1F1F23] shadow-md rounded-lg p-2 ">
              <button className="flex items-center gap-2 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1F1F23] w-full text-left">
                <User className="h-4 w-4" /> Profile
              </button>
              <button className="flex items-center gap-2 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1F1F23] w-full text-left">
                <Settings className="h-4 w-4" /> Settings
              </button>
              <button className="flex items-center gap-2 px-3 py-2 text-red-500 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-[#1F1F23] w-full text-left">
                <LogOut className="h-4 w-4" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
          {/* Main Content Area */}
          <main className="flex-1 overflow-auto ">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
