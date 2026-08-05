import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

export default function SummaryCards({ analytics }) {
  if (!analytics) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 animate-pulse">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="
              h-28
              rounded-2xl
              bg-white/70
              border border-white
              shadow-[0_8px_30px_rgba(23,20,38,0.05)]
            "
          />
        ))}
      </div>
    );
  }

  const stats = [
    {
      label: "Total products",
      value: analytics.total_products,
      icon: "◆",
      iconStyle: "bg-indigo-50 text-indigo-600 border-indigo-100",
    },
    {
      label: "Average price",
      value: `₹${analytics.average_price}`,
      icon: "~",
      iconStyle: "bg-teal-50 text-teal-600 border-teal-100",
    },
    {
      label: "Highest price",
      value: `₹${analytics.highest_price}`,
      icon: "▲",
      iconStyle: "bg-rose-50 text-rose-600 border-rose-100",
    },
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="
      grid
      grid-cols-2
      md:grid-cols-4
      gap-3
      md:gap-4
      mb-6
    "
    >
      {/* TOTAL INVENTORY VALUE */}
      <motion.div
        variants={item}
        whileHover={{
          y: -3,
          scale: 1.01,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 22,
        }}
        className="
        group
        col-span-2
        md:col-span-1
        relative
        overflow-hidden
        rounded-2xl
        p-4
        md:p-5
        bg-gradient-to-br
        from-indigo-600
        via-violet-600
        to-fuchsia-600
        text-white
        border
        border-white/10
        shadow-[0_10px_30px_rgba(0,0,0,0.35)]
        hover:shadow-[0_16px_40px_rgba(91,79,233,0.28)]
        transition-shadow
        duration-300
      "
      >
        <div
          className="
          pointer-events-none
          absolute
          -right-10
          -top-10
          h-28
          w-28
          rounded-full
          bg-white/10
          blur-2xl
          transition-transform
          duration-500
          group-hover:scale-125
        "
        />

        <div
          className="
          pointer-events-none
          absolute
          -left-8
          -bottom-10
          h-24
          w-24
          rounded-full
          bg-coral/20
          blur-2xl
        "
        />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <motion.div
              whileHover={{
                rotate: 8,
                scale: 1.08,
              }}
              className="
              h-8
              w-8
              rounded-xl
              bg-white/10
              border
              border-white/15
              backdrop-blur-md
              flex
              items-center
              justify-center
              text-sm
              shadow-inner
            "
            >
              ✦
            </motion.div>

            <span
              className="
              rounded-full
              bg-white/10
              border border-white/10
              px-2
              py-1
              text-[9px]
              font-semibold
              uppercase
              tracking-wider
              text-white/75
            "
            >
              Overview
            </span>
          </div>

          <p
            className="
            text-[10px]
            uppercase
            tracking-[0.15em]
            font-semibold
            text-white/60
            mb-1.5
          "
          >
            Total inventory value
          </p>

          <p
            className="
            font-display
            text-2xl
            md:text-2xl
            font-bold
            tracking-tight
          "
          >
            ₹{analytics.total_inventory_value.toLocaleString("en-IN")}
          </p>

          <div className="flex items-center gap-2 mt-3">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-50" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-300" />
            </span>

            <span className="text-[10px] text-white/55">
              Current valuation
            </span>
          </div>
        </div>
      </motion.div>

      {/* STAT CARDS */}
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          variants={item}
          whileHover={{
            y: -3,
            scale: 1.01,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 22,
          }}
          className="
          group
          relative
          overflow-hidden
          rounded-2xl
          backdrop-blur-xl
          border
          p-4
          md:p-5
          bg-gradient-to-br from-white/[0.10] via-white/[0.055] to-white/[0.025]
          backdrop-blur-2xl
          border border-white/[0.14]
          shadow-[0_12px_35px_rgba(0,0,0,0.30),inset_0_1px_0_rgba(255,255,255,0.08)]
          hover:bg-gradient-to-br
          hover:from-white/[0.14]
          hover:via-white/[0.07]
          hover:to-white/[0.03]
          hover:border-white/[0.20]
          hover:shadow-[0_18px_45px_rgba(0,0,0,0.40),inset_0_1px_0_rgba(255,255,255,0.12)]
          transition-all
          duration-300
        "
        >
          {/* Subtle glow */}
          <div
            className="
            pointer-events-none
            absolute
            -right-8
            -top-8
            h-20
            w-20
            rounded-full
            bg-indigo/10
            blur-2xl
            transition-transform
            duration-500
            group-hover:scale-125
          "
          />

          <div className="relative z-10">
            {/* Icon + arrow */}
            <div className="flex items-center justify-between mb-4">
              <motion.div
                whileHover={{
                  rotate: 6,
                  scale: 1.06,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className={`
                h-8
                w-8
                rounded-xl
                flex
                items-center
                justify-center
                text-xs
                font-bold
                border
                shadow-sm
                ${stat.iconStyle}
              `}
              >
                {stat.icon}
              </motion.div>

              <div
                className="
                h-6
                w-6
                rounded-lg
                bg-white/5
                border border-white/10
                flex
                items-center
                justify-center
                text-[10px]
                text-white/35
                group-hover:bg-white/10
                group-hover:text-white/60
                transition-all
                duration-200
              "
              >
                ↗
              </div>
            </div>

            {/* Label */}
            <p
              className="
              text-[10px]
              uppercase
              tracking-[0.13em]
              font-semibold
              text-white/40
              mb-1.5
            "
            >
              {stat.label}
            </p>

            {/* Value */}
            <p
              className="
              font-display
              text-xl
              md:text-2xl
              font-bold
              tracking-tight
              text-white
              pb-1
              truncate
            "
            >
              {stat.value}
            </p>

            {/* Bottom hover line */}
            <div
              className="
              absolute
              bottom-0
              left-0
              right-4
              h-0.5
              rounded-full
              bg-gradient-to-r
              from-indigo-400
              via-violet-400
              to-transparent
              scale-x-0
              origin-left
              group-hover:scale-x-100
              transition-transform
              duration-400
            "
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}