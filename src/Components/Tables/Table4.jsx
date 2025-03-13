import { useEffect, useRef } from "react";
import $ from "jquery";
import "datatables.net-responsive-dt/css/responsive.dataTables.min.css";
import "datatables.net-buttons-dt/css/buttons.dataTables.min.css";

import "datatables.net";
import "datatables.net-responsive";
import "datatables.net-buttons";
import "datatables.net-buttons/js/buttons.html5.min.js";
import "datatables.net-buttons/js/buttons.print.min.js";
import "datatables.net-buttons/js/buttons.colVis.min.js";


import "./Table4.css";

const DataTableComponent = () => {
  const tableRef = useRef(null);

  const tableData = [
    { name: "Tiger Nixon", position: "System Architect", office: "Edinburgh", age: "61", startDate: "2011/04/25", salary: "$320,800" },
    { name: "Garrett Winters", position: "Accountant", office: "Tokyo", age: "63", startDate: "2011/07/25", salary: "$170,750" },
    { name: "Ashton Cox", position: "Junior Technical Author", office: "San Francisco", age: "66", startDate: "2009/01/12", salary: "$86,000" },
    { name: "Cedric Kelly", position: "Senior Javascript Developer", office: "Edinburgh", age: "22", startDate: "2012/03/29", salary: "$433,060" },
    { name: "Airi Satou", position: "Accountant", office: "Tokyo", age: "33", startDate: "2008/11/28", salary: "$162,700" },
    { name: "Brielle Williamson", position: "Integration Specialist", office: "New York", age: "61", startDate: "2012/12/02", salary: "$372,000" },
    { name: "Herrod Chandler", position: "Sales Assistant", office: "San Francisco", age: "59", startDate: "2012/08/06", salary: "$137,500" },
    { name: "Rhona Davidson", position: "Integration Specialist", office: "Tokyo", age: "55", startDate: "2010/10/14", salary: "$327,900" },
    { name: "Colleen Hurst", position: "Javascript Developer", office: "San Francisco", age: "39", startDate: "2009/09/15", salary: "$205,500" },
    { name: "Sonya Frost", position: "Software Engineer", office: "Edinburgh", age: "23", startDate: "2008/12/13", salary: "$103,600" },
  ];

  useEffect(() => {
    if (!tableRef.current) return;

    if (!$.fn.dataTable.isDataTable(tableRef.current)) {
      $(tableRef.current).DataTable({
        responsive: true,
        dom: "Bfrtip",
        buttons: ["copy", "csv", "excel", "pdf", "print"],
        autoFill: true,
        colReorder: true,
        fixedHeader: true,
        keyTable: true,
        rowGroup: true,
        rowReorder: true,
        scroller: true,
        searchBuilder: true,
        searchPanes: true,
        select: true,
        stateRestore: true,
      });
    }

    return () => {
      if ($.fn.dataTable.isDataTable(tableRef.current)) {
        $(tableRef.current).DataTable().destroy();
      }
    };
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="flex items-center font-bold text-indigo-500 text-2xl py-6">
        Responsive{" "}
        <a className="underline mx-2" href="https://datatables.net/" target="_blank" rel="noopener noreferrer">
          DataTables.net
        </a>{" "}
        Table
      </h1>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <table id="myTable" className="stripe hover w-full text-left" ref={tableRef}>
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Office</th>
              <th>Age</th>
              <th>Start Date</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="py-2 px-4">{data.name}</td>
                <td className="py-2 px-4">{data.position}</td>
                <td className="py-2 px-4">{data.office}</td>
                <td className="py-2 px-4">{data.age}</td>
                <td className="py-2 px-4">{data.startDate}</td>
                <td className="py-2 px-4">{data.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTableComponent;
