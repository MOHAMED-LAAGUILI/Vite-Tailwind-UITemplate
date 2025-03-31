/* eslint-disable no-unused-vars */

import { useEffect, useState, useRef } from "react"
import Sortable from "sortablejs"
import {
  Download,
  Eye,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
  ArrowDown,
  ArrowUp,
  Columns,
} from "lucide-react"
import { twMerge } from "tailwind-merge"
import { products } from './../../mock/products';

export default function AdvancedTable4() {
 
  const [currentPage, setCurrentPage] = useState(1)
  const [entriesPerPage, setEntriesPerPage] = useState(10)
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [filters, setFilters] = useState({
    id: "",
    name: "",
    category: "",
    brand: "",
    price: "",
    stock: "",
    status: "",
  })

  // New functionalities
  const [selectedRows, setSelectedRows] = useState([])
  const [selectAll, setSelectAll] = useState(false)
  const [sortConfig, setSortConfig] = useState({ key: "id", direction: "asc" })
  const [expandedRows, setExpandedRows] = useState([])
  const [visibleColumns, setVisibleColumns] = useState({
    id: true,
    name: true,
    category: true,
    brand: true,
    price: true,
    stock: true,
    status: true,
  })
  const [columnWidths, setColumnWidths] = useState({
    id: 80,
    name: 200,
    category: 150,
    brand: 150,
    price: 100,
    stock: 100,
    status: 120,
  })
  const [isColumnMenuOpen, setIsColumnMenuOpen] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const [resizingColumn, setResizingColumn] = useState(null)
  const [startX, setStartX] = useState(0)
  const [startWidth, setStartWidth] = useState(0)

  const tableRef = useRef(null)
  const tableBodyRef = useRef(null)
  const tableWrapperRef = useRef(null)

  useEffect(() => {
    // Enable Drag-and-Drop Sorting
    if (tableBodyRef.current) {
      new Sortable(tableBodyRef.current, {
        animation: 150,
        handle: ".drag-handle",
        onEnd: (evt) => {
          // Handle row reordering logic here
          console.log(`Row moved from index ${evt.oldIndex} to ${evt.newIndex}`)
        },
      })
    }
  }, [])

  useEffect(() => {
    // Apply filters
    let result = [...products]

    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        result = result.filter((item) => String(item[key]).toLowerCase().includes(filters[key].toLowerCase()))
      }
    })

    // Apply sorting
    if (sortConfig.key) {
      result.sort((a, b) => {
        const aValue = a[sortConfig.key]
        const bValue = b[sortConfig.key]

        // Handle string vs number comparison
        if (typeof aValue === "string" && typeof bValue === "string") {
          if (sortConfig.direction === "asc") {
            return aValue.localeCompare(bValue)
          } else {
            return bValue.localeCompare(aValue)
          }
        } else {
          if (sortConfig.direction === "asc") {
            return aValue - bValue
          } else {
            return bValue - aValue
          }
        }
      })
    }

    setFilteredProducts(result)
  }, [filters, products, sortConfig])

  useEffect(() => {
    // Handle select all checkbox
    if (selectAll) {
      setSelectedRows(currentItems.map((item) => item.id))
    } else {
      setSelectedRows([])
    }
  }, [selectAll])

  const handleSearch = (e) => {
    const value = e.target.value
    // Apply global search to all fields
    const results = products.filter((item) =>
      Object.values(item).some((val) => String(val).toLowerCase().includes(value.toLowerCase())),
    )
    setFilteredProducts(results)
  }

  const handleFilterChange = (e, field) => {
    setFilters({
      ...filters,
      [field]: e.target.value,
    })
  }

  const handleSort = (key) => {
    let direction = "asc"
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc"
    } else if (sortConfig.key === key && sortConfig.direction === "desc") {
      key = null
      direction = "asc"
    }

    setSortConfig({ key, direction })
  }

  const handleRowSelect = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id))
    } else {
      setSelectedRows([...selectedRows, id])
    }
  }

  const handleSelectAll = () => {
    setSelectAll(!selectAll)
  }

  const handleRowExpand = (id) => {
    if (expandedRows.includes(id)) {
      setExpandedRows(expandedRows.filter((rowId) => rowId !== id))
    } else {
      setExpandedRows([...expandedRows, id])
    }
  }

  const toggleColumnVisibility = (column) => {
    setVisibleColumns({
      ...visibleColumns,
      [column]: !visibleColumns[column],
    })
  }

  const handleColumnResizeStart = (e, column) => {
    setIsResizing(true)
    setResizingColumn(column)
    setStartX(e.clientX)
    setStartWidth(columnWidths[column])
  }

  const handleColumnResize = (e) => {
    if (isResizing && resizingColumn) {
      const width = Math.max(80, startWidth + (e.clientX - startX))
      setColumnWidths({
        ...columnWidths,
        [resizingColumn]: width,
      })
    }
  }

  const handleColumnResizeEnd = () => {
    setIsResizing(false)
    setResizingColumn(null)
  }

  const exportToCSV = () => {
    // Create CSV content
    const headers = Object.keys(products[0])
      .filter((key) => visibleColumns[key])
      .join(",")

    const rows = filteredProducts
      .map((item) =>
        Object.keys(item)
          .filter((key) => visibleColumns[key])
          .map((key) => `"${item[key]}"`)
          .join(","),
      )
      .join("\n")

    const csvContent = `${headers}\n${rows}`

    // Create download link
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", "table-export.csv")
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const deleteSelectedRows = () => {
    // In a real app, you would call an API to delete the rows
    alert(`Deleting rows with IDs: ${selectedRows.join(", ")}`)
    // Then update the UI
    setSelectedRows([])
    setSelectAll(false)
  }

  const totalPages = Math.ceil(filteredProducts.length / entriesPerPage)
  const indexOfLastItem = currentPage * entriesPerPage
  const indexOfFirstItem = indexOfLastItem - entriesPerPage
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem)

  // Calculate total width of visible columns
  const totalWidth = Object.keys(columnWidths)
    .filter((key) => visibleColumns[key])
    .reduce((total, key) => total + columnWidths[key], 0)

  useEffect(() => {
    // Add event listeners for column resizing
    if (isResizing) {
      document.addEventListener("mousemove", handleColumnResize)
      document.addEventListener("mouseup", handleColumnResizeEnd)
    }

    return () => {
      document.removeEventListener("mousemove", handleColumnResize)
      document.removeEventListener("mouseup", handleColumnResizeEnd)
    }
  }, [isResizing])

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-md py-2 px-4 w-[250px]"
              onChange={handleSearch}
            />
          </div>

          {/* Column visibility toggle */}
          <div className="relative">
            <button
              className="flex items-center gap-1 border border-gray-300 rounded-md py-2 px-3 bg-white"
              onClick={() => setIsColumnMenuOpen(!isColumnMenuOpen)}
            >
              <Columns className="h-4 w-4" />
              <span>Columns</span>
            </button>

            {isColumnMenuOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10 w-48">
                <div className="p-2">
                  <div className="font-medium text-sm mb-2">Toggle Columns</div>
                  {Object.keys(visibleColumns).map((column) => (
                    <div key={column} className="flex items-center py-1">
                      <input
                        type="checkbox"
                        id={`col-${column}`}
                        checked={visibleColumns[column]}
                        onChange={() => toggleColumnVisibility(column)}
                        className="mr-2"
                      />
                      <label htmlFor={`col-${column}`} className="text-sm capitalize">
                        {column}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Export button */}
          <button
            className="flex items-center gap-1 border border-gray-300 rounded-md py-2 px-3 bg-white"
            onClick={exportToCSV}
          >
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>

          {/* Bulk actions */}
          {selectedRows.length > 0 && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">{selectedRows.length} selected</span>
              <button
                className="flex items-center gap-1 border border-red-300 text-red-600 rounded-md py-2 px-3 bg-white"
                onClick={deleteSelectedRows}
              >
                <Trash2 className="h-4 w-4" />
                <span>Delete</span>
              </button>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">entries per page</span>
          <select
            className="border border-gray-300 rounded-md py-2 px-3"
            value={entriesPerPage}
            onChange={(e) => setEntriesPerPage(Number(e.target.value))}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
      </div>

      <div className="border border-gray-200 rounded-md overflow-hidden">
        <div ref={tableWrapperRef} className="overflow-x-auto" style={{ position: "relative" }}>
          <table className="w-full" style={{ minWidth: `${totalWidth}px` }}>
            <thead className="bg-gray-50">
              <tr>
                {/* Checkbox column - fixed */}
                <th className="sticky left-0 z-20 bg-gray-50 px-4 py-3 w-[50px]">
                  <input type="checkbox" checked={selectAll} onChange={handleSelectAll} className="h-4 w-4" />
                </th>

                {/* ID column - fixed */}
                {visibleColumns.id && (
                  <th
                    className="sticky left-[50px] z-20 bg-gray-50 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    style={{ width: `${columnWidths.id}px` }}
                  >
                    <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleSort("id")}>
                      ID
                      {sortConfig.key === "id" ? (
                        sortConfig.direction === "asc" ? (
                          <ArrowUp className="h-4 w-4" />
                        ) : (
                          <ArrowDown className="h-4 w-4" />
                        )
                      ) : (
                        <ArrowUpDown className="h-4 w-4" />
                      )}
                    </div>
                    <input
                      type="text"
                      className="mt-2 border border-gray-300 rounded-md py-1 px-2 w-full"
                      placeholder="Filter ID..."
                      value={filters.id}
                      onChange={(e) => handleFilterChange(e, "id")}
                    />
                    <div
                      className="absolute top-0 right-0 h-full w-1 cursor-col-resize"
                      onMouseDown={(e) => handleColumnResizeStart(e, "id")}
                    />
                  </th>
                )}

                {/* Other columns - scrollable */}
                {visibleColumns.name && (
                  <th
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider relative"
                    style={{ width: `${columnWidths.name}px` }}
                  >
                    <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleSort("name")}>
                      NAME
                      {sortConfig.key === "name" ? (
                        sortConfig.direction === "asc" ? (
                          <ArrowUp className="h-4 w-4" />
                        ) : (
                          <ArrowDown className="h-4 w-4" />
                        )
                      ) : (
                        <ArrowUpDown className="h-4 w-4" />
                      )}
                    </div>
                    <input
                      type="text"
                      className="mt-2 border border-gray-300 rounded-md py-1 px-2 w-full"
                      placeholder="Filter name..."
                      value={filters.name}
                      onChange={(e) => handleFilterChange(e, "name")}
                    />
                    <div
                      className="absolute top-0 right-0 h-full w-1 cursor-col-resize"
                      onMouseDown={(e) => handleColumnResizeStart(e, "name")}
                    />
                  </th>
                )}

                {visibleColumns.category && (
                  <th
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider relative"
                    style={{ width: `${columnWidths.category}px` }}
                  >
                    <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleSort("category")}>
                      CATEGORY
                      {sortConfig.key === "category" ? (
                        sortConfig.direction === "asc" ? (
                          <ArrowUp className="h-4 w-4" />
                        ) : (
                          <ArrowDown className="h-4 w-4" />
                        )
                      ) : (
                        <ArrowUpDown className="h-4 w-4" />
                      )}
                    </div>
                    <input
                      type="text"
                      className="mt-2 border border-gray-300 rounded-md py-1 px-2 w-full"
                      placeholder="Filter category..."
                      value={filters.category}
                      onChange={(e) => handleFilterChange(e, "category")}
                    />
                    <div
                      className="absolute top-0 right-0 h-full w-1 cursor-col-resize"
                      onMouseDown={(e) => handleColumnResizeStart(e, "category")}
                    />
                  </th>
                )}

                {visibleColumns.brand && (
                  <th
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider relative"
                    style={{ width: `${columnWidths.brand}px` }}
                  >
                    <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleSort("brand")}>
                      BRAND
                      {sortConfig.key === "brand" ? (
                        sortConfig.direction === "asc" ? (
                          <ArrowUp className="h-4 w-4" />
                        ) : (
                          <ArrowDown className="h-4 w-4" />
                        )
                      ) : (
                        <ArrowUpDown className="h-4 w-4" />
                      )}
                    </div>
                    <input
                      type="text"
                      className="mt-2 border border-gray-300 rounded-md py-1 px-2 w-full"
                      placeholder="Filter brand..."
                      value={filters.brand}
                      onChange={(e) => handleFilterChange(e, "brand")}
                    />
                    <div
                      className="absolute top-0 right-0 h-full w-1 cursor-col-resize"
                      onMouseDown={(e) => handleColumnResizeStart(e, "brand")}
                    />
                  </th>
                )}

                {visibleColumns.price && (
                  <th
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider relative"
                    style={{ width: `${columnWidths.price}px` }}
                  >
                    <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleSort("price")}>
                      PRICE
                      {sortConfig.key === "price" ? (
                        sortConfig.direction === "asc" ? (
                          <ArrowUp className="h-4 w-4" />
                        ) : (
                          <ArrowDown className="h-4 w-4" />
                        )
                      ) : (
                        <ArrowUpDown className="h-4 w-4" />
                      )}
                    </div>
                    <input
                      type="text"
                      className="mt-2 border border-gray-300 rounded-md py-1 px-2 w-full"
                      placeholder="Filter price..."
                      value={filters.price}
                      onChange={(e) => handleFilterChange(e, "price")}
                    />
                    <div
                      className="absolute top-0 right-0 h-full w-1 cursor-col-resize"
                      onMouseDown={(e) => handleColumnResizeStart(e, "price")}
                    />
                  </th>
                )}

                {visibleColumns.stock && (
                  <th
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider relative"
                    style={{ width: `${columnWidths.stock}px` }}
                  >
                    <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleSort("stock")}>
                      STOCK
                      {sortConfig.key === "stock" ? (
                        sortConfig.direction === "asc" ? (
                          <ArrowUp className="h-4 w-4" />
                        ) : (
                          <ArrowDown className="h-4 w-4" />
                        )
                      ) : (
                        <ArrowUpDown className="h-4 w-4" />
                      )}
                    </div>
                    <input
                      type="text"
                      className="mt-2 border border-gray-300 rounded-md py-1 px-2 w-full"
                      placeholder="Filter stock..."
                      value={filters.stock}
                      onChange={(e) => handleFilterChange(e, "stock")}
                    />
                    <div
                      className="absolute top-0 right-0 h-full w-1 cursor-col-resize"
                      onMouseDown={(e) => handleColumnResizeStart(e, "stock")}
                    />
                  </th>
                )}

                {visibleColumns.status && (
                  <th
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider relative"
                    style={{ width: `${columnWidths.status}px` }}
                  >
                    <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleSort("status")}>
                      STATUS
                      {sortConfig.key === "status" ? (
                        sortConfig.direction === "asc" ? (
                          <ArrowUp className="h-4 w-4" />
                        ) : (
                          <ArrowDown className="h-4 w-4" />
                        )
                      ) : (
                        <ArrowUpDown className="h-4 w-4" />
                      )}
                    </div>
                    <input
                      type="text"
                      className="mt-2 border border-gray-300 rounded-md py-1 px-2 w-full"
                      placeholder="Filter status..."
                      value={filters.status}
                      onChange={(e) => handleFilterChange(e, "status")}
                    />
                    <div
                      className="absolute top-0 right-0 h-full w-1 cursor-col-resize"
                      onMouseDown={(e) => handleColumnResizeStart(e, "status")}
                    />
                  </th>
                )}

                {/* Actions column - fixed */}
                <th className="sticky right-0 z-20 bg-gray-50 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[100px]">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody ref={tableBodyRef} className="bg-white divide-y divide-gray-200">
              {currentItems.map((item, index) => (
                <>
                  <tr
                    key={item.id}
                    className={twMerge(
                      "hover:bg-gray-50",
                      selectedRows.includes(item.id) && "bg-blue-50 hover:bg-blue-100",
                      item.stock < 20 && "bg-red-50 hover:bg-red-100",
                    )}
                  >
                    {/* Checkbox - fixed */}
                    <td className="sticky left-0 z-10 bg-white px-4 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(item.id)}
                        onChange={() => handleRowSelect(item.id)}
                        className="h-4 w-4"
                      />
                    </td>

                    {/* ID - fixed */}
                    {visibleColumns.id && (
                      <td
                        className={twMerge(
                          "sticky left-[50px] z-10 bg-white px-4 py-4 whitespace-nowrap",
                          selectedRows.includes(item.id) && "bg-blue-50",
                          item.stock < 20 && "bg-red-50",
                        )}
                      >
                        <div className="flex items-center">
                          <span className="drag-handle cursor-move mr-2">⋮⋮</span>
                          <span>{item.id}</span>
                        </div>
                      </td>
                    )}

                    {/* Other columns - scrollable */}
                    {visibleColumns.name && (
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{item.name}</div>
                      </td>
                    )}

                    {visibleColumns.category && (
                      <td className="px-4 py-4 whitespace-nowrap text-gray-500">{item.category}</td>
                    )}

                    {visibleColumns.brand && (
                      <td className="px-4 py-4 whitespace-nowrap text-gray-500">{item.brand}</td>
                    )}

                    {visibleColumns.price && (
                      <td className="px-4 py-4 whitespace-nowrap text-gray-500">{item.price}</td>
                    )}

                    {visibleColumns.stock && (
                      <td className="px-4 py-4 whitespace-nowrap text-gray-500">{item.stock}</td>
                    )}

                    {visibleColumns.status && (
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span
                          className={twMerge(
                            "px-2 py-1 text-xs font-medium rounded-full",
                            item.status === "In Stock" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800",
                          )}
                        >
                          {item.status}
                        </span>
                      </td>
                    )}

                    {/* Actions - fixed */}
                    <td className="sticky right-0 z-10 bg-white px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <button onClick={() => handleRowExpand(item.id)} className="p-1 rounded-md hover:bg-gray-100">
                          <Eye className="h-4 w-4 text-gray-500" />
                        </button>
                        <button className="p-1 rounded-md hover:bg-gray-100">
                          <Pencil className="h-4 w-4 text-blue-500" />
                        </button>
                        <button className="p-1 rounded-md hover:bg-gray-100">
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* Expanded row details */}
                  {expandedRows.includes(item.id) && (
                    <tr>
                      <td
                        colSpan={Object.values(visibleColumns).filter(Boolean).length + 2}
                        className="px-4 py-4 bg-gray-50"
                      >
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium">Product Details</h4>
                            <p className="text-sm text-gray-600 mt-1">ID: {item.id}</p>
                            <p className="text-sm text-gray-600">Name: {item.name}</p>
                            <p className="text-sm text-gray-600">Category: {item.category}</p>
                            <p className="text-sm text-gray-600">Brand: {item.brand}</p>
                          </div>
                          <div>
                            <h4 className="font-medium">Inventory Information</h4>
                            <p className="text-sm text-gray-600 mt-1">Price: {item.price}</p>
                            <p className="text-sm text-gray-600">Stock: {item.stock} units</p>
                            <p className="text-sm text-gray-600">Sales: {item.sales} units</p>
                            <p className="text-sm text-gray-600">Status: {item.status}</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <div>
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredProducts.length)} of{" "}
          {filteredProducts.length} entries
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="border border-gray-300 rounded-md p-2 disabled:opacity-50"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
            const pageNumber = i + 1
            return (
              <button
                key={i}
                onClick={() => setCurrentPage(pageNumber)}
                className={`border ${currentPage === pageNumber ? "bg-gray-100" : "border-gray-300"} rounded-md w-8 h-8`}
              >
                {pageNumber}
              </button>
            )
          })}

          {totalPages > 5 && <span>...</span>}

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="border border-gray-300 rounded-md p-2 disabled:opacity-50"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

