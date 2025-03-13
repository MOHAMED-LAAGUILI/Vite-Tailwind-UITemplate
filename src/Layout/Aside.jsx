/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { ChevronDown,BookDashed, Calendar1, Component, HomeIcon, PenToolIcon, SplineIcon, Table, Text, TrendingUp, User2 } from "lucide-react";

 
export default function Sidebar({ isSidebarOpen, openDropdown, setOpenDropdown }) {
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

    return (
    <aside
      id="sidebar"
      className={`fixed inset-y-0 left-0 z-30 w-64 bg-white dark:bg-[#0F0F12] transform transition-transform duration-200 ease-in-out
      border-r border-gray-200 dark:border-[#1F1F23] lg:translate-x-0 lg:static overflow-y-auto max-h-screen
      ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
  
        <div className="h-16 flex items-center px-6 border-b border-gray-200 ">
  <span className="text-xl font-bold dark:text-white tracking-wide">One UI</span>
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
