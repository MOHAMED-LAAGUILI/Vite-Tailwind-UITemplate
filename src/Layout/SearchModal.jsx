/* eslint-disable react/prop-types */
import * as React from "react"
import { Search, X } from "lucide-react"
import { Link } from "react-router-dom" // Import Link for navigation
import { menuItems } from "./data/AsideMenuItems"

// Function to flatten menu items for searching (including submenus)
function flattenMenuItems(items) {
  return items.reduce((acc, item) => {
    acc.push(item)
    if (item.items && item.items.length > 0) {
      acc.push(...item.items) // Flatten submenus
    }
    return acc
  }, [])
}

// Highlight matching text in search results using Tailwind CSS
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

  const flattenedItems = React.useMemo(() => flattenMenuItems(menuItems), [])

  const filteredItems = React.useMemo(() => {
    if (!search.trim()) return []

    const searchLower = search.toLowerCase()
    return flattenedItems.filter((item) => 
      item.name && item.name.toLowerCase().includes(searchLower) // Search by name
    )
  }, [flattenedItems, search])

  // Reset search when modal closes
  React.useEffect(() => {
    if (!isOpen) {
      setSearch("")
    }
  }, [isOpen])

  return (
    <>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[500] flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setIsSearchModalOpen(false)}
        >
          <div
            className="bg-white dark:bg-[#1F1F23] rounded-lg shadow-md p-4 w-full sm:max-w-[550px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center border-b px-3 py-2">
              <Search className="mr-2 h-4 w-4 opacity-50 text-gray-500" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search menu items..."
                className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm text-gray-700 placeholder:text-gray-400 outline-none dark:bg-[#0F0F12] dark:text-gray-300 dark:placeholder:text-gray-500"
                autoFocus
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="h-5 w-5 p-0 rounded-sm text-gray-600 dark:text-gray-300"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Clear search</span>
                </button>
              )}
            </div>

            <div className="max-h-[300px] overflow-y-auto">
              {filteredItems.length > 0 ? (
                <div className="p-2">
                  {filteredItems.map((item) => (
                    <div
                      key={item.path} // Use `path` as key to ensure unique identification
                      className="px-2 py-1.5 text-sm rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-[#1F1F23] flex items-center justify-between"
                    >
                      <Link to={item.path} className="flex w-full items-center" onClick={() => setIsSearchModalOpen(false)}>
                        <div className="flex flex-col">
                          <div className="font-medium text-gray-800 dark:text-gray-200">
                            <HighlightMatch text={item.name} query={search} />
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{item.path}</div>
                        </div>
                        {/* Show parent menu if it's a submenu item */}
                        {menuItems.some((menu) => menu.items?.some((submenu) => submenu.path === item.path)) && (
                          <div className="text-xs px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700">
                            {menuItems.find((menu) => menu.items?.some((submenu) => submenu.path === item.path))?.title}
                          </div>
                        )}
                      </Link>
                    </div>
                  ))}
                </div>
              ) : search ? (
                <div className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">No results found.</div>
              ) : (
                <div className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">Type to start searching...</div>
              )}
            </div>

            <div className="border-t p-2 bg-gray-50 dark:bg-[#1F1F23]">
              <div className="text-xs text-gray-500 flex gap-2">
                <div className="flex items-center gap-1">
                  <kbd className="rounded bg-gray-200 px-1.5 font-mono text-[10px] text-gray-600">↑</kbd>
                  <kbd className="rounded bg-gray-200 px-1.5 font-mono text-[10px] text-gray-600">↓</kbd>
                  <span>Navigate</span>
                </div>
                <div className="flex items-center gap-1">
                  <kbd className="rounded bg-gray-200 px-1.5 font-mono text-[10px] text-gray-600">Enter</kbd>
                  <span>Select</span>
                </div>
                <div className="flex items-center gap-1">
                  <kbd className="rounded bg-gray-200 px-1.5 font-mono text-[10px] text-gray-600">Esc</kbd>
                  <span>Close</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
