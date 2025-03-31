
 const users = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active", role: "Admin", lastLogin: "2023-04-10" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive", role: "User", lastLogin: "2023-03-22" },
    {
      id: 3,
      name: "Robert Johnson",
      email: "robert@example.com",
      status: "Active",
      role: "Editor",
      lastLogin: "2023-04-08",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@example.com",
      status: "Pending",
      role: "User",
      lastLogin: "2023-04-01",
    },
    {
      id: 5,
      name: "Michael Wilson",
      email: "michael@example.com",
      status: "Active",
      role: "Admin",
      lastLogin: "2023-04-09",
    },
    { id: 6, name: "Sarah Brown", email: "sarah@example.com", status: "Active", role: "User", lastLogin: "2023-03-15" },
    {
      id: 7,
      name: "David Miller",
      email: "david@example.com",
      status: "Inactive",
      role: "Editor",
      lastLogin: "2023-02-28",
    },
    {
      id: 8,
      name: "Jennifer Taylor",
      email: "jennifer@example.com",
      status: "Active",
      role: "User",
      lastLogin: "2023-04-05",
    },
    {
      id: 9,
      name: "James Anderson",
      email: "james@example.com",
      status: "Pending",
      role: "User",
      lastLogin: "2023-03-30",
    },
    {
      id: 10,
      name: "Lisa Thomas",
      email: "lisa@example.com",
      status: "Active",
      role: "Admin",
      lastLogin: "2023-04-07",
    },
    {
      id: 11,
      name: "Daniel Jackson",
      email: "daniel@example.com",
      status: "Inactive",
      role: "User",
      lastLogin: "2023-03-10",
    },
    {
      id: 12,
      name: "Amanda White",
      email: "amanda@example.com",
      status: "Active",
      role: "Editor",
      lastLogin: "2023-04-02",
    },
  ]

  const columns = [
    {
      id: "id",
      header: "ID",
      accessorKey: "id",
      enableSorting: true,
    },
    {
      id: "name",
      header: "Name",
      accessorKey: "name",
      enableSorting: true,
    },
    {
      id: "email",
      header: "Email",
      accessorKey: "email",
      enableSorting: true,
    },
    {
      id: "status",
      header: "Status",
      accessorKey: "status",
      enableSorting: true,
      cell: ({ value }) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            value === "Active"
              ? "bg-green-100 text-green-800"
              : value === "Inactive"
                ? "bg-red-100 text-red-800"
                : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {value}
        </span>
      ),
    },
    {
      id: "role",
      header: "Role",
      accessorKey: "role",
      enableSorting: true,
    },
    {
      id: "lastLogin",
      header: "Last Login",
      accessorKey: "lastLogin",
      enableSorting: true,
    },
  ]

  export {users, columns};