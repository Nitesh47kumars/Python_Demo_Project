export default function ProductItem({ product, onEdit, onDelete }) {
  return (
    <div className="flex items-center justify-between py-3 px-4 border-b border-gray-100 last:border-b-0">
      <div>
        <p className="text-sm font-medium text-gray-900">{product.name}</p>
        <p className="text-xs text-gray-500">{product.description}</p>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-700">₹{product.price}</span>
        <span className="text-xs text-gray-400">Qty: {product.quantity}</span>
        <button
          onClick={() => onEdit(product)}
          className="text-gray-500 hover:text-gray-900"
          title="Edit"
        >
          ✏️
        </button>
        <button
          onClick={() => onDelete(product)}
          className="text-gray-500 hover:text-red-600"
          title="Delete"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}