/* eslint-disable react-refresh/only-export-components */
import {  
   Calendar1,Table, User2, House,
    Combine, Eraser,LayoutDashboard,
    Paperclip
    //TestTubesIcon, TrendingUp
   } from "lucide-react";

const SubItemIcon = () => {
  return (
    <>
      <span className="absolute left-[-15px] flex h-3 w-3">
        <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 dark:bg-yellow-300 opacity-75"></span>
        <span className="relative h-3 w-3 rounded-full bg-gray-900 dark:bg-white"></span>
      </span>
    </>
  );
}; 

export  const menuItems = [
    { name: "Home", path: "/", icon: <House className="h-4 w-4 mr-3" /> },
    {
      title: "Components",
      icon: <Combine className="h-4 w-5 transition-transform transform hover:scale-110" />,
      items: [
        { name: "Backgrounds", path: "/bg-page", icon: <SubItemIcon className="h-4 w-4 mr-3" /> },
        { name: "Text", path: "/text-page", icon: <SubItemIcon className="h-4 w-4 mr-3" /> },
        { name: "Spinners", path: "/spinner-page", icon: <SubItemIcon className="h-4 w-4 mr-3" /> },
        { name: "Dashboard items", path: "/dashboard-items", icon: <SubItemIcon  /> },
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
      ],
    },
    {name: "Auth", path: "/auth", icon: <User2 className="h-4 w-4 mr-3" /> },
    { name: "Table Filtering", path: "/tables-page", icon: <Table className="h-4 w-4 mr-3" /> },
    { name: "Calendar", path: "/calendar-page", icon: <Calendar1 className="h-4 w-4 mr-3" /> },
    { name: "Calendar2", path: "/calendar2-page", icon: <Calendar1 className="h-4 w-4 mr-3" /> },
    { name: "404 Page", path: "404", icon: <Eraser className="h-4 w-4 mr-3" /> },

    //  { name: "Other UI Resources", path: "/tailwind-resources-page", icon: <TrendingUp className="h-4 w-4 mr-3" /> },
 // { name: "blank", path: "/blank-page", icon: <TestTubesIcon className="h-4 w-4 mr-3" /> },


  ];