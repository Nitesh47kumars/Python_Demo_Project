import { getTier, tierStyles } from "../utils/tier";

export default function ProductItem({ product, onEdit, onDelete }) {
  const tier = getTier(product.price);
  const lowStock = product.quantity < 5;

  return (
    <div className="group relative rounded-2xl bg-white border border-ink/5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-4 flex flex-col">
      <div className="flex items-start justify-between mb-2">
        <span
          className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full border ${tierStyles[tier.color]}`}
        >
          {tier.label}
        </span>

        <div className="flex items-center gap-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-150">
          <button
            onClick={() => onEdit(product)}
            aria-label={`Edit ${product.name}`}
            className="h-7 w-7 rounded-lg flex items-center justify-center text-ink-soft hover:bg-indigo-soft hover:text-indigo transition-colors"
          >
            ✏️
          </button>
          <button
            onClick={() => onDelete(product)}
            aria-label={`Delete ${product.name}`}
            className="h-7 w-7 rounded-lg flex items-center justify-center text-ink-soft hover:bg-coral-soft hover:text-coral transition-colors"
          >
            🗑️
          </button>
        </div>
      </div>

      <p className="font-display font-semibold text-ink text-sm mb-0.5 truncate">
        {product.name}
      </p>
      <p className="text-xs text-ink-soft mb-3 line-clamp-2 flex-1">
        {product.description || "No description"}
      </p>

      <div className="flex items-center justify-between pt-3 border-t border-ink/5">
        <span className="font-mono text-sm font-medium text-ink">₹{product.price}</span>
        <span
          className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${
            lowStock ? "bg-coral-soft text-coral" : "bg-base text-ink-soft"
          }`}
        >
          {lowStock ? `Low · ${product.quantity} left` : `Qty ${product.quantity}`}
        </span>
      </div>
    </div>
  );
}