import { getTier, tierStyles } from "../utils/tier";

export default function ProductItem({ product, onEdit, onDelete }) {
  const tier = getTier(product.price);
  const lowStock = product.quantity < 5;

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        bg-white/90
        backdrop-blur-xl
        border
        border-white
        shadow-[0_8px_30px_rgba(23,20,38,0.05)]
        hover:shadow-[0_18px_45px_rgba(23,20,38,0.10)]
        hover:-translate-y-1
        transition-all
        duration-500
        p-5
        flex
        flex-col
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-12
          -top-12
          h-28
          w-28
          rounded-full
          bg-indigo/5
          blur-3xl
          transition-transform
          duration-700
          group-hover:scale-150
        "
      />

      {/* Top section */}
      <div className="relative z-10 flex items-start justify-between mb-4">
        {/* Tier badge */}
        <span
          className={`
            inline-flex
            items-center
            gap-1.5
            text-[10px]
            font-bold
            uppercase
            tracking-wider
            px-3
            py-1.5
            rounded-full
            border
            shadow-sm
            ${tierStyles[tier.color]}
          `}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {tier.label}
        </span>

        {/* Actions */}
        <div
          className="
            flex
            items-center
            gap-1.5
            opacity-100
            md:opacity-0
            md:group-hover:opacity-100
            translate-y-0
            md:translate-y-1
            md:group-hover:translate-y-0
            transition-all
            duration-300
          "
        >
          <button
            onClick={() => onEdit(product)}
            aria-label={`Edit ${product.name}`}
            className="
              h-8
              w-8
              rounded-xl
              flex
              items-center
              justify-center
              bg-indigo-soft
              text-indigo
              border
              border-indigo/10
              hover:bg-indigo
              hover:text-white
              hover:scale-105
              active:scale-95
              transition-all
              duration-200
            "
          >
            ✏️
          </button>

          <button
            onClick={() => onDelete(product)}
            aria-label={`Delete ${product.name}`}
            className="
              h-8
              w-8
              rounded-xl
              flex
              items-center
              justify-center
              bg-coral-soft
              text-coral
              border
              border-coral/10
              hover:bg-coral
              hover:text-white
              hover:scale-105
              active:scale-95
              transition-all
              duration-200
            "
          >
            🗑️
          </button>
        </div>
      </div>

      {/* Product name */}
      <div className="relative z-10 mb-1">
        <p
          className="
            font-display
            font-bold
            text-gray-900
            text-base
            tracking-tight
            truncate
            group-hover:text-indigo
            transition-colors
            duration-300
          "
        >
          {product.name}
        </p>
      </div>

      {/* Description */}
      <p
        className="
          relative
          z-10
          text-xs
          text-gray-500
          leading-5
          mb-5
          line-clamp-2
          flex-1
        "
      >
        {product.description || "No description"}
      </p>

      {/* Product information */}
      <div
        className="
          relative
          z-10
          rounded-2xl
          bg-gray-50/80
          border
          border-gray-100
          p-3
          mb-4
        "
      >
        <div className="flex items-center justify-between">
          {/* Price */}
          <div>
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.15em]
                font-bold
                text-gray-400
                mb-1
              "
            >
              Price
            </p>

            <span
              className="
                font-mono
                text-base
                font-bold
                text-gray-900
              "
            >
              ₹{product.price}
            </span>
          </div>

          {/* Divider */}
          <div className="h-8 w-px bg-gray-200" />

          {/* Quantity */}
          <div className="text-right">
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.15em]
                font-bold
                text-gray-400
                mb-1
              "
            >
              Inventory
            </p>

            <span
              className={`
                text-xs
                font-bold
                ${
                  lowStock
                    ? "text-coral"
                    : "text-gray-700"
                }
              `}
            >
              {product.quantity} units
            </span>
          </div>
        </div>
      </div>

      {/* Stock status */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            {lowStock && (
              <span
                className="
                  animate-ping
                  absolute
                  inline-flex
                  h-full
                  w-full
                  rounded-full
                  bg-coral
                  opacity-60
                "
              />
            )}

            <span
              className={`
                relative
                inline-flex
                rounded-full
                h-2
                w-2
                ${lowStock ? "bg-coral" : "bg-emerald-500"}
              `}
            />
          </span>

          <span
            className={`
              text-[11px]
              font-semibold
              ${
                lowStock
                  ? "text-coral"
                  : "text-gray-500"
              }
            `}
          >
            {lowStock
              ? `Low · ${product.quantity} left`
              : "In stock"}
          </span>
        </div>

        {/* Quantity badge */}
        <span
          className={`
            text-[10px]
            font-bold
            px-2.5
            py-1
            rounded-full
            ${
              lowStock
                ? "bg-coral-soft text-coral border border-coral/10"
                : "bg-gray-100 text-gray-500 border border-gray-200"
            }
          `}
        >
          Qty {product.quantity}
        </span>
      </div>

      {/* Bottom hover accent */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-0.5
          bg-gradient-to-r
          from-indigo
          via-violet-400
          to-transparent
          scale-x-0
          origin-left
          group-hover:scale-x-100
          transition-transform
          duration-500
        "
      />
    </div>
  );
}