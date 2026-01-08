import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ReportCard from "../components/ReportCard";

export default function Dashboard() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="flex min-h-screen bg-sentra-dashboardBg dark:bg-[#0f172a] transition-colors">
        <Sidebar />

        <main className="flex-1 p-8">
          <Topbar isDark={isDark} toggleTheme={toggleTheme} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            <ReportCard highlighted />
            <ReportCard />
            <ReportCard />
            <ReportCard />
            <ReportCard />
            <ReportCard />
            <ReportCard />
          </div>
        </main>
      </div>
    </div>
  );
}
