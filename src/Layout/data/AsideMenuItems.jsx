/* eslint-disable react-refresh/only-export-components */
import { House, Combine, Eraser, LayoutDashboard, Paperclip, TrendingUp, TestTubeDiagonal, TestTubes, ShieldBan, Settings } from "lucide-react";

const SubItemIcon = () => {
  return (
    <span className="absolute left-[-15px] flex h-3 w-3">
      <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 dark:bg-yellow-300 opacity-75"></span>
      <span className="relative h-3 w-3 rounded-full bg-gray-900 dark:bg-white"></span>
    </span>
  );
};

const ENVIRONMENT = import.meta.env.VITE_ENVIRONMENT;

export const menuItems = [
  { name: "Home", path: "/", icon: <House className="h-4 w-4 mr-3" /> },
  {
    title: "Components",
    icon: <Combine className="h-4 w-5 transition-transform transform hover:scale-110" />,
    items: [
      { name: "Backgrounds", path: "/bg-page", icon: <SubItemIcon className="h-4 w-4 mr-3" /> },
      { name: "Text", path: "/text-page", icon: <SubItemIcon className="h-4 w-4 mr-3" /> },
      { name: "Spinners", path: "/spinner-page", icon: <SubItemIcon className="h-4 w-4 mr-3" /> },
      { name: "Dashboard items", path: "/dashboard-items", icon: <SubItemIcon /> },
      { name: "Accordion items", path: "/accordion-items", icon: <SubItemIcon className="h-4 w-4 mr-3" /> },
      { name: "Buttons", path: "/button-page", icon: <SubItemIcon className="h-4 w-4 mr-3" /> },
      { name: "ToolBars", path: "/toolbar-page", icon: <SubItemIcon className="h-4 w-4 mr-3" /> },
      { name: "Alerts", path: "/alert-page", icon: <SubItemIcon className="h-4 w-4 mr-3" /> },
      { name: "Banners", path: "/banner-page", icon: <SubItemIcon className="h-4 w-4 mr-3" /> },
    ],
  },
  {
    title: "Sections",
    icon: <LayoutDashboard className="h-4 w-5 transition-transform transform hover:scale-110" />,
    items: [
      { name: "Hero", path: "/hero-section", icon: <SubItemIcon className="h-4 w-4 mr-3" /> },
      { name: "Forms", path: "/form-section", icon: <SubItemIcon className="h-4 w-4 mr-3" /> },
      { name: "Testimonials", path: "/testimonial-section", icon: <SubItemIcon className="h-4 w-4 mr-3" /> },
    ],
  },
  {
    title: "Pages",
    icon: <Paperclip className="h-4 w-5 transition-transform transform hover:scale-110" />,
    items: [
      { name: "Profile", path: "/profile-page", icon: <SubItemIcon className="h-4 w-4 mr-3" /> },
      { name: "Map", path: "/map-page", icon: <SubItemIcon className="h-4 w-4 mr-3" /> },
      { name: "TOS", path: "/tos-page", icon: <SubItemIcon className="h-4 w-4 mr-3" /> },
      { name: "Auth", path: "/auth", icon: "" },
      { name: "Table Filtering", path: "/tables-page", icon: "" },
      { name: "Calendar", path: "/calendar-page", icon: "" },
      { name: "Calendar2", path: "/calendar2-page", icon: "" },
    ],
  },
  { name: "404 Page", path: "404", icon: <Eraser className="h-4 w-4 mr-3" /> },
  { name: "Settings", path: "/setting-page", icon: <Settings className="h-4 w-4 mr-3" /> },

  ...(ENVIRONMENT !== "production" ? [
    {
      title: `${ENVIRONMENT}`,
      icon: <ShieldBan className="h-4 w-5 transition-transform transform hover:scale-110" />,
      items: [
        { name: `${ENVIRONMENT}-test 1`, path: "/blank-page", icon: <TestTubeDiagonal className="h-4 w-4 mr-3" /> },
        { name: `${ENVIRONMENT}-test 2`, path: "/blank-page2", icon: <TestTubes className="h-4 w-4 mr-3" /> },
        { name: `${ENVIRONMENT}-dev-resources`, path: "/tailwind-resources-page", icon: <TrendingUp className="h-4 w-4 mr-3" /> },
      ],
    },
  ] : []),
];
