/* eslint-disable react/prop-types */

export default function Sidebar({ 
  isSidebarOpen,
   openDropdown,
    setOpenDropdown,
     asideMenuItems,
     isDarkMode,
     ChevronDown,
     ChevronLeft,
     translator,
     logoDark,
     logoLight,
     Link
    }) {

  return (
    <aside
      id="sidebar"
      className={`fixed inset-y-0 left-0 z-[100] w-64 bg-white dark:bg-[#1F1F23] transform transition-transform duration-300 ease-in-out
      border-r border-gray-200 dark:border-[#333] lg:translate-x-0 lg:static overflow-y-auto max-h-screen
      ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-[#333]">
        <span className="text-xl font-bold dark:text-white tracking-wide">
        {isDarkMode ? (
          <img src={logoLight} className="w-14 rounded-full" /> 

        ) :(
          <img src={logoDark} className="w-20" /> 

        )}
          </span>
      </div>

      <nav className="p-2">
        {asideMenuItems.map((section, index) => (
          <div key={index}>
            {section.items && section.items.length > 0 ? (
              <div className="p-2 space-y-4">
                <div
                  className="px-2 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 cursor-pointer flex justify-between items-center transition-all duration-300 ease-in-out transform hover:scale-105"
                  onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                >
                   <div className="flex gap-3">
                     {section.icon}
                     {translator(`${section.title}`)}
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
                     {translator(`${item.name}`)}
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
                  {translator(`${section.name}`)}
                </Link>
              </div>
            )}
          </div>
        ))}
      </nav>
      
    </aside>
  );
}