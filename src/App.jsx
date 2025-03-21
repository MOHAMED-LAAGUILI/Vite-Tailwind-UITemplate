import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Direct imports of the components
import TextPage from "./Pages/TextPage";
import SpinnerPage from "./Pages/SpinnerPage";
import Layout from "./Layout/Layout";
import DashBoardItems from "./Pages/DashBoardItemsPage";
import DropDownPage from "./Pages/DropDownPage";
import AuthPage from "./Pages/AuthPage";
import TablesPage from "./Pages/TablesPage";
import BgPage from "./Pages/BgPage";
import ButtonsPage from "./Pages/ButtonsPage";
import CalendarPage from "./Pages/CalendarPage";
import ToolBarPage from "./Pages/ToolBarPage";
import AlertPage from "./Pages/AlertPage";
import TailwindSourcesPage from "./Pages/TailwindSourcesPage";
import ProfilePage from "./Pages/ProfilePage";
import NotFound404 from "./Pages/NotFound404";
import HeroSectionPage from "./Pages/HeroSectionPage";
import HomePage from "./Pages/HomePage";
import BannersPage from "./Pages/BannersPage";
import FormsPage from "./Pages/FormsPage";
import BlankPage from "./Pages/BlankPage";


const App = () => { 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/bg-page" element={<BgPage />} />
          <Route path="/text-page" element={<TextPage />} />
          <Route path="/spinner-page" element={<SpinnerPage />} />
          <Route path="/dashboard-items" element={<DashBoardItems />} />
          <Route path="/accordion-items" element={<DropDownPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/tables-page" element={<TablesPage />} />
          <Route path="/button-page" element={<ButtonsPage />} />
          <Route path="/calendar-page" element={<CalendarPage />} />
          <Route path="/toolbar-page" element={<ToolBarPage />} />
          <Route path="/alert-page" element={<AlertPage />} />
          <Route path="/tailwind-resources-page" element={<TailwindSourcesPage />} />
          <Route path="/profile-page" element={<ProfilePage />} />
          <Route path="/hero-section" element={<HeroSectionPage />} />
          <Route path="/form-section" element={<FormsPage />} />
          <Route path="/banner-page" element={<BannersPage />} />
          <Route path="/blank-page" element={<BlankPage />} />



          {/* Always render 404 route for unmatched paths */}
          <Route path={"404"} element={<NotFound404 />} />
          <Route path={"*"} element={<NotFound404 />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
