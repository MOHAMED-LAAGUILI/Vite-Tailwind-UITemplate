import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { squircle } from 'ldrs';

// Lazy load the pages
const TextPage = lazy(() => import("./Pages/TextPage"));
const SpinnerPage = lazy(() => import("./Pages/SpinnerPage"));
const Layout = lazy(() => import("./Layout/Layout"));
const DashBoardItems = lazy(() => import("./Pages/DashBoardItemsPage"));
const DropDownPage = lazy(() => import("./Pages/DropDownPage"));
const AuthPage = lazy(() => import("./Pages/AuthPage"));
const TablesPage = lazy(() => import("./Pages/TablesPage"));
const BgPage = lazy(() => import("./Pages/BgPage"));
const ButtonsPage = lazy(() => import("./Pages/ButtonsPage"));
const CalendarPage = lazy(() => import("./Pages/CalendarPage"));
const ToolBarPage = lazy(() => import("./Pages/ToolBarPage"));
const AlertPage = lazy(() => import("./Pages/AlertPage"));
const TailwindSourcesPage = lazy(() => import("./Pages/TailwindSourcesPage"));
const BlankPage = lazy(() => import("./Pages/BlankPage"));
const ProfilePage = lazy(() => import("./Pages/ProfilePage"));
const NotFound404 = lazy(() => import("./Pages/NotFound404"));
const HeroSectionPage = lazy(() => import("./Pages/HeroSectionPage"));
const HomePage = lazy(() => import("./Pages/HomePage"));

squircle.register();

const App = () => {
  return (
    <Router>
      <Suspense fallback={
        <div className="flex justify-center items-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <l-squircle
          size="37"
          stroke="5"
          stroke-length="0.15"
          bg-opacity="0.1"
          speed="0.9"
          color="black"
        ></l-squircle>
      </div>
      }>
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
            <Route path="/test" element={<BlankPage />} />
            <Route path="*" element={<NotFound404 />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
