import{
CircleUserRound,
MoreVertical
} from "lucide-react";

export default function ReportCard({ highlighted }) {
  return (
    <div
      className={`relative p-4 h-[150px] flex flex-col justify-between
            rounded-lg transition-colors duration-200 
    hover:-translate-y-1 hover:shadow-md hover:border hover:border-gray-200 ${
        highlighted
          ? "bg-gradient-to-br from-sentra-dashboardAccent to-sentra-light text-white"
          : "bg-white dark:bg-[#1f2937] text-gray-800 dark:text-gray-200"
      }`}
    >
      <button
  className="absolute top-3 right-3 p-1 rounded-md text-gray-400 hover:bg-black/5 hover:text-gray-600 transition"
  aria-label="Card menu"
>
  <MoreVertical size={18} />
  </button>

      <h3 className="text-base font-medium mb-1">Report3</h3>
      <p className="text-xs mb-4 opacity-80 pb-10">14 Mb</p>

      <div className="flex justify-between items-center text-xs opacity-70">
  {/* USER */}
  <div className="flex items-center gap-2">
    <CircleUserRound size={16} />
    <span>Robert Jonson</span>
  </div>

  {/* DATE */}
  <span>3 w ago</span>
</div>
    </div>
  );
}
