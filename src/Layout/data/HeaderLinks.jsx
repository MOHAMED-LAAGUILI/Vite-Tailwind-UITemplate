import { User, Settings, LogOut } from "lucide-react";

export const HeaderLinks = [
  {
    name: "Profile",
    icon: <User className="h-5 w-5" />,
    className: "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1F1F23] text-left",
    colorClass: "text-gray-700 dark:text-gray-300",
    link: "/profile-page", // Add the link for profile
  },
  {
    name: "Settings",
    icon: <Settings className="h-5 w-5" />,
    className: "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1F1F23] text-left",
    colorClass: "text-gray-700 dark:text-gray-300",
    link: "/setting-page", // Add the link for settings
  },
  {
    name: "Logout",
    icon: <LogOut className="h-5 w-5" />,
    className: "text-red-500 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-[#1F1F23] text-left",
    colorClass: "text-red-500 dark:text-red-400",
    link: "/auth", // Add the link for logout (you can modify the logout functionality as needed)
  },
];
