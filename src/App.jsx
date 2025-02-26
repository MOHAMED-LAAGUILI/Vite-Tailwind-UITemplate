import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TextPage from "./Pages/TextPage";
import SpinnerPage from "./Pages/SpinnerPage";
import Layout from "./Layout/Layout";
import DashBoardItems from "./Pages/DashBoardItemsPage";
import DropDownPage from "./Pages/DropDownPage";
import AuthPage from "./Pages/AuthPage";
import TablesPage from "./Pages/TablesPage";
import BgPage from "./Pages/BgPage";
import ButtonsPage from "./Pages/ButtonsPage";
import CalendarPage from './Pages/CalendarPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BgPage />} />
          <Route path="/text-page" element={<TextPage />} />
          <Route path="/spinner-page" element={<SpinnerPage />} />
          <Route path="/dashboard-items" element={<DashBoardItems />} />
          <Route path="/accordion-items" element={<DropDownPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/tables-page" element={<TablesPage />} />
          <Route path="/button-page" element={<ButtonsPage />} />
          <Route path="/calendar-page" element={<CalendarPage />} />


          <Route path="*" element={<DropDownPage />} />

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
