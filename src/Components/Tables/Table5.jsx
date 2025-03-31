
import { useState } from "react"
import { Edit, Trash, Eye, Download } from "lucide-react"
import AdvancedTable from "./AdvancedTable1"
import { columns, users } from "../../mock/users"

export default function AdvancedTable5() {


  // Define actions
  const actions = [
    {
      label: "View",
      icon: <Eye className="h-4 w-4 text-blue-500" />,
      onClick: (row) => alert(`View user: ${row.name}`),
    },
    {
      label: "Edit",
      icon: <Edit className="h-4 w-4 text-green-500" />,
      onClick: (row) => alert(`Edit user: ${row.name}`),
    },
    {
      label: "Delete",
      icon: <Trash className="h-4 w-4 text-red-500" />,
      onClick: (row) => alert(`Delete user: ${row.name}`),
      condition: (row) => row.status !== "Active", // Only show delete for non-active users
    },
    {
      label: "Download",
      icon: <Download className="h-4 w-4 text-gray-500" />,
      onClick: (row) => alert(`Download data for: ${row.name}`),
      
    },
  ]

  // Row highlighting conditions
  const rowHighlighting = [
    {
      condition: (row) => row.role === "Admin",
      className: "bg-blue-50 dark:bg-blue-900/10",
    },
    {
      condition: (row) => row.status === "Inactive",
      className: "bg-red-50 dark:bg-red-900/10",
    },
  ]

  // State for selected rows
  const [selectedRows, setSelectedRows] = useState([])

  // Handle row selection
  const handleSelectionChange = (rows) => {
    setSelectedRows(rows)
    console.log("Selected rows:", rows)
  }

  // Custom row details renderer
  const renderRowDetails = (row) => (
    <div className="p-4">
      <h3 className="text-lg font-medium mb-2">User Details: {row.name}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p>
            <strong>ID:</strong> {row.id}
          </p>
          <p>
            <strong>Name:</strong> {row.name}
          </p>
          <p>
            <strong>Email:</strong> {row.email}
          </p>
        </div>
        <div>
          <p>
            <strong>Status:</strong> {row.status}
          </p>
          <p>
            <strong>Role:</strong> {row.role}
          </p>
          <p>
            <strong>Last Login:</strong> {row.lastLogin}
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Advanced Table Component</h1>

      <div className="mb-8">
        <AdvancedTable
          data={users}
          columns={columns}
          actions={actions}
          enableRowHighlighting={rowHighlighting}
          onSelectionChange={handleSelectionChange}
          renderRowDetails={renderRowDetails}
          title="Users Management"
          description="View and manage all users in the system"
          enableRowExpanding={true}
          enableRowSelection={true}
          enableRowDragging={true}
          enableColumnResizing={true}
          enablePagination={true}
          enableFiltering={true}
          enableGlobalFilter={true}
          enableSorting={true}
          enableColumnVisibility={true}
          enableExporting={true}
          stickyHeader={true}
        />
      </div>

      {selectedRows.length > 0 && (
        <div className="mt-4 p-4 border rounded-md bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <h2 className="text-lg font-medium mb-2">Selected Rows ({selectedRows.length})</h2>
          <ul className="list-disc pl-5">
            {selectedRows.map((row) => (
              <li key={row.id}>
                {row.name} - {row.email}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

