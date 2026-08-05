export default function InsightCard({ insight }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 h-full flex flex-col justify-center">
      <p className="text-xs text-gray-500 mb-2">Quick Insight</p>
      <p className="text-sm text-gray-800">💡 {insight || "Loading insight..."}</p>
    </div>
  );
}