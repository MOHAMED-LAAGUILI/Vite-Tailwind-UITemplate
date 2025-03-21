/* eslint-disable react/prop-types */

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { createPortal } from "react-dom"
import { ChevronFirst } from "lucide-react"

// Tooltip component that renders in a portal to avoid z-index issues
const Tooltip = ({ children, isVisible, targetRef }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const tooltipRef = useRef(null)

  useEffect(() => {
    if (isVisible && targetRef.current && tooltipRef.current) {
      const updatePosition = () => {
        const targetRect = targetRef.current.getBoundingClientRect()
        setPosition({
          top: (targetRect.top + targetRect.height) - 55  / 2,
          left: targetRect.right + 10,
        })
      }

      updatePosition()
      window.addEventListener("resize", updatePosition)
      window.addEventListener("scroll", updatePosition)

      return () => {
        window.removeEventListener("resize", updatePosition)
        window.removeEventListener("scroll", updatePosition)
      }
    }
  }, [isVisible, targetRef])

  if (!isVisible) return null

  return createPortal(
    <motion.div
      ref={tooltipRef}
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 10 }}
      transition={{ duration: 0.2 }}
      className="fixed px-3 py-2 bg-gray-800 text-white text-xs rounded-md whitespace-nowrap shadow-lg"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        transform: "translateY(-50%)",
        zIndex: 9,
      }}
    >
      {children}
    </motion.div>,
    document.body,
  )
}

export default function AsideMinimized({ 
  asideMenuItems, isDarkMode, translator,
   Link, logoLight, logoDark ,setIsSidebarMinimized,
   isSidebarMinimized

  }) {
  const [hoveredItem, setHoveredItem] = useState(null)
  const [expandedSection, setExpandedSection] = useState(null)
  const itemRefs = useRef({})

  // Toggle section expansion
  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index)
  }

  return (
    <motion.aside
      id="sidebar"
      className={` w-16 ${
        isDarkMode ? "bg-[#1F1F23] border-[#333]" : "bg-white border-gray-200"
      } border-r shadow-sm flex flex-col`}
      initial={{ x: -80 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Logo Section */}
      <div
        className={`h-16 flex items-center justify-center border-b ${isDarkMode ? "border-[#333]" : "border-gray-200"}`}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          {isDarkMode ? (
            <img src={logoLight} className="w-10 h-10 rounded-full object-cover" alt="Logo" />
          ) : (
            <img src={logoDark} className="w-10 h-10 object-contain" alt="Logo" />
          )}
        </motion.div>
      </div>

      {/* Navigation */}
      <nav className="py-4 flex-1 overflow-y-auto scrollbar-hide">
        <div className="flex flex-col items-center space-y-5">
          {asideMenuItems.map((section, index) => (
            <div key={index} className="relative w-full flex flex-col items-center">
              {section.items && section.items.length > 0 ? (
                <>
                  {/* Section with dropdown */}
                  <div
                    ref={(el) => (itemRefs.current[`section-${index}`] = el)}
                    className="relative flex justify-center"
                    onMouseEnter={() => setHoveredItem(`section-${index}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <motion.div
                      className={`flex items-center justify-center w-5 h-5 rounded-full cursor-pointer ${
                        expandedSection === index
                          ? isDarkMode
                            ? "bg-gray-700/30"
                            : "bg-gray-100/70"
                          : "hover:bg-opacity-70"
                      }`}
                      onClick={() => toggleSection(index)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className={isDarkMode ? "text-gray-200" : "text-gray-700"}>{section.icon}</span>
                    </motion.div>

                    <Tooltip
                      isVisible={hoveredItem === `section-${index}`}
                      targetRef={{ current: itemRefs.current[`section-${index}`] }}
                    >
                      {translator(section.title)}
                    </Tooltip>
                  </div>

                  {/* Dropdown items */}
                  <AnimatePresence>
                    {expandedSection === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full mt-2"
                      >
                        <div className="flex flex-col items-center gap-3 py-2">
                          {section.items.map((item, idx) => (
                            <div
                              key={idx}
                              ref={(el) => (itemRefs.current[`item-${index}-${idx}`] = el)}
                              className="relative"
                              onMouseEnter={() => setHoveredItem(`item-${index}-${idx}`)}
                              onMouseLeave={() => setHoveredItem(null)}
                            >
                              <Link to={item.path} className="block">
                                <motion.div
                                  className={`flex items-center justify-center w-8 h-8 rounded-full ${
                                    isDarkMode
                                      ? "text-gray-300 hover:bg-gray-700/30"
                                      : "text-gray-700 hover:bg-gray-100/70"
                                  }`}
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  {item.icon}
                                </motion.div>
                              </Link>

                              <Tooltip
                                isVisible={hoveredItem === `item-${index}-${idx}`}
                                targetRef={{ current: itemRefs.current[`item-${index}-${idx}`] }}
                              >
                                {translator(item.name || item.title || "item.name")}
                              </Tooltip>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                // Single item without dropdown
                <div
                  ref={(el) => (itemRefs.current[`single-${index}`] = el)}
                  className="relative flex justify-center"
                  onMouseEnter={() => setHoveredItem(`single-${index}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link to={section.path} className="block">
                    <motion.div
                      className={`flex items-center justify-center w-10 h-10 rounded-full ${
                        isDarkMode ? "text-gray-300 hover:bg-gray-700/30" : "text-gray-700 hover:bg-gray-100/70"
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {section.icon}
                    </motion.div>
                  </Link>

                  <Tooltip
                    isVisible={hoveredItem === `single-${index}`}
                    targetRef={{ current: itemRefs.current[`single-${index}`] }}
                  >
                    {translator(section.name || section.title || "item.name")}
                  </Tooltip>
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
         {/* Sidebar Toggle Button */}
         <button
  className="absolute bottom-4 left-8 translate-x-[-50%] p-2 bg-gray-200 dark:bg-[#333] rounded-full shadow-md 
             hover:bg-gray-300 dark:hover:bg-[#444] transition-all"
  onClick={() => setIsSidebarMinimized(!isSidebarMinimized)}
>
  <ChevronFirst
    className={`h-6 w-6 text-gray-600 dark:text-gray-300 transition-transform duration-300 ${
      isSidebarMinimized ? "rotate-180" : "rotate-0"
    }`}
  />
</button>
    </motion.aside>
  )
}

