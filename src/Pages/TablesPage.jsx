import DataTable from "../Components/Tables/Table1";
import DataTable2 from "../Components/Tables/Table2";
import DataTable3 from "../Components/Tables/Table3";

function TablesPage() {
    const data = [
        {
          "Name": "Tiger Nixon",
          "Position": "System Architect",
          "Office": "Edinburgh",
          "Age": 61,
          "Startdate": "2011-04-25",
          "Salary": "$320,800"
        },
        {
            "Name": "Tiger Nixon",
            "Position": "System Architect",
            "Office": "Edinburgh",
            "Age": 61,
            "Startdate": "2011-04-25",
            "Salary": "$320,800"
          }, {
            "Name": "Tiger Nixon",
            "Position": "System Architect",
            "Office": "Edinburgh",
            "Age": 61,
            "Startdate": "2011-04-25",
            "Salary": "$320,800"
          }, {
            "Name": "Tiger Nixon",
            "Position": "System Architect",
            "Office": "Edinburgh",
            "Age": 61,
            "Startdate": "2011-04-25",
            "Salary": "$320,800"
          }, {
            "Name": "Tiger Nixon",
            "Position": "System Architect",
            "Office": "Edinburgh",
            "Age": 61,
            "Startdate": "2011-04-25",
            "Salary": "$320,800"
          }, {
            "Name": "Tiger Nixon",
            "Position": "System Architect",
            "Office": "Edinburgh",
            "Age": 61,
            "Startdate": "2011-04-25",
            "Salary": "$320,800"
          }, {
            "Name": "Tiger Nixon",
            "Position": "System Architect",
            "Office": "Edinburgh",
            "Age": 61,
            "Startdate": "2011-04-25",
            "Salary": "$320,800"
          }, {
            "Name": "Tiger Nixon",
            "Position": "System Architect",
            "Office": "Edinburgh",
            "Age": 61,
            "Startdate": "2011-04-25",
            "Salary": "$320,800"
          }, {
            "Name": "Tiger Nixon",
            "Position": "System Architect",
            "Office": "Edinburgh",
            "Age": 61,
            "Startdate": "2011-04-25",
            "Salary": "$320,800"
          },
          {
            "Name": "Tiger Nixon",
            "Position": "System Architect",
            "Office": "Edinburgh",
            "Age": 61,
            "Startdate": "2011-04-25",
            "Salary": "$320,800"
          }, {
            "Name": "Tiger Nixon",
            "Position": "System Architect",
            "Office": "Edinburgh",
            "Age": 61,
            "Startdate": "2011-04-25",
            "Salary": "$320,800"
          }, {
            "Name": "Tiger Nixon",
            "Position": "System Architect",
            "Office": "Edinburgh",
            "Age": 61,
            "Startdate": "2011-04-25",
            "Salary": "$320,800"
          },{
            "Name": "Tiger Nixon",
            "Position": "System Architect",
            "Office": "Edinburgh",
            "Age": 61,
            "Startdate": "2011-04-25",
            "Salary": "$320,800"
          }, {
            "Name": "Tiger Nixon",
            "Position": "System Architect",
            "Office": "Edinburgh",
            "Age": 61,
            "Startdate": "2011-04-25",
            "Salary": "$320,800"
          }, {
            "Name": "Tiger Nixon",
            "Position": "System Architect",
            "Office": "Edinburgh",
            "Age": 61,
            "Startdate": "2011-04-25",
            "Salary": "$320,800"
          },{
            "Name": "Tiger Nixon",
            "Position": "System Architect",
            "Office": "Edinburgh",
            "Age": 61,
            "Startdate": "2011-04-25",
            "Salary": "$320,800"
          }, {
            "Name": "Tiger Nixon",
            "Position": "System Architect",
            "Office": "Edinburgh",
            "Age": 61,
            "Startdate": "2011-04-25",
            "Salary": "$320,800"
          }, {
            "Name": "Tiger Nixon",
            "Position": "System Architect",
            "Office": "Edinburgh",
            "Age": 61,
            "Startdate": "2011-04-25",
            "Salary": "$320,800"
          },{
            "Name": "Tiger Nixon",
            "Position": "System Architect",
            "Office": "Edinburgh",
            "Age": 61,
            "Startdate": "2011-04-25",
            "Salary": "$320,800"
          }, {
            "Name": "Tiger Nixon",
            "Position": "System Architect",
            "Office": "Edinburgh",
            "Age": 61,
            "Startdate": "2011-04-25",
            "Salary": "$320,800"
          }, {
            "Name": "Tiger Nixon",
            "Position": "System Architect",
            "Office": "Edinburgh",
            "Age": 61,
            "Startdate": "2011-04-25",
            "Salary": "$320,800"
          },{
            "Name": "Tiger Nixon",
            "Position": "System Architect",
            "Office": "Edinburgh",
            "Age": 61,
            "Startdate": "2011-04-25",
            "Salary": "$320,800"
          }, {
            "Name": "Tiger Nixon",
            "Position": "System Architect",
            "Office": "Edinburgh",
            "Age": 61,
            "Startdate": "2011-04-25",
            "Salary": "$320,800"
          }, {
            "Name": "Tiger Nixon",
            "Position": "System Architect",
            "Office": "Edinburgh",
            "Age": 61,
            "Startdate": "2011-04-25",
            "Salary": "$320,800"
          },
      ];
    
  return (
  
   
     
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold my-4">Employee Data</h1>
          <DataTable data={data} />
          <br/>
          <DataTable2 data={data} />
          <br/>
          <DataTable3 data={data} />

        </div>
      );
    };
    

export default TablesPage