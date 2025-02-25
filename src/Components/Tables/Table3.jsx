/* eslint-disable react/prop-types */
import { useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getExpandedRowModel,
  getFacetedRowModel,
} from "@tanstack/react-table";
import { rankItem } from "@tanstack/match-sorter-utils";
import {
  ChevronUp,
  ChevronDown,
  ChevronsLeft,
  ChevronsRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const DataTable3 = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "Name",
        header: "Name",
        cell: (info) => <strong>{info.getValue()}</strong>,
        enableResizing: true,
      },
      { accessorKey: "Position", header: "Position", enableResizing: true },
      { accessorKey: "Office", header: "Office", enableResizing: true },
      { accessorKey: "Age", header: "Age", enableResizing: true },
      { accessorKey: "Startdate", header: "Start Date", enableResizing: true },
      { accessorKey: "Salary", header: "Salary", enableResizing: true },
    ],
    []
  );

  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data,
    columns,
    state: { globalFilter, sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    filterFns: {
      fuzzy: (row, columnId, value) => rankItem(row.getValue(columnId), value).passed,
    },
  });

  return (
    <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 shadow-xl border border-gray-700 backdrop-blur-lg w-full overflow-auto">
      {/* Search Input */}
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
          className="p-2 w-full max-w-sm border border-gray-500 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-yellow-400 placeholder-gray-300 transition-all duration-300"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-600 rounded-lg overflow-hidden text-white">
          <thead className="bg-yellow-500 text-black sticky top-0">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="px-6 py-3 text-left text-xs font-semibold uppercase cursor-pointer hover:bg-yellow-400 transition-all duration-200"
                  >
                    {header.column.columnDef.header}
                    {header.column.getIsSorted() === "asc" ? (
                      <ChevronUp className="inline ml-1" />
                    ) : header.column.getIsSorted() === "desc" ? (
                      <ChevronDown className="inline ml-1" />
                    ) : null}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-gray-600">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-600 transition-all duration-200">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-6 py-4 text-sm">
                    {cell.getValue()}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            className="px-3 py-1 bg-yellow-500 text-black rounded-md hover:bg-yellow-400 transition-all duration-200 disabled:opacity-50"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronsLeft />
          </button>
          <button
            className="px-3 py-1 bg-yellow-500 text-black rounded-md hover:bg-yellow-400 transition-all duration-200 disabled:opacity-50"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft />
          </button>
          <button
            className="px-3 py-1 bg-yellow-500 text-black rounded-md hover:bg-yellow-400 transition-all duration-200 disabled:opacity-50"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRight />
          </button>
          <button
            className="px-3 py-1 bg-yellow-500 text-black rounded-md hover:bg-yellow-400 transition-all duration-200 disabled:opacity-50"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <ChevronsRight />
          </button>
        </div>
        <span className="text-sm text-white">
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </span>
        <select
          className="px-2 py-1 border border-gray-600 rounded-md bg-gray-700 text-white"
          value={table.getState().pagination.pageSize}
          onChange={(e) => table.setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize} className="text-black">
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DataTable3;
