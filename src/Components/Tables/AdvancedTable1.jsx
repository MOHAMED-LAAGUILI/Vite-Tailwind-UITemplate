/* eslint-disable react/prop-types */

import { useEffect, useState, useRef, useMemo } from "react"
import Sortable from "sortablejs"
import { jsPDF } from "jspdf"
import * as XLSX from "xlsx"
import {
  Download,
  Eye,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
  ArrowDown,
  ArrowUp,
  Columns,
  FileSpreadsheet,
  FileIcon,
  Printer,
  Settings,
  Filter,
  X,
  Search,
  MoreHorizontal,
  ChevronDown,
  RefreshCw,
} from "lucide-react"
import { twMerge } from "tailwind-merge"

export default function AdvancedTable({
  data = [],
  columns = [],
  actions = [],
  onRowClick,
  onSelectionChange,
  onRowExpand,
  renderRowDetails,
  initialState = {
    pagination: { pageIndex: 0, pageSize: 10 },
    sorting: [{ id: "id", desc: false }],
    columnVisibility: {},
    columnSizing: {},
  },
  enableRowSelection = true,
  enableRowDragging = true,
  enableColumnResizing = true,
  enablePagination = true,
  enableFiltering = true,
  enableGlobalFilter = true,
  enableSorting = true,
  enableColumnVisibility = true,
  enableExporting = true,
  enableRowExpanding = true,
  enableRowHighlighting = [],
  stickyHeader = true,
  className = "",
  tableClassName = "",
  rowClassName,
  cellClassName,
  headerClassName = "",
  footerClassName = "",
  emptyStateMessage = "No data available",
  loadingStateMessage = "Loading data...",
  isLoading = false,
  manualPagination = false,
  manualSorting = false,
  manualFiltering = false,
  pageCount,
  onPaginationChange,
  onSortingChange,
  onFilteringChange,
  defaultPageSize = 10,
  pageSizeOptions = [5, 10, 25, 50, 100],
  hideControls = false,
  hideFooter = false,
  hideHeader = false,
  title,
  description,
  toolbar,
  footer,
}) {
  // State
  const [currentPage, setCurrentPage] = useState(initialState.pagination?.pageIndex || 0)
  const [entriesPerPage, setEntriesPerPage] = useState(initialState.pagination?.pageSize || defaultPageSize)
  const [filteredData, setFilteredData] = useState(data)
  const [filters, setFilters] = useState({})
  const [globalFilter, setGlobalFilter] = useState("")
  const [selectedRows, setSelectedRows] = useState([])
  const [selectAll, setSelectAll] = useState(false)
  const [sortConfig, setSortConfig] = useState(
    initialState.sorting?.[0]
      ? { key: initialState.sorting[0].id, direction: initialState.sorting[0].desc ? "desc" : "asc" }
      : null,
  )
  const [expandedRows, setExpandedRows] = useState([])
  const [visibleColumns, setVisibleColumns] = useState(
    initialState.columnVisibility || columns.reduce((acc, col) => ({ ...acc, [col.id]: true }), {}),
  )
  const [columnWidths, setColumnWidths] = useState(
    initialState.columnSizing ||
      columns.reduce(
        (acc, col) => ({
          ...acc,
          [col.id]: col.defaultWidth || 150,
        }),
        {},
      ),
  )
  const [isColumnMenuOpen, setIsColumnMenuOpen] = useState(false)
  const [isExportMenuOpen, setIsExportMenuOpen] = useState(false)
  const [isFiltersVisible, setIsFiltersVisible] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const [resizingColumn, setResizingColumn] = useState(null)
  const [startX, setStartX] = useState(0)
  const [startWidth, setStartWidth] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isFullScreen] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [isActionsMenuOpen, setIsActionsMenuOpen] = useState({})

  // Refs
  const tableRef = useRef(null)
  const tableBodyRef = useRef(null)
  const tableWrapperRef = useRef(null)
  const tableContainerRef = useRef(null)

  // Derived state
  const totalPages = manualPagination ? pageCount || 1 : Math.max(1, Math.ceil(filteredData.length / entriesPerPage))
  const indexOfLastItem = (currentPage + 1) * entriesPerPage
  const indexOfFirstItem = indexOfLastItem - entriesPerPage
  const currentItems = manualPagination ? filteredData : filteredData.slice(indexOfFirstItem, indexOfLastItem)

  // Calculate total width of visible columns
  const totalWidth = useMemo(
    () =>
      Object.keys(columnWidths)
        .filter((key) => visibleColumns[key])
        .reduce((total, key) => total + columnWidths[key], 0),
    [columnWidths, visibleColumns],
  )

  // Effects
  useEffect(() => {
    // Initialize data
    setFilteredData(data)

    // Ensure column visibility is properly initialized
    if (Object.keys(visibleColumns).length === 0) {
      setVisibleColumns(columns.reduce((acc, col) => ({ ...acc, [col.accessorKey || col.id]: true }), {}))
    }
  }, [data, columns])

  useEffect(() => {
    // Enable Drag-and-Drop Sorting if enabled
    if (enableRowDragging && tableBodyRef.current) {
      const sortable = new Sortable(tableBodyRef.current, {
        animation: 150,
        handle: ".drag-handle",
        onEnd: (evt) => {
          // Handle row reordering logic here
          console.log(`Row moved from index ${evt.oldIndex} to ${evt.newIndex}`)
        },
      })

      return () => {
        sortable.destroy()
      }
    }
  }, [enableRowDragging, currentItems])

  useEffect(() => {
    // Apply filters and sorting
    if (!manualFiltering || !manualSorting) {
      let result = [...data]

      // Apply global filter
      if (enableGlobalFilter && globalFilter) {
        result = result.filter((item) =>
          Object.values(item).some((val) => val && String(val).toLowerCase().includes(globalFilter.toLowerCase())),
        )
      }

      // Apply column filters
      if (enableFiltering) {
        Object.keys(filters).forEach((key) => {
          if (filters[key]) {
            result = result.filter(
              (item) => item[key] && String(item[key]).toLowerCase().includes(filters[key].toLowerCase()),
            )
          }
        })
      }

      // Apply sorting
      if (enableSorting && sortConfig?.key) {
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
              return (aValue || 0) - (bValue || 0)
            } else {
              return (bValue || 0) - (aValue || 0)
            }
          }
        })
      }

      setFilteredData(result)
    }
  }, [
    data,
    filters,
    globalFilter,
    sortConfig,
    enableFiltering,
    enableGlobalFilter,
    enableSorting,
    manualFiltering,
    manualSorting,
  ])

  useEffect(() => {
    // Handle select all checkbox
    if (selectAll) {
      setSelectedRows(currentItems)
    } else {
      setSelectedRows([])
    }
  }, [selectAll, currentItems])

  useEffect(() => {
    // Notify parent of selection changes
    if (onSelectionChange) {
      onSelectionChange(selectedRows)
    }
  }, [selectedRows, onSelectionChange])

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

  useEffect(() => {
    // Notify parent of pagination changes
    if (onPaginationChange) {
      onPaginationChange({ pageIndex: currentPage, pageSize: entriesPerPage })
    }
  }, [currentPage, entriesPerPage, onPaginationChange])

  useEffect(() => {
    // Notify parent of sorting changes
    if (onSortingChange && sortConfig) {
      onSortingChange([{ id: sortConfig.key, desc: sortConfig.direction === "desc" }])
    }
  }, [sortConfig, onSortingChange])

  useEffect(() => {
    // Notify parent of filter changes
    if (onFilteringChange) {
      onFilteringChange(filters)
    }
  }, [filters, onFilteringChange])

  // Handlers
  const handleGlobalSearch = (e) => {
    const value = e.target.value
    setGlobalFilter(value)
  }

  const handleFilterChange = (e, field) => {
    setFilters({
      ...filters,
      [field]: e.target.value,
    })
  }

  const handleSort = (key) => {
    if (!enableSorting) return

    setSortConfig((prev) => {
      if (prev?.key === key) {
        if (prev.direction === "asc") return { key, direction: "desc" }
        return null // Reset sorting
      }
      return { key, direction: "asc" }
    })
  }

  const handleRowSelect = (row) => {
    if (!enableRowSelection) return

    const rowId = row.id || row._id
    if (selectedRows.some((r) => (r.id || r._id) === rowId)) {
      setSelectedRows(selectedRows.filter((r) => (r.id || r._id) !== rowId))
    } else {
      setSelectedRows([...selectedRows, row])
    }
  }

  const handleSelectAll = () => {
    if (!enableRowSelection) return
    setSelectAll(!selectAll)
  }

  const handleRowExpand = (rowId) => {
    if (!enableRowExpanding) return

    if (expandedRows.includes(rowId)) {
      setExpandedRows(expandedRows.filter((id) => id !== rowId))
      if (onRowExpand) {
        const row = currentItems.find((item) => (item.id || item._id) === rowId)
        if (row) onRowExpand(row, false)
      }
    } else {
      setExpandedRows([...expandedRows, rowId])
      if (onRowExpand) {
        const row = currentItems.find((item) => (item.id || item._id) === rowId)
        if (row) onRowExpand(row, true)
      }
    }
  }

  const toggleColumnVisibility = (column) => {
    if (!enableColumnVisibility) return

    setVisibleColumns({
      ...visibleColumns,
      [column]: !visibleColumns[column],
    })
  }

  const handleColumnResizeStart = (e, column) => {
    if (!enableColumnResizing) return

    setIsResizing(true)
    setResizingColumn(column)
    setStartX(e.clientX)
    setStartWidth(columnWidths[column] || 150)
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

  const handlePageChange = (page) => {
    if (page >= 0 && page < totalPages) {
      setCurrentPage(page)
    }
  }

  const handleEntriesPerPageChange = (e) => {
    setEntriesPerPage(Number(e.target.value))
    setCurrentPage(0) // Reset to first page
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    // Apply dark mode class to the table container
    if (tableContainerRef.current) {
      tableContainerRef.current.classList.toggle("dark")
    }
  }


  const resetFilters = () => {
    setFilters({})
    setGlobalFilter("")
    setSortConfig(null)
  }

  const toggleActionsMenu = (rowId) => {
    setIsActionsMenuOpen({
      ...isActionsMenuOpen,
      [rowId]: !isActionsMenuOpen[rowId],
    })
  }

  // Export functions
  const exportToCSV = () => {
    // Create CSV content
    const visibleCols = columns.filter((col) => visibleColumns[col.id])
    const headers = visibleCols.map((col) => col.header).join(",")

    const rows = filteredData
      .map((item) =>
        visibleCols
          .map((col) => {
            const value = item[col.accessorKey]
            return `"${value !== undefined && value !== null ? value : ""}"`
          })
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

  const exportToExcel = () => {
    const visibleCols = columns.filter((col) => visibleColumns[col.id])

    // Create worksheet data
    const wsData = [visibleCols.map((col) => col.header)]

    filteredData.forEach((item) => {
      const row = visibleCols.map((col) => {
        const value = item[col.accessorKey]
        return value !== undefined && value !== null ? value : ""
      })
      wsData.push(row)
    })

    // Create worksheet and workbook
    const ws = XLSX.utils.aoa_to_sheet(wsData)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, "Data")

    // Generate and download file
    XLSX.writeFile(wb, "table-export.xlsx")
  }

  const exportToPDF = () => {
    const doc = new jsPDF()

    const visibleCols = columns.filter((col) => visibleColumns[col.id])

    // Set up table data
    const tableData = filteredData.map((item) =>
      visibleCols.map((col) => {
        const value = item[col.accessorKey]
        return value !== undefined && value !== null ? value : ""
      }),
    )

    // Add title
    doc.text("Table Export", 14, 16)

    // Add table
    doc.autoTable({
      head: [visibleCols.map((col) => col.header)],
      body: tableData,
      startY: 20,
    })

    // Save PDF
    doc.save("table-export.pdf")
  }

  const printTable = () => {
    const printWindow = window.open("", "_blank")
    if (!printWindow) return

    const visibleCols = columns.filter((col) => visibleColumns[col.id])

    // Create HTML content
    let htmlContent = `
      <html>
        <head>
          <title>Print Table</title>
          <style>
            body { font-family: Arial, sans-serif; }
            table { border-collapse: collapse; width: 100%; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; }
          </style>
        </head>
        <body>
          <h1>Table Export</h1>
          <table>
            <thead>
              <tr>
                ${visibleCols.map((col) => `<th>${col.header}</th>`).join("")}
              </tr>
            </thead>
            <tbody>
    `

    filteredData.forEach((item) => {
      htmlContent += "<tr>"
      visibleCols.forEach((col) => {
        const value = item[col.accessorKey]
        htmlContent += `<td>${value !== undefined && value !== null ? value : ""}</td>`
      })
      htmlContent += "</tr>"
    })

    htmlContent += `
            </tbody>
          </table>
        </body>
      </html>
    `

    printWindow.document.open()
    printWindow.document.write(htmlContent)
    printWindow.document.close()

    // Wait for content to load before printing
    printWindow.onload = () => {
      printWindow.print()
    }
  }

  // Render helpers
  const renderPagination = () => {
    if (!enablePagination) return null

    return (
      <div className="flex items-center gap-2">
        <button
          onClick={() => handlePageChange(0)}
          disabled={currentPage === 0}
          className="border border-gray-300 rounded-md p-1 disabled:opacity-50 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"
          aria-label="First page"
        >
          <ChevronLeft className="h-3 w-3" />
          <ChevronLeft className="h-3 w-3 -ml-1" />
        </button>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 0}
          className="border border-gray-300 rounded-md p-2 disabled:opacity-50 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"
          aria-label="Previous page"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-1">
          {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
            let pageNumber
            if (totalPages <= 5) {
              pageNumber = i
            } else if (currentPage < 3) {
              pageNumber = i
            } else if (currentPage > totalPages - 3) {
              pageNumber = totalPages - 5 + i
            } else {
              pageNumber = currentPage - 2 + i
            }

            return (
              <button
                key={i}
                onClick={() => handlePageChange(pageNumber)}
                className={twMerge(
                  "border rounded-md w-8 h-8 text-sm hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700",
                  currentPage === pageNumber
                    ? "bg-primary text-white hover:bg-primary-dark dark:bg-primary-dark"
                    : "border-gray-300",
                )}
              >
                {pageNumber + 1}
              </button>
            )
          })}

          {totalPages > 5 && currentPage < totalPages - 3 && (
            <>
              <span className="px-1">...</span>
              <button
                onClick={() => handlePageChange(totalPages - 1)}
                className="border border-gray-300 rounded-md w-8 h-8 text-sm hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"
              >
                {totalPages}
              </button>
            </>
          )}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
          className="border border-gray-300 rounded-md p-2 disabled:opacity-50 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"
          aria-label="Next page"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
        <button
          onClick={() => handlePageChange(totalPages - 1)}
          disabled={currentPage === totalPages - 1}
          className="border border-gray-300 rounded-md p-1 disabled:opacity-50 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"
          aria-label="Last page"
        >
          <ChevronRight className="h-3 w-3" />
          <ChevronRight className="h-3 w-3 -ml-1" />
        </button>
      </div>
    )
  }

  const renderColumnVisibilityMenu = () => {
    if (!enableColumnVisibility) return null

    return (
      <div className="relative">
        <button
          className="flex items-center gap-1 border border-gray-300 rounded-md py-2 px-3 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:text-white transition-colors"
          onClick={() => setIsColumnMenuOpen(!isColumnMenuOpen)}
        >
          <Columns className="h-4 w-4" />
          <span className="hidden sm:inline">Columns</span>
        </button>

        {isColumnMenuOpen && (
          <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-20 w-48 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-2">
              <div className="font-medium text-sm mb-2 dark:text-white">Toggle Columns</div>
              {columns.map((column) => (
                <div key={column.id} className="flex items-center py-1">
                  <input
                    type="checkbox"
                    id={`col-${column.id}`}
                    checked={visibleColumns[column.id] !== false}
                    onChange={() => toggleColumnVisibility(column.id)}
                    className="mr-2"
                  />
                  <label htmlFor={`col-${column.id}`} className="text-sm capitalize dark:text-gray-300">
                    {column.header}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  const renderExportMenu = () => {
    if (!enableExporting) return null

    return (
      <div className="relative">
        <button
          className="flex items-center gap-1 border border-gray-300 rounded-md py-2 px-3 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:text-white transition-colors"
          onClick={() => setIsExportMenuOpen(!isExportMenuOpen)}
        >
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline">Export</span>
          <ChevronDown className="h-3 w-3 ml-1" />
        </button>

        {isExportMenuOpen && (
          <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-20 w-48 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-1">
              <button
                onClick={() => {
                  exportToCSV()
                  setIsExportMenuOpen(false)
                }}
                className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 dark:text-white"
              >
                <Download className="h-4 w-4" />
                <span>Export CSV</span>
              </button>
              <button
                onClick={() => {
                  exportToExcel()
                  setIsExportMenuOpen(false)
                }}
                className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 dark:text-white"
              >
                <FileSpreadsheet className="h-4 w-4" />
                <span>Export Excel</span>
              </button>
              <button
                onClick={() => {
                  exportToPDF()
                  setIsExportMenuOpen(false)
                }}
                className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 dark:text-white"
              >
                <FileIcon className="h-4 w-4" />
                <span>Export PDF</span>
              </button>
              <button
                onClick={() => {
                  printTable()
                  setIsExportMenuOpen(false)
                }}
                className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 dark:text-white"
              >
                <Printer className="h-4 w-4" />
                <span>Print</span>
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }

  const renderSettingsMenu = () => {
    return (
      <div className="relative">
        <button
          className="flex items-center gap-1 border border-gray-300 rounded-md py-2 px-3 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:text-white transition-colors"
          onClick={() => setIsSettingsOpen(!isSettingsOpen)}
        >
          <Settings className="h-4 w-4" />
          <span className="hidden sm:inline">Settings</span>
        </button>

        {isSettingsOpen && (
          <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-20 w-48 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-2">
              <div className="font-medium text-sm mb-2 dark:text-white">Table Settings</div>
              <div className="flex items-center py-1">
                <input type="checkbox" id="dark-mode" checked={isDarkMode} onChange={toggleDarkMode} className="mr-2" />
                <label htmlFor="dark-mode" className="text-sm dark:text-gray-300">
                  Dark Mode
                </label>
              </div>
              <div className="flex items-center py-1">
                <input
                  type="checkbox"
                  id="show-filters"
                  checked={isFiltersVisible}
                  onChange={() => setIsFiltersVisible(!isFiltersVisible)}
                  className="mr-2"
                />
                <label htmlFor="show-filters" className="text-sm dark:text-gray-300">
                  Show Filters
                </label>
              </div>
              <div className="flex items-center py-1">
                <input
                  type="checkbox"
                  id="sticky-header"
                  checked={stickyHeader}
                  onChange={() => {}}
                  disabled
                  className="mr-2"
                />
                <label htmlFor="sticky-header" className="text-sm dark:text-gray-300">
                  Sticky Header
                </label>
              </div>
              <button
                onClick={resetFilters}
                className="flex items-center gap-2 w-full text-left px-3 py-2 mt-1 text-sm hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 dark:text-white"
              >
                <RefreshCw className="h-4 w-4" />
                <span>Reset All Filters</span>
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }

  const renderTableHeader = () => {
    if (hideHeader) return null

    return (
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <div className="flex-1 min-w-0">
          {title && <h2 className="text-xl font-semibold dark:text-white">{title}</h2>}
          {description && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{description}</p>}
        </div>

        {!hideControls && (
          <div className="flex flex-wrap items-center gap-2 ml-auto">
            {enableGlobalFilter && (
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="border border-gray-300 rounded-md py-2 pl-9 pr-4 w-[200px] sm:w-[250px] dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  value={globalFilter}
                  onChange={handleGlobalSearch}
                />
                {globalFilter && (
                  <button
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    onClick={() => setGlobalFilter("")}
                  >
                    <X className="h-4 w-4 text-gray-400" />
                  </button>
                )}
              </div>
            )}

            <div className="flex items-center gap-2">
              {enableFiltering && (
                <button
                  className={twMerge(
                    "flex items-center gap-1 border border-gray-300 rounded-md py-2 px-3 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:text-white transition-colors",
                    isFiltersVisible && "bg-gray-100 dark:bg-gray-700",
                  )}
                  onClick={() => setIsFiltersVisible(!isFiltersVisible)}
                >
                  <Filter className="h-4 w-4" />
                  <span className="hidden sm:inline">Filters</span>
                </button>
              )}

              {renderColumnVisibilityMenu()}
              {renderExportMenu()}
              {renderSettingsMenu()}

              {toolbar}
            </div>
          </div>
        )}
      </div>
    )
  }

  const renderEmptyState = () => {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <div className="rounded-full bg-gray-100 p-3 mb-4 dark:bg-gray-700">
          <Search className="h-6 w-6 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">No results found</h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {typeof emptyStateMessage === "string"
            ? emptyStateMessage
            : "No matching records found. Try adjusting your search or filters."}
        </p>
        {(globalFilter || Object.values(filters).some(Boolean)) && (
          <button
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            onClick={resetFilters}
          >
            Clear all filters
          </button>
        )}
      </div>
    )
  }

  const renderLoadingState = () => {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-4"></div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Loading data</h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {typeof loadingStateMessage === "string" ? loadingStateMessage : "Please wait while we load your data..."}
        </p>
      </div>
    )
  }

  // Main render
  return (
    <div
      ref={tableContainerRef}
      className={twMerge(
        "relative",
        isDarkMode && "dark",
        isFullScreen && "fixed inset-0 z-50 bg-white dark:bg-gray-900 p-4 overflow-auto",
        className,
      )}
    >
      {renderTableHeader()}

      <div
        className={twMerge(
          "border border-gray-200 rounded-md overflow-hidden dark:border-gray-700 transition-all",
          
        )}
      >
        <div
          ref={tableWrapperRef}
          className="overflow-x-auto"
          style={{ position: "relative", maxHeight: "100%" }}
        >
          {isLoading ? (
            renderLoadingState()
          ) : filteredData.length === 0 ? (
            renderEmptyState()
          ) : (
            <table
              ref={tableRef}
              className={twMerge("w-full border-collapse", "dark:text-gray-300", tableClassName)}
              style={{ minWidth: `${totalWidth}px` }}
            >
              <thead
                className={twMerge(
                  "bg-gray-50 dark:bg-gray-800 transition-colors",
                  stickyHeader && "sticky top-0 z-10",
                  headerClassName,
                )}
              >
                <tr>
                  {/* Checkbox column - fixed */}
                  {enableRowSelection && (
                    <th className="sticky left-0 z-20 bg-gray-50 dark:bg-gray-800 px-4 py-3 w-[50px] transition-colors">
                      <input
                        type="checkbox"
                        checked={selectAll}
                        onChange={handleSelectAll}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700"
                      />
                    </th>
                  )}

                  {/* ID column - fixed if first column */}
                  {columns.map((column, colIndex) => {
                    if (!visibleColumns[column.accessorKey || column.id]) return null

                    return (
                      <th
                        key={column.id}
                        className={twMerge(
                          "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider relative dark:text-gray-400 transition-colors",
                          colIndex === 0 && enableRowSelection && "sticky left-[50px] z-20 bg-gray-50 dark:bg-gray-800",
                        )}
                        style={{ width: `${columnWidths[column.id] || 150}px` }}
                      >
                        <div
                          className={twMerge(
                            "flex items-center gap-1",
                            column.enableSorting !== false && enableSorting && "cursor-pointer",
                          )}
                          onClick={() => column.enableSorting !== false && handleSort(column.accessorKey)}
                        >
                          {column.header}
                          {column.enableSorting !== false && enableSorting && (
                            <>
                              {sortConfig?.key === column.accessorKey ? (
                                sortConfig.direction === "asc" ? (
                                  <ArrowUp className="h-4 w-4" />
                                ) : (
                                  <ArrowDown className="h-4 w-4" />
                                )
                              ) : (
                                <ArrowUpDown className="h-4 w-4 opacity-50" />
                              )}
                            </>
                          )}
                        </div>

                        {isFiltersVisible && column.enableFiltering !== false && enableFiltering && (
                          <input
                            type="text"
                            className="mt-2 border border-gray-300 rounded-md py-1 px-2 w-full text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            placeholder={`Filter ${column.header}...`}
                            value={filters[column.accessorKey] || ""}
                            onChange={(e) => handleFilterChange(e, column.accessorKey)}
                          />
                        )}

                        {column.enableResizing !== false && enableColumnResizing && (
                          <div
                            className="absolute top-0 right-0 h-full w-1 cursor-col-resize group"
                            onMouseDown={(e) => handleColumnResizeStart(e, column.id)}
                          >
                            <div className="absolute inset-y-0 right-0 w-1 bg-transparent group-hover:bg-primary group-active:bg-primary"></div>
                          </div>
                        )}
                      </th>
                    )
                  })}

                  {/* Actions column - fixed */}
                  {actions.length > 0 && (
                    <th className="sticky right-0 z-20 bg-gray-50 dark:bg-gray-800 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[100px] dark:text-gray-400 transition-colors">
                      ACTIONS
                    </th>
                  )}
                </tr>
              </thead>
              <tbody
                ref={tableBodyRef}
                className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700 transition-colors"
              >
                {currentItems.map((item, index) => {
                  const rowId = item.id || item._id || index
                  const isSelected = selectedRows.some((r) => (r.id || r._id) === rowId)
                  const isExpanded = expandedRows.includes(rowId)

                  // Apply row highlighting based on conditions
                  let highlightClass = ""
                  if (enableRowHighlighting.length > 0) {
                    for (const highlight of enableRowHighlighting) {
                      if (highlight.condition(item)) {
                        highlightClass = highlight.className
                        break
                      }
                    }
                  }

                  return (
                    <>
                      <tr
                        key={rowId}
                        className={twMerge(
                          "hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors",
                          isSelected && "bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30",
                          highlightClass,
                          typeof rowClassName === "function" ? rowClassName(item) : rowClassName,
                        )}
                        onClick={() => onRowClick && onRowClick(item)}
                      >
                        {/* Checkbox - fixed */}
                        {enableRowSelection && (
                          <td
                            className={twMerge(
                              "sticky left-0 z-10 bg-white dark:bg-gray-900 px-4 py-4 whitespace-nowrap transition-colors",
                              isSelected && "bg-blue-50 dark:bg-blue-900/20",
                            )}
                            onClick={(e) => {
                              e.stopPropagation()
                              handleRowSelect(item)
                            }}
                          >
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={() => {}}
                              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700"
                            />
                          </td>
                        )}

                        {/* Data cells */}
                        {columns.map((column, colIndex) => {
                          if (!visibleColumns[column.accessorKey || column.id]) return null

                          const cellValue = item[column.accessorKey]

                          return (
                            <td
                              key={column.id}
                              className={twMerge(
                                "px-4 py-4 whitespace-nowrap transition-colors",
                                colIndex === 0 &&
                                  enableRowSelection &&
                                  "sticky left-[50px] z-10 bg-white dark:bg-gray-900",
                                isSelected && colIndex === 0 && enableRowSelection && "bg-blue-50 dark:bg-blue-900/20",
                                typeof cellClassName === "function"
                                  ? cellClassName({ row: item, column, value: cellValue })
                                  : cellClassName,
                              )}
                            >
                              {colIndex === 0 && enableRowDragging ? (
                                <div className="flex items-center">
                                  <span className="drag-handle cursor-move mr-2 text-gray-400">⋮⋮</span>
                                  {column.cell ? column.cell({ row: item, value: cellValue }) : cellValue}
                                </div>
                              ) : column.cell ? (
                                column.cell({ row: item, value: cellValue })
                              ) : (
                                cellValue
                              )}
                            </td>
                          )
                        })}

                        {/* Actions - fixed */}
                        {actions.length > 0 && (
                          <td className="sticky right-0 z-[0] bg-white dark:bg-gray-900 px-4 py-4 whitespace-nowrap transition-colors">
                            <div className="flex items-center gap-2">
                              {actions.length <= 3 ? (
                                // Show actions directly if 3 or fewer
                                actions.map((action, actionIndex) => {
                                  if (action.condition && !action.condition(item)) return null

                                  return (
                                    <button
                                      key={actionIndex}
                                      onClick={(e) => {
                                        e.stopPropagation()
                                        action.onClick(item)
                                      }}
                                      className={twMerge(
                                        "p-1  rounded-md hover:bg-gray-100 dark:hover:bg-gray-800",
                                        action.showOnHover && "opacity-0 group-hover:opacity-100",
                                      )}
                                      title={action.label}
                                    >
                                      {action.icon || (
                                        <span className={`h-4 w-4 ${action.color || "text-gray-500"}`}>
                                          {action.label[0]}
                                        </span>
                                      )}
                                    </button>
                                  )
                                })
                              ) : (
                                // Show dropdown menu if more than 3 actions
                                <>
                                  {enableRowExpanding && (
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation()
                                        handleRowExpand(rowId)
                                      }}
                                      className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                                      title="View details"
                                    >
                                      <Eye className="h-4 w-4 text-gray-500" />
                                    </button>
                                  )}
                                  <div className="relative">
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation()
                                        toggleActionsMenu(rowId)
                                      }}
                                      className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                                    >
                                      <MoreHorizontal className="h-4 w-4 text-gray-500" />
                                    </button>

                                    {isActionsMenuOpen[rowId] && (
                                      <div className="absolute right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-[10] w-48 dark:bg-gray-800 dark:border-gray-700">
                                        <div className="py-1">
                                          {actions.map((action, actionIndex) => {
                                            if (action.condition && !action.condition(item)) return null

                                            return (
                                              <button
                                                key={actionIndex}
                                                onClick={(e) => {
                                                  e.stopPropagation()
                                                  action.onClick(item)
                                                  toggleActionsMenu(rowId)
                                                }}
                                                className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                                              >
                                                {action.icon}
                                                <span>{action.label}</span>
                                              </button>
                                            )
                                          })}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </>
                              )}
                            </div>
                          </td>
                        )}
                      </tr>

                      {/* Expanded row details */}
                      {isExpanded && (
                        <tr className="expanded-row">
                          <td
                            colSpan={
                              columns.filter((col) => visibleColumns[col.id]).length +
                              (enableRowSelection ? 1 : 0) +
                              (actions.length > 0 ? 1 : 0)
                            }
                            className="px-4 py-4 bg-gray-50 dark:bg-gray-800/50 transition-colors"
                          >
                            {renderRowDetails ? (
                              renderRowDetails(item)
                            ) : (
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-medium dark:text-white">Details</h4>
                                  {columns.slice(0, Math.ceil(columns.length / 2)).map((column) => (
                                    <p key={column.id} className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                      <span className="font-medium">{column.header}:</span> {item[column.accessorKey]}
                                    </p>
                                  ))}
                                </div>
                                <div>
                                  <h4 className="font-medium dark:text-white">Additional Information</h4>
                                  {columns.slice(Math.ceil(columns.length / 2)).map((column) => (
                                    <p key={column.id} className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                      <span className="font-medium">{column.header}:</span> {item[column.accessorKey]}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            )}
                          </td>
                        </tr>
                      )}
                    </>
                  )
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {!hideFooter && (
        <div
          className={twMerge(
            "flex flex-col sm:flex-row justify-between items-center mt-4 text-sm text-gray-600 dark:text-gray-400",
            footerClassName,
          )}
        >
          <div className="mb-4 sm:mb-0">
            {enablePagination && (
              <>
                Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredData.length)} of{" "}
                {filteredData.length} entries
              </>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            {enablePagination && (
              <div className="flex items-center gap-2 mb-4 sm:mb-0">
                <span>Show</span>
                <select
                  className="border border-gray-300 rounded-md py-1 px-2 dark:bg-gray-800 dark:border-gray-600"
                  value={entriesPerPage}
                  onChange={handleEntriesPerPageChange}
                >
                  {pageSizeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <span>entries</span>
              </div>
            )}

            {renderPagination()}
          </div>

          {footer}
        </div>
      )}
    </div>
  )
}

