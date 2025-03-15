/* eslint-disable react/prop-types */
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";

function Button3({ className, label = "Explore Components", ...props }) {
  return (
    <button
      className={clsx(
        "relative flex items-center justify-center gap-2 h-12 px-6 rounded-lg transition-all duration-300 ease-in-out",
        "bg-zinc-900 dark:bg-zinc-100",
        "text-white dark:text-zinc-900",
        "hover:shadow-lg hover:scale-105",
        "group",
        className
      )}
      {...props}
    >
      {/* Gradient background effect */}
      <div
        className={clsx(
          "absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
          "opacity-30 group-hover:opacity-50",
          "blur-[2.5px] transition-opacity duration-500"
        )}
      />

      {/* Content */}
      <div className="relative flex items-center justify-center gap-2 z-10">
        <span className="text-sm font-medium">{label}</span>
        <ArrowUpRight className="w-4 h-4 text-white/80 dark:text-zinc-900/80" />
      </div>
    </button>
  );
}

export default Button3;
