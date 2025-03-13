/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function Sidebar({ menuItems, isSidebarOpen, openDropdown, setOpenDropdown }) {
  return (
    <aside
      id="sidebar"
      className={`fixed inset-y-0 left-0 z-30 w-64 bg-white dark:bg-[#0F0F12] transform transition-transform duration-200 ease-in-out
      border-r border-gray-200 dark:border-[#1F1F23] lg:translate-x-0 lg:static overflow-y-auto max-h-screen
      ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-[#1F1F23]">
        <span className="text-lg font-semibold text-gray-900 dark:text-white">ZERO UI</span>
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
                  className="flex items-center px-3 py-2 text-sm rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1F1F23] transition-colors duration-200"
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
  );
}
