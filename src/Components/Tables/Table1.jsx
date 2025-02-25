/* eslint-disable react/prop-types */
import { useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getExpandedRowModel,
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

const DataTable = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "Name",
        header: "Name",
        cell: (info) => <strong>{info.getValue()}</strong>,
      },
      { accessorKey: "Position", header: "Position" },
      { accessorKey: "Office", header: "Office" },
      { accessorKey: "Age", header: "Age" },
      { accessorKey: "Startdate", header: "Start Date" },
      { accessorKey: "Salary", header: "Salary" },
    ],
    []
  );

  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);
  const [expanded] = useState([]);
  
  const table = useReactTable({
    data,
    columns,
    state: { globalFilter, sorting, expanded },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    filterFns: {
      fuzzy: (row, columnId, value) => rankItem(row.getValue(columnId), value).passed,
    },
  });

  return (
    <div className="p-6 backdrop-blur-lg bg-white/5 border border-gray-300/30 rounded-xl shadow-md">
      {/* Search Input */}
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
          className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 bg-white/10 backdrop-blur-md"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white/10 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="px-6 py-3 text-left text-xs font-semibold tracking-wider uppercase cursor-pointer hover:bg-gray-700 transition"
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
          <tbody className="divide-y divide-gray-300">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-100/50 transition">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-6 py-4 text-sm text-gray-700">
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
            className="px-3 py-1 bg-gray-800 text-white rounded-md hover:bg-gray-700 disabled:opacity-50"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronsLeft />
          </button>
          <button
            className="px-3 py-1 bg-gray-800 text-white rounded-md hover:bg-gray-700 disabled:opacity-50"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft />
          </button>
          <button
            className="px-3 py-1 bg-gray-800 text-white rounded-md hover:bg-gray-700 disabled:opacity-50"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRight />
          </button>
          <button
            className="px-3 py-1 bg-gray-800 text-white rounded-md hover:bg-gray-700 disabled:opacity-50"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <ChevronsRight />
          </button>
        </div>
        <span className="text-sm text-gray-700">
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </span>
        <select
          className="px-2 py-1 border rounded-md bg-white shadow-sm"
          value={table.getState().pagination.pageSize}
          onChange={(e) => table.setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DataTable;
