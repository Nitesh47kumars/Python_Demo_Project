export default function Navbar({ onAddClick }) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">📦 Python_demo_project</h1>
        <p className="text-sm text-gray-500">Simple Product Inventory</p>
      </div>
      <button
        onClick={onAddClick}
        className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition"
      >
        + Add Product
      </button>
    </div>
  );
}