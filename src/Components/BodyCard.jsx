/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge";

export default function SharpCard({ title, Icon, actionButton, children, classes }) {
  return (
    <div className={twMerge(
    "mx-5 my-5  bg-white dark:bg-gray-800 shadow-lg border",
     "border-gray-200 dark:border-gray-700 rounded-sm transition-all",
     classes)}>
      {/* Header: Icon, Title & Action Button */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          {Icon && <Icon className="text-gray-700 dark:text-gray-300 w-6 h-6" />}
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        </div>
        {actionButton && <div>{actionButton}</div>}
      </div>

      {/* Horizontal Line */}
      <hr className="border-gray-300 dark:border-gray-600" />

      {/* Children Content */}
      {children && <div className="p-4">{children}</div>}
    </div>
  );
}
