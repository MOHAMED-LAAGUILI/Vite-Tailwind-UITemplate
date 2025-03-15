/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { ChevronDown, BookDashed, Calendar1, Component, HomeIcon, PenToolIcon, SplineIcon, Table, Text, TrendingUp, User2, House, UserCircle, ChevronLeft, Combine } from "lucide-react";

export default function Sidebar({ isSidebarOpen, openDropdown, setOpenDropdown }) {
  const menuItems = [
    { name: "Home", path: "/", icon: <House className="h-4 w-4 mr-3" /> },
    {
      title: "Components",
      icon: <Combine className="h-4 w-5 transition-transform transform hover:scale-110" />,
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
    {name: "Auth", path: "/auth", icon: <User2 className="h-4 w-4 mr-3" /> },
    { name: "Table Filtering", path: "/tables-page", icon: <Table className="h-4 w-4 mr-3" /> },
    { name: "Calendar", path: "/calendar-page", icon: <Calendar1 className="h-4 w-4 mr-3" /> },
    { name: "Other UI Resources", path: "/tailwind-resources-page", icon: <TrendingUp className="h-4 w-4 mr-3" /> },
    { name: "Profile", path: "/profile-page", icon: <UserCircle className="h-4 w-4 mr-3" /> },
  ];

  return (
    <aside
      id="sidebar"
      className={`fixed inset-y-0 left-0 z-[100] w-64 bg-white dark:bg-[#1F1F23] transform transition-transform duration-300 ease-in-out
      border-r border-gray-200 dark:border-[#333] lg:translate-x-0 lg:static overflow-y-auto max-h-screen
      ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-[#333]">
        <span className="text-xl font-bold dark:text-white tracking-wide">One UI v1</span>
      </div>

      <nav className="p-2">
        {menuItems.map((section, index) => (
          <div key={index}>
            {section.items && section.items.length > 0 ? (
              <div className="p-2 space-y-4">
                <div
                  className="px-2 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 cursor-pointer flex justify-between items-center transition-all duration-300 ease-in-out transform hover:scale-105"
                  onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                >
                   <div className="flex gap-3">
                     {section.icon}
                   {section.title}
                   </div>
                  {openDropdown === index ? (
                      <ChevronDown
                      className={`h-4 w-4 transition-transform transform `}
                    />
                  ) : (
                    <ChevronLeft
                    className={`h-4 w-4 transition-transform transform `}
                  />
                  )}
                </div>
                <div className={`${openDropdown === index ? "block" : "hidden"} ms-4`}>
                  {section.items.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      className="flex items-center px-3 py-2 text-xs rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#333] transition-colors duration-200 transform hover:scale-105 ease-in-out"
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="-mt-2 p-2">
                <Link
                  key={index}
                  to={section.path}
                  className="flex items-center px-3 py-2 text-sm rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#333] transition-colors duration-200 transform hover:scale-105 ease-in-out"
                >
                  {section.icon}
                  {section.name}
                </Link>
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
