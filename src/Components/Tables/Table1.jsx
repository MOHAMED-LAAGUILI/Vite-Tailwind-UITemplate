import { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ClientSideRowModelModule } from 'ag-grid-community';

export default function Table1() {
  const [rowData, setRowData] = useState([]);

  // Fetch or simulate data
  useEffect(() => {
    const rawData = [
      {
        id: 1,
        employee: 'John Doe',
        position: 'COO',
        employees: [
          { id: 2, name: 'Jane Smith', position: 'CTO' },
          { id: 3, name: 'Michael Johnson', position: 'Engineer' },
        ],
        Department: 'Operations',
        Employment_type: 'Full-time',
        Location: 'New York',
        joinDate: '2020-01-15',
        Salary: '$150,000',
        paymentMethod: 'Bank Transfer',
        Status: 'Active',
        contact: '123-456-7890',
        marriedChildren: 'Yes',
      },
      {
        id: 4,
        employee: 'Emily Davis',
        position: 'CEO',
        employees: [
          { id: 5, name: 'Sarah Brown', position: 'Marketing Director' },
          { id: 6, name: 'David Wilson', position: 'HR Manager' },
        ],
        Department: 'Executive',
        Employment_type: 'Full-time',
        Location: 'San Francisco',
        joinDate: '2019-08-22',
        Salary: '$200,000',
        paymentMethod: 'Bank Transfer',
        Status: 'Active',
        contact: '987-654-3210',
        marriedChildren: 'No',
      },
    ];

    const flattenData = rawData.flatMap((manager) => [
      {
        ...manager,
        employee: manager.employee,
        position: manager.position,
        group: true, // Flag to indicate this is a group row
      },
      ...manager.employees.map((emp) => ({
        ...emp,
        employee: emp.name,
        position: emp.position,
        managerId: manager.id, // Link back to the manager
        Department: manager.Department || 'N/A',
        Employment_type: manager.Employment_type || 'N/A',
        Location: manager.Location || 'N/A',
        joinDate: manager.joinDate || 'N/A',
        Salary: manager.Salary || 'N/A',
        paymentMethod: manager.paymentMethod || 'N/A',
        Status: manager.Status || 'N/A',
        contact: manager.contact || 'N/A',
        marriedChildren: manager.marriedChildren || 'N/A',
      })),
    ]);

    setRowData(flattenData);
  }, []);

  // Date Formatter for Join Date column
  const dateFormatter = (params) => {
    const date = new Date(params.value);
    return date.toLocaleDateString();
  };

  const [colDefs] = useState([
    { headerName: "Employee Name", field: "employee", sortable: true, filter: true },
    { headerName: "Position", field: "position", sortable: true, filter: true },
    { headerName: "Department", field: "Department", sortable: true, filter: true },
    { headerName: "Employment Type", field: "Employment_type", sortable: true, filter: true },
    { headerName: "Location", field: "Location", sortable: true, filter: true },
    { headerName: "Join Date", field: "joinDate", sortable: true, filter: true, valueFormatter: dateFormatter },
    { headerName: "Salary", field: "Salary", sortable: true, filter: true },
    { headerName: "Payment Method", field: "paymentMethod", sortable: true, filter: true },
    { headerName: "Status", field: "Status", sortable: true, filter: true },
    { headerName: "Contact", field: "contact", sortable: true, filter: true },
    { headerName: "Married Children", field: "marriedChildren", sortable: true, filter: true },
  ]);

  const autoGroupColumnDef = {
    headerName: "Manager",
    field: "employee",
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      suppressCount: true,
    },
    sortable: true,
    filter: true,
  };

  const gridOptions = {
    groupUseEntireRow: true, // Groups will span the whole row
    groupDefaultExpanded: 1, // Expand groups by default
    suppressRowClickSelection: true, // Prevent selection on group rows
    paginationPageSize: 10, // Pagination controls
    pagination: true, // Enable pagination
    domLayout: 'autoHeight', // Adjust grid's height dynamically based on content
    suppressAggFuncInHeader: true, // Hide aggregation functions in the header
    suppressDragLeaveHidesColumns: true, // Allow column drag leaving without hiding columns
    suppressRowHoverHighlight: true, // Disable hover highlight effect
  };

  return (
    <div className="ag-theme-alpine" >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        autoGroupColumnDef={autoGroupColumnDef}
        modules={[ClientSideRowModelModule]}
        gridOptions={gridOptions}
        paginationPageSize={10}
        pagination={true}
        domLayout="autoHeight"
        groupUseEntireRow={true}
        groupDefaultExpanded={1}
        suppressRowClickSelection={true}
      />
    </div>
  );
}
