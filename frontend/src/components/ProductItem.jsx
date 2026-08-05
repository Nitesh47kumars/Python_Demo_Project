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
        bg-white/[0.055]
        backdrop-blur-3xl
        border border-white/[0.09]
        shadow-[0_12px_40px_rgba(0,0,0,0.28)]
        hover:bg-white/[0.075]
        hover:border-white/[0.14]
        hover:shadow-[0_20px_55px_rgba(0,0,0,0.38)]
        hover:-translate-y-1
        transition-all
        duration-500
        p-5
        flex
        flex-col
      "
    >
      {/* Subtle indigo glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-36
          w-36
          rounded-full
          bg-indigo/10
          blur-3xl
          transition-transform
          duration-700
          group-hover:scale-150
        "
      />

      {/* Subtle coral glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-20
          -bottom-20
          h-32
          w-32
          rounded-full
          bg-coral/5
          blur-3xl
          transition-transform
          duration-700
          group-hover:scale-125
        "
      />

      {/* Top section */}
      <div className="relative z-10 flex items-start justify-between mb-4">
        {/* Tier badge */}
        <span
          className="
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
          "
          style={{
            color: tier.hex,
            backgroundColor: `${tier.hex}18`,
            borderColor: `${tier.hex}45`,
            boxShadow: `0 0 15px ${tier.hex}12`,
          }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: tier.hex }}
          />

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
              bg-indigo/10
              text-indigo-300
              border
              border-indigo/20
              hover:bg-indigo
              hover:text-white
              hover:border-indigo
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
              bg-coral/10
              text-coral
              border
              border-coral/20
              hover:bg-coral
              hover:text-white
              hover:border-coral
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
            text-white/90
            text-base
            tracking-tight
            truncate
            group-hover:text-indigo-300
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
          text-white/40
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
          bg-black/20
          border
          border-white/[0.07]
          p-3
          mb-4
          shadow-inner
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
                text-white/30
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
                text-white/90
              "
            >
              ₹{product.price}
            </span>
          </div>

          {/* Divider */}
          <div className="h-8 w-px bg-white/[0.08]" />

          {/* Quantity */}
          <div className="text-right">
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.15em]
                font-bold
                text-white/30
                mb-1
              "
            >
              Inventory
            </p>

            <span
              className={`
                text-xs
                font-bold
                ${lowStock ? "text-coral" : "text-white/70"}
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
                ${lowStock ? "bg-coral" : "bg-emerald-400"}
              `}
            />
          </span>

          <span
            className={`
              text-[11px]
              font-semibold
              ${lowStock ? "text-coral" : "text-white/40"}
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
            ${lowStock
              ? "bg-coral/10 text-coral border border-coral/20"
              : "bg-white/[0.05] text-white/40 border border-white/[0.08]"
            }
          `}
        >
          Qty {product.quantity}
        </span>
      </div>

      {/* Bottom shiny accent */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-indigo/60
          to-transparent
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
        "
      />
    </div>
  );
}