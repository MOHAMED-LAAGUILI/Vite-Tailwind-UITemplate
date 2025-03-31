/* eslint-disable react/prop-types */
import * as React from "react"
import { Search, X } from "lucide-react"
import { Link } from "react-router-dom"
import { menuItems } from "./data/AsideMenuItems"

function flattenMenuItems(items) {
  return items.reduce((acc, item) => {
    acc.push(item)
    if (item.items && item.items.length > 0) {
      acc.push(...item.items) // Flatten submenus
    }
    return acc
  }, [])
}

function HighlightMatch({ text, query }) {
  if (!query.trim()) {
    return <span>{text}</span>
  }

  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi")
  const parts = text.split(regex)

  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <span key={i} className="bg-yellow-200 dark:bg-yellow-800 font-medium">{part}</span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  )
}

export function SearchModal({isOpen, setIsSearchModalOpen}) {
  const [search, setSearch] = React.useState("")
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const searchInputRef = React.useRef(null)
  const resultsContainerRef = React.useRef(null)

  const flattenedItems = React.useMemo(() => flattenMenuItems(menuItems), [])

  const filteredItems = React.useMemo(() => {
    if (!search.trim()) return []

    const searchLower = search.toLowerCase()
    return flattenedItems.filter((item) => 
      item.name && item.name.toLowerCase().includes(searchLower)
    ).sort((a, b) => {
      // Prioritize exact matches and starts-with matches
      const aLower = a.name.toLowerCase()
      const bLower = b.name.toLowerCase()
      if (aLower === searchLower) return -1
      if (bLower === searchLower) return 1
      if (aLower.startsWith(searchLower)) return -1
      if (bLower.startsWith(searchLower)) return 1
      return 0
    })
  }, [flattenedItems, search])

  // Reset search and selection when modal closes
  React.useEffect(() => {
    if (!isOpen) {
      setSearch("")
      setSelectedIndex(0)
    } else {
      // Focus search input when modal opens
      setTimeout(() => searchInputRef.current?.focus(), 50)
    }
  }, [isOpen])

  // Keyboard navigation
  const handleKeyDown = React.useCallback((e) => {
    if (!isOpen) return

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setSelectedIndex((prev) => 
          prev < filteredItems.length - 1 ? prev + 1 : prev
        )
        break
      case "ArrowUp":
        e.preventDefault()
        setSelectedIndex((prev) => prev > 0 ? prev - 1 : prev)
        break
      case "Enter":
        e.preventDefault()
        if (filteredItems[selectedIndex]) {
          window.location.href = filteredItems[selectedIndex].path
          setIsSearchModalOpen(false)
        }
        break
      case "Escape":
        e.preventDefault()
        setIsSearchModalOpen(false)
        break
    }
  }, [isOpen, filteredItems, selectedIndex, setIsSearchModalOpen])

  // Scroll selected item into view
  React.useEffect(() => {
    const selectedElement = resultsContainerRef.current?.children[selectedIndex]
    if (selectedElement) {
      selectedElement.scrollIntoView({
        block: "nearest",
        behavior: "smooth"
      })
    }
  }, [selectedIndex])

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-[500] flex items-start justify-center bg-black/50 backdrop-blur-sm p-4 sm:p-8 md:p-12"
          onClick={() => setIsSearchModalOpen(false)}
        >
          <div
            className="bg-white dark:bg-[#1F1F23] rounded-xl shadow-2xl w-full sm:max-w-[600px] max-h-[85vh] overflow-hidden transition-all duration-200 ease-out transform translate-y-0 opacity-100"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={handleKeyDown}
          >
            <div className="flex items-center border-b border-gray-200 dark:border-gray-800 px-4">
              <Search className="mr-2 h-5 w-5 text-gray-400" />
              <input
                ref={searchInputRef}
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value)
                  setSelectedIndex(0)
                }}
                placeholder="Search menu items... (Press ↑↓ to navigate)"
                className="flex h-14 w-full bg-transparent py-4 text-base text-gray-900 placeholder:text-gray-400 outline-none dark:text-gray-100 dark:placeholder:text-gray-500"
                autoComplete="off"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <X className="h-5 w-5 text-gray-400" />
                  <span className="sr-only">Clear search</span>
                </button>
              )}
            </div>

            <div 
              ref={resultsContainerRef}
              className="overflow-y-auto overscroll-contain"
              style={{ maxHeight: "calc(85vh - 4rem)" }}
            >
              {filteredItems.length > 0 ? (
                <div className="p-2">
                  <div className="px-2 py-1.5 text-xs text-gray-500 dark:text-gray-400">
                    {filteredItems.length} result{filteredItems.length !== 1 ? 's' : ''}
                  </div>
                  {filteredItems.map((item, index) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsSearchModalOpen(false)}
                      className={`
                        block px-3 py-2 text-sm rounded-lg cursor-pointer
                        ${index === selectedIndex
                          ? 'bg-gray-100 dark:bg-gray-800'
                          : 'hover:bg-gray-50 dark:hover:bg-gray-900'
                        }
                      `}
                      onMouseEnter={() => setSelectedIndex(index)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-gray-900 dark:text-gray-100 truncate">
                            <HighlightMatch text={item.name} query={search} />
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 truncate">
                            {item.path}
                          </div>
                        </div>
                        {menuItems.some((menu) => menu.items?.some((submenu) => submenu.path === item.path)) && (
                          <div className="ml-3 text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                            {menuItems.find((menu) => 
                              menu.items?.some((submenu) => submenu.path === item.path)
                            )?.title}
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center">
                  {search ? (
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      No results found for <span className="font-medium text-gray-900 dark:text-gray-200">{" ' "}{search}{" ' "}</span>
                    </div>
                  ) : (
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Begin typing to search...
                      <div className="mt-1 text-xs">Use ↑↓ arrows to navigate, Enter to select</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
