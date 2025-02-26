import Table0 from "../Components/Tables/Table0";
import Table1 from "../Components/Tables/Table1";
import DataTable2 from "../Components/Tables/Table2";
import DataTable3 from "../Components/Tables/Table3";

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
      <h1 className="text-3xl font-semibold mb-6 text-center">Data Table Components</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">React Data Table components</h2>
        <Table0 />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">AgGrid Tables</h2>
        <Table1 />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tanstack Tables</h2>
        <DataTable2 data={data} />
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">DataTable3</h2>
        <DataTable3 data={data} />
      </section>
    </div>
  );
}

export default TablesPage;
