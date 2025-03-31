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
import TestimonialsPage from "./Pages/TestimonialsPage";
import Calendar2Page from "./Pages/CalendarPage2";
import MapPage from "./Pages/MapPage";
import BlankPage2 from "./Pages/BlankPage2";
import TermsOfService from "./Pages/TosPage";
import { SettingsPage } from "./Pages/SettingPage";

const ENVIRONMENT = import.meta.env.VITE_ENVIRONMENT;

const App = () => {

  
  return (
    <> 
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Home */}
          <Route index element={<HomePage />} />

          {/* Components */}
          <Route path="/bg-page" element={<BgPage />} />
          <Route path="/text-page" element={<TextPage />} />
          <Route path="/spinner-page" element={<SpinnerPage />} />
          <Route path="/dashboard-items" element={<DashBoardItems />} />
          <Route path="/accordion-items" element={<DropDownPage />} />
          <Route path="/button-page" element={<ButtonsPage />} />
          <Route path="/toolbar-page" element={<ToolBarPage />} />
          <Route path="/alert-page" element={<AlertPage />} />
          <Route path="/banner-page" element={<BannersPage />} />

          {/* Sections */}
          <Route path="/hero-section" element={<HeroSectionPage />} />
          <Route path="/form-section" element={<FormsPage />} />
          <Route path="/testimonial-section" element={<TestimonialsPage />} />

          {/* Pages */}
          <Route path="/profile-page" element={<ProfilePage />} />
          <Route path="/tos-page" element={<TermsOfService />} />
          <Route path="/setting-page" element={<SettingsPage />} />
          <Route path="/map-page" element={<MapPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/calendar-page" element={<CalendarPage />} />
          <Route path="/calendar2-page" element={<Calendar2Page />} />
          <Route path="/tables-page" element={<TablesPage />} />

          {/* Private Development Pages */}
          {ENVIRONMENT !== "production" && (
         <>
           <Route path="/blank-page" element={<BlankPage />} />
           <Route path="/blank-page2" element={<BlankPage2/>} />
           <Route path="/tailwind-resources-page" element={<TailwindSourcesPage />}/>
         </>
          )}

          {/* 404 route  redirection */}
          <Route path={"*"} element={<NotFound404 />} />
          <Route path={"404"} element={<NotFound404 />} />

        </Route>
      </Routes>
    </Router>
    </>
  );
};

export default App;
