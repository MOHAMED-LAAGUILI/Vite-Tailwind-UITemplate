/* eslint-disable react/prop-types */

export default function Sidebar({
  isSidebarOpen,
  asideMenuItems,
  isDarkMode,
  translator,
  logoLight,
  logoDark,
  Link,
  activePath,
  setOpenDropdown,
  openDropdown,
  twMerge,
  ChevronDown,
   ChevronRight,
  
}) {
  

    

  return (
    <>
      {/* Backdrop overlay for mobile */}
      <div 
        className={`fixed z-[100] inset-0 bg-black transition-opacity duration-300 
        ${isSidebarOpen ? "opacity-40 visible" : "opacity-0 invisible"}`}
      ></div>

      {/* Sidebar */}
      <aside
        id="sidebar"
        className={twMerge(
          "fixed inset-y-0 left-0 z-[100] w-72 bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out",
          "border-r border-gray-200 dark:border-gray-800 lg:translate-x-0 lg:static",
          "overflow-y-auto max-h-screen flex flex-col",
          "shadow-lg lg:shadow-none",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
        aria-label="Sidebar navigation"
      >
        {/* Header with logo and close button */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center">
            {isDarkMode ? (
              <img src={logoLight || "/placeholder.svg?height=40&width=40"} alt="Logo" className="h-10 w-auto" />
            ) : (
              <img src={logoDark || "/placeholder.svg?height=40&width=80"} alt="Logo" className="h-10 w-auto" />
            )}
          </div>
        
        </div>

        {/* Navigation menu */}
        <nav className="flex-1 py-4 px-3" aria-label="Main navigation">
          <div className="space-y-2">
            {asideMenuItems.map((section, index) => (
              <div key={index} className="mb-2">
                {section.items && section.items.length > 0 ? (
                  <div className="space-y-1">
                    {/* Section header (collapsible) */}
                    <button
                      type="button"
                      className={twMerge(
                        "w-full px-3 py-2 text-sm font-medium rounded-lg bg-gray-900 dark:bg-white text-white dark:text-black",
                        "flex justify-between items-center transition-all duration-200",
                        "hover:bg-gray-700  focus:outline-none ",
                       
                      )}
                      onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                      aria-expanded={openDropdown === index}
                      aria-controls={`section-${index}`}
                    >
                      <div className="flex items-center gap-2">
                        {section.icon && <span className="text-lg">{section.icon}</span>}
                        <span>{translator(`${section.title}`)}</span>
                      </div>
                      <span className="transform transition-transform duration-200">
                        {openDropdown === index ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </span>
                    </button>

                    {/* Section items (collapsible content) */}
                    <div
                      id={`section-${index}`}
                      className={twMerge(
                        "ml-4 pl-2 border-l border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out",
                        openDropdown === index ? "max-h-96 opacity-100 visible" : "max-h-0 opacity-0 invisible overflow-hidden"
                      )}
                    >
                      {section.items.map((item, idx) => {
                        const isActive = activePath === item.path;
                        return (
                          <Link
                            key={idx}
                            to={item.path}
                            className={twMerge(
                              "relative flex items-center px-3 py-2 text-sm rounded-md my-1",
                              "transition-colors duration-200 group",
                          
                              isActive
                                ? "bg-gray-600 text-white font-medium shadow-sm"
                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                            )}
                            aria-current={isActive ? "page" : undefined}
                          >
                            {!isActive && (
                              <>
                              {item.icon}
                              </>
                            )}
                            <span>{translator(`${item.name}`)}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  // Single menu item (not collapsible)
                  <Link
                    to={section.path}
                    className={twMerge(
                      "flex items-center px-3 py-2 text-sm rounded-md",
                      "transition-colors duration-200 w-full",
                      "focus:outline-none focus:ring-2 focus:ring-gray-500 ",
                      activePath === section.path
                        ? "bg-blue-600 text-white font-medium shadow-sm"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    )}
                    aria-current={activePath === section.path ? "page" : undefined}
                  >
                    {section.icon && <span className="mr-2 text-lg">{section.icon}</span>}
                    <span>{translator(`${section.name}`)}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </nav>
      </aside>
    </>
  );
}