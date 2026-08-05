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
          border-white/20
          shadow-[0_10px_30px_rgba(91,79,233,0.22)]
          hover:shadow-[0_16px_40px_rgba(91,79,233,0.30)]
          transition-shadow
          duration-300
        "
      >
        {/* Glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-10
            -top-10
            h-28
            w-28
            rounded-full
            bg-white/15
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
            bg-pink-400/20
            blur-2xl
          "
        />

        <div className="relative z-10">
          {/* Top row */}
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
                bg-white/15
                border border-white/20
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
                border border-white/15
                px-2
                py-1
                text-[9px]
                font-semibold
                uppercase
                tracking-wider
                text-white/80
              "
            >
              Overview
            </span>
          </div>

          {/* Label */}
          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.15em]
              font-semibold
              text-white/65
              mb-1.5
            "
          >
            Total inventory value
          </p>

          {/* Value */}
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

          {/* Status */}
          <div className="flex items-center gap-2 mt-3">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-300" />
            </span>

            <span className="text-[10px] text-white/60">
              Current valuation
            </span>
          </div>
        </div>
      </motion.div>
      

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
            bg-white/90
            backdrop-blur-xl
            border border-white
            p-4
            md:p-5
            shadow-[0_8px_30px_rgba(23,20,38,0.05)]
            hover:shadow-[0_15px_40px_rgba(23,20,38,0.09)]
            transition-shadow
            duration-300
          "
        >
          {/* Subtle background glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-8
              -top-8
              h-20
              w-20
              rounded-full
              bg-indigo/5
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
                  bg-gray-50
                  border border-gray-100
                  flex
                  items-center
                  justify-center
                  text-[10px]
                  text-gray-400
                  group-hover:bg-gray-100
                  group-hover:text-gray-600
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
                text-gray-400
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
                text-gray-900
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