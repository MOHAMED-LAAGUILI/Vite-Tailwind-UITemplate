import { Table } from "lucide-react";
import SharpCard from "../Components/BodyCard";
import Table0 from "../Components/Tables/Table0";
import Table1 from "../Components/Tables/Table1";
import DataTable2 from "../Components/Tables/Table2";
import DataTable3 from "../Components/Tables/Table3";
import DataTableComponent from "../Components/Tables/Table4";
import AdvancedTable4 from "../Components/Tables/Table4.5";
import AdvancedTable5 from "../Components/Tables/Table5";

function TablesPage() {
  const data = Array(20).fill({
    Name: "Tiger Nixon",
    Position: "System Architect",
    Office: "Edinburgh",
    Age: 61,
    Startdate: "2011-04-25",
    Salary: "$320,800",
  });

  return (
    <div className="container mx-auto p-4">
      <SharpCard title={"react data table"} Icon={Table} classes={""}>
        <Table0 />
      </SharpCard>
      <SharpCard title={"AgGrid Tables"} Icon={Table} classes={""}>
      <Table1 />
      </SharpCard>
      <SharpCard title={"Tanstack Tables 1"} Icon={Table} classes={""}>
      <DataTable2 data={data} />
      </SharpCard>
      <SharpCard title={"Tanstack Tables 2"} Icon={Table} classes={""}>
      <DataTable3 data={data} />
      </SharpCard>
      <SharpCard title={"DataTables.net"} Icon={Table} classes={""}>
      <DataTableComponent />
      </SharpCard>
      <SharpCard title={"Advanced table 4"} Icon={Table} classes={""}>
      <AdvancedTable4 />
      </SharpCard>
      <SharpCard title={"Advanced table 5"} Icon={Table} classes={""}>
      <AdvancedTable5 />
      </SharpCard>
     
      
    </div>
  );
}

export default TablesPage;
