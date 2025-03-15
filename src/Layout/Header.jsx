/* eslint-disable react/prop-types */
import { Sun, Moon, Menu, Bell, User, Settings, LogOut, Search } from "lucide-react";

export default function Header({ isSidebarOpen, setIsSidebarOpen, isDarkMode, toggleTheme, isNotificationsOpen, setIsNotificationsOpen, isProfileOpen, setIsProfileOpen }) {
  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-gray-200 dark:border-[#1F1F23] bg-white dark:bg-[#0F0F12] relative">
      {/* Sidebar Toggle Button */}
      <button
        id="sidebar-toggle"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`lg:hidden ${isSidebarOpen ? "ms-[185px] sticky" : ""} p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1F1F23] z-[101] transition-all duration-200`}
      >
 
          <Menu className="h-5 w-5" />
        
      </button>
  {/* Search Bar */}
      <div className="flex mx-4 absolute z-10 left-14 justify-start">
        <input 
          type="text" 
          placeholder="Search..."
          className="py-1 px-4 rounded-full bg-gray-100 dark:bg-[#1F1F23] text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 transition-all duration-300"
          aria-label="Search"
        />
        <Search className="relative top-[5px] right-8 h-5 w-5 text-gray-600 dark:text-gray-300" />
      </div>

      {/* Right-side Icons */}
      <div className="flex  gap-4 absolute z-50 right-5">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#1F1F23] transition-colors duration-200"
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
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#1F1F23] relative transition-colors duration-200"
          >
            <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
          </button>
          {isNotificationsOpen && (
            <div className="absolute z-[40] right-0 border mt-2 w-64 bg-white dark:bg-[#1F1F23] shadow-md rounded-lg p-2">
              <div className="text-sm text-gray-700 dark:text-gray-300 p-2">New comment on your post</div>
              <div className="text-sm text-gray-700 dark:text-gray-300 p-2">Server maintenance at 2 AM</div>
              <div className="text-sm text-gray-700 dark:text-gray-300 p-2">Your password was changed</div>
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
            className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center transition-colors duration-200"
          >
            <User className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </button>
          {isProfileOpen && (
            <div className="absolute z-[100] border right-0 mt-2 w-48 bg-white dark:bg-[#1F1F23] shadow-md rounded-lg p-2">
              <button className="flex items-center gap-2 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1F1F23] w-full text-left transition-colors duration-200">
                <User className="h-4 w-4" /> Profile
              </button>
              <button className="flex items-center gap-2 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1F1F23] w-full text-left transition-colors duration-200">
                <Settings className="h-4 w-4" /> Settings
              </button>
              <button className="flex items-center gap-2 px-3 py-2 text-red-500 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-[#1F1F23] w-full text-left transition-colors duration-200">
                <LogOut className="h-4 w-4" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
