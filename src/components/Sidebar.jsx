import { useState } from "react";
import {
  LayoutDashboard,
  BookOpen,
  Newspaper,
  Folders,
  Search,
} from "lucide-react";

const items = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: BookOpen, label: "Book Assessment" },
  { icon: Newspaper, label: "Observability News" },
  { icon: Folders, label: "Assessment Reports" },
  { icon: Search, label: "Plan PoV" },
];

export default function Sidebar() {
    const [active, setActive] = useState("Dashboard");
  return (
    <aside className="w-45h-screen px-4 py-6 bg-white dark:bg-[#020617] text-gray-800 dark:text-gray-200">
      <h1 className="text-xl font-semibold mb-8 tracking-wide">SENTRA</h1>

      <nav className="space-y-2">
  {items.map(({ icon: Icon, label }) => {
    const isActive = active === label;

    return (
      <div
        key={label}
        onClick={() => setActive(label)}
        className={`flex items-center gap-3 px-3 py-2 text-sm cursor-pointer
                    transition-colors rounded-md
                    ${
                      isActive
                        ? "border border-gray-300 dark:border-gray-600"
                        : "hover:bg-sentra-dashboardBg dark:hover:bg-[#1e293b]"
                    }`}
      >
        <Icon size={18} />
        {label}
      </div>
    );
  })}
</nav>

    </aside>
  );
}
