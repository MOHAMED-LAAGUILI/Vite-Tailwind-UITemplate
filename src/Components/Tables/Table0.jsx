import { ArrowDownSquare } from 'lucide-react';
import { useState } from 'react';
import DataTable from 'react-data-table-component';

export default function Table0() {
  const [searchText, setSearchText] = useState('');

  // Sample data
  const rowData = [
    {
        id: 0,
        employee: 'Michael 0',
        position: 'Engineer',
        department: 'Engineering',
        employmentType: 'Contract',
        location: 'Remote',
        salary: '$90,000',
        status: 'Inactive',
      },
    {
      id: 1,
      employee: 'John Doe',
      position: 'COO',
      department: 'Operations',
      employmentType: 'Full-time',
      location: 'New York',
      salary: '$150,000',
      status: 'Active',
    },
    {
      id: 2,
      employee: 'Jane Smith',
      position: 'CTO',
      department: 'Engineering',
      employmentType: 'Full-time',
      location: 'San Francisco',
      salary: '$170,000',
      status: 'Active',
    },
    {
      id: 3,
      employee: 'Michael Johnson',
      position: 'Engineer',
      department: 'Engineering',
      employmentType: 'Contract',
      location: 'Remote',
      salary: '$100,000',
      status: 'Inactive',
    },
    {
      id: 4,
      employee: 'Sarah Brown',
      position: 'Marketing Director',
      department: 'Marketing',
      employmentType: 'Part-time',
      location: 'Los Angeles',
      salary: '$120,000',
      status: 'Active',
    },
  ];

  // Columns definition with sorting, filtering, and conditional cell rendering
  const columns = [
    {
      name: 'Employee Name',
      selector: row => row.employee,
      sortable: true,
      filterable: true,
    },
    {
      name: 'Position',
      selector: row => row.position,
      sortable: true,
      filterable: true,
    },
    {
      name: 'Department',
      selector: row => row.department,
      sortable: true,
      filterable: true,
    },
    {
      name: 'Employment Type',
      selector: row => row.employmentType,
      sortable: true,
      filterable: true,
      cell: row => <span>{row.employmentType}</span>, // Render as custom cell (can add dropdowns or badges here)
    },
    {
      name: 'Location',
      selector: row => row.location,
      sortable: true,
      filterable: true,
    },
    {
      name: 'Salary',
      selector: row => row.salary,
      sortable: true,
      filterable: true,
    },
    {
      name: 'Status',
      selector: row => row.status,
      sortable: true,
      filterable: true,
      cell: row => (
        <span className={`${row.status === 'Active' ? "bg-green-300 p-1 rounded-md" : "bg-red-300 p-1 rounded-md"}`}>
          {row.status}
        </span>
      ), // Conditional cell styling
    },
  ];

  // Table's actions (pagination, grouping, etc.)
  const tableProps = {
    columns,
    data: rowData.filter(
      row =>
        row.employee.toLowerCase().includes(searchText.toLowerCase()) || // Filter by employee name
        row.position.toLowerCase().includes(searchText.toLowerCase()) // Filter by position
    ),
    pagination: true, // Enable pagination
    paginationPerPage: 5, // Number of rows per page
    paginationComponentOptions: {
      noRowsPerPage: true,
    },
    selectableRows: true, // Enable row selection
    sortIcon: <ArrowDownSquare />, // Custom sorting icon

  };

  return (
    <div className="p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Employee Table with Advanced Features</h2>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="p-3 mb-4 w-full border border-gray-300 rounded-md text-lg"
      />
      {/* Data Table */}
      <DataTable {...tableProps} />
     
    </div>
  );
}
