import {  
  BookDashed, Calendar1, Component, HomeIcon, PenToolIcon,
   SplineIcon, Table, Text, TrendingUp, User2, House, UserCircle,
    Combine, Eraser, Section,PartyPopper,
    Paperclip
   } from "lucide-react";

export   const menuItems = [
    { name: "Home", path: "/", icon: <House className="h-4 w-4 mr-3" /> },
    {
      title: "Components",
      icon: <Combine className="h-4 w-5 transition-transform transform hover:scale-110" />,
      items: [
        { name: "Backgrounds", path: "/", icon: <HomeIcon className="h-4 w-4 mr-3" /> },
        { name: "Text", path: "/text-page", icon: <Text className="h-4 w-4 mr-3" /> },
        { name: "Spinners", path: "/spinner-page", icon: <SplineIcon className="h-4 w-4 mr-3" /> },
        { name: "Dashboard items", path: "/dashboard-items", icon: <BookDashed className="h-4 w-4 mr-3" /> },
        { name: "Accordion items", path: "/accordion-items", icon: <Component className="h-4 w-4 mr-3" /> },
        { name: "Buttons", path: "/button-page", icon: <Component className="h-4 w-4 mr-3" /> },
        { name: "ToolBar", path: "/toolbar-page", icon: <PenToolIcon className="h-4 w-4 mr-3" /> },
        { name: "Alert", path: "/alert-page", icon: <PenToolIcon className="h-4 w-4 mr-3" /> },
      ],
    },

    {
      title: "Sections",
      icon: <Section className="h-4 w-5 transition-transform transform hover:scale-110" />,
      items: [
        { name: "Hero", path: "/hero-section", icon: <PartyPopper className="h-4 w-4 mr-3" /> },
      ],
    },
    {
      title: "Pages",
      icon: <Paperclip className="h-4 w-5 transition-transform transform hover:scale-110" />,
      items: [
        { name: "Profile", path: "/profile-page", icon: <UserCircle className="h-4 w-4 mr-3" /> },
      ],
    },
    {name: "Auth", path: "/auth", icon: <User2 className="h-4 w-4 mr-3" /> },
    { name: "Table Filtering", path: "/tables-page", icon: <Table className="h-4 w-4 mr-3" /> },
    { name: "Calendar", path: "/calendar-page", icon: <Calendar1 className="h-4 w-4 mr-3" /> },
    { name: "Other UI Resources", path: "/tailwind-resources-page", icon: <TrendingUp className="h-4 w-4 mr-3" /> },
    { name: "404 Page", path: "*", icon: <Eraser className="h-4 w-4 mr-3" /> },
  ];