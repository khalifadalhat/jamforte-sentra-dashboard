import { useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function Topbar({ isDark, toggleTheme,assessmentCount }) {
    const [openProfile, setOpenProfile] = useState(false);
  return (
    <div className="flex justify-between items-start mb-6">
      {/* LEFT */}
      <div>
        <h1 className="text-xl font-semibold">
          Welcome, <span className="text-sentra-dashboardAccent">Mane</span>
        </h1>
        <p className="text-base text-black dark:text-gray-400 mt-0.5">
          Your Assessments
        </p>

        <p className="text-xs text-black-400 mt-0.5">
          {assessmentCount} 7 Items
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col items-end gap-3 relative">
  {/* TOP ROW: TOGGLE + PROFILE */}
  <div className="flex items-center gap-3">
    {/* THEME TOGGLE */}
    <div
  onClick={toggleTheme}
  className="relative w-14 h-8 rounded-md cursor-pointer
             bg-gray-200 dark:bg-[#1e293b]
             flex items-center justify-between px-2
             transition-colors"
>
  {/* MOON ICON */}
  <Moon
    size={14}
    className={`z-10 transition-opacity ${
      isDark ? "opacity-100 text-black" : "opacity-40 text-gray-500"
    }`}
  />

  {/* SUN ICON */}
  <Sun
    size={14}
    className={`z-10 transition-opacity ${
      !isDark ? "opacity-100 text-black" : "opacity-40 text-gray-400"
    }`}
  />

  {/* SLIDER (BEHIND ICONS) */}
  <div
    className={`absolute top-1 left-1 w-6 h-6 rounded-md bg-white shadow
                transition-transform
                ${isDark ? "translate-x-6" : "translate-x-0"}`}
  />
</div>

    {/* PROFILE BUTTON */}
    <button
      onClick={() => setOpenProfile(prev => !prev)}
      className="w-9 h-9 rounded-md bg-gray-200
                 text-black text-sm font-semibold
                 flex items-center justify-center"
    >
      YT
    </button>
  </div>

  {/* DROPDOWN */}
  {openProfile && (
    <div
      className="absolute top-12 right-0 w-48 rounded-md shadow-lg
                 bg-white dark:bg-[#020617]
                 border border-gray-200 dark:border-gray-700"
    >
      <div className="px-4 py-3">
        <p className="text-sm font-medium">Mane Adams</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          mane@sentra.ai
        </p>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700">
        <button className="w-full px-4 py-2 text-sm flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-[#1e293b]">
          <User size={14} />
          Profile
        </button>

        <button className="w-full px-4 py-2 text-sm flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-[#1e293b]">
          <LogOut size={14} />
          Logout
        </button>
      </div>
    </div>
  )}

  {/* START ASSESSMENT */}
  <button className="bg-sentra-dashboardAccent text-white px-4 py-2 rounded-md text-sm font-medium">
    + Start Assessment
  </button>
      </div>
    </div>
  );
}
