/* eslint-disable react/prop-types */
import { useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
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

const DataTable2 = ({ data }) => {
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

  const table = useReactTable({
    data,
    columns,
    state: { globalFilter, sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    filterFns: {
      fuzzy: (row, columnId, value) => rankItem(row.getValue(columnId), value).passed,
    },
  });

  return (
    <div className="p-6 rounded-xl bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F3460] shadow-xl border border-white/10 backdrop-blur-lg">
      {/* Search Input */}
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
          className="p-2 w-full max-w-sm border border-white/20 rounded-md bg-white/10 text-white focus:ring-2 focus:ring-[#FFB800] placeholder-gray-300 transition-all duration-300"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-white/10 rounded-lg overflow-hidden text-white">
          <thead className="bg-[#FFB800] text-black">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="px-6 py-3 text-left text-xs font-semibold uppercase cursor-pointer hover:bg-[#E09F3E] transition-all duration-200"
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
          <tbody className="divide-y divide-white/10">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-white/10 transition-all duration-200">
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
            className="px-3 py-1 bg-[#FFB800] text-black rounded-md hover:bg-[#E09F3E] transition-all duration-200 disabled:opacity-50"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronsLeft />
          </button>
          <button
            className="px-3 py-1 bg-[#FFB800] text-black rounded-md hover:bg-[#E09F3E] transition-all duration-200 disabled:opacity-50"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft />
          </button>
          <button
            className="px-3 py-1 bg-[#FFB800] text-black rounded-md hover:bg-[#E09F3E] transition-all duration-200 disabled:opacity-50"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRight />
          </button>
          <button
            className="px-3 py-1 bg-[#FFB800] text-black rounded-md hover:bg-[#E09F3E] transition-all duration-200 disabled:opacity-50"
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
          className="px-2 py-1 border border-white/10 rounded-md bg-white/20 text-white"
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

export default DataTable2;
