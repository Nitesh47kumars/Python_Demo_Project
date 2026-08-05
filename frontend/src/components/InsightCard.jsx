import { motion } from "framer-motion";

export default function InsightCard({ insight }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.15 }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        bg-gradient-to-br
        from-white/[0.10]
        via-white/[0.055]
        to-white/[0.025]
        backdrop-blur-2xl
        border
        border-white/[0.14]
        shadow-[0_12px_40px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.08)]
        hover:shadow-[0_20px_55px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)]
        hover:-translate-y-1
        hover:border-white/[0.20]
        transition-all
        duration-500
        p-6
        h-full
        flex
        flex-col
      "
    >
      {/* Amber glow */}
      <div
        className="
          pointer-events-none
          absolute
          -top-20
          -right-20
          h-48
          w-48
          rounded-full
          bg-amber/10
          blur-3xl
          transition-transform
          duration-700
          group-hover:scale-125
        "
      />

      {/* Indigo glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
          -left-20
          h-40
          w-40
          rounded-full
          bg-indigo/10
          blur-3xl
        "
      />

      {/* Header */}
      <div className="relative z-10 flex items-center gap-3 mb-6">
        <motion.div
          whileHover={{ rotate: 8, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="
            h-10
            w-10
            rounded-2xl
            bg-gradient-to-br
            from-amber/20
            to-orange-500/10
            border
            border-amber/20
            flex
            items-center
            justify-center
            text-amber-300
            text-lg
            shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]
          "
        >
          ✦
        </motion.div>

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p
              className="
                text-[11px]
                font-bold
                text-white/90
                uppercase
                tracking-[0.16em]
              "
            >
              Quick Insight
            </p>

            <span className="relative flex h-2 w-2">
              <span
                className="
                  animate-ping
                  absolute
                  inline-flex
                  h-full
                  w-full
                  rounded-full
                  bg-amber-400
                  opacity-60
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  rounded-full
                  h-2
                  w-2
                  bg-amber-400
                "
              />
            </span>
          </div>

          <p className="text-[11px] text-white/40 mt-1">
            Based on your inventory
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-white/35
              "
            >
              Inventory Insight
            </span>

            <div
              className="
                h-px
                flex-1
                bg-gradient-to-r
                from-white/10
                to-transparent
              "
            />
          </div>

          <div className="relative">
            <div
              className="
                absolute
                -left-3
                top-0
                h-full
                w-1
                rounded-full
                bg-gradient-to-b
                from-amber-400
                via-orange-400
                to-amber-500
                shadow-[0_0_12px_rgba(245,158,11,0.25)]
              "
            />

            <p
              className="
                pl-5
                text-base
                md:text-lg
                font-semibold
                text-white/90
                leading-8
                tracking-tight
              "
            >
              {insight || "Gathering insight from your inventory..."}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-amber/10
                border
                border-amber/20
                px-3
                py-1.5
                shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
              "
            >
              <span className="text-sm">✦</span>

              <span
                className="
                  text-[11px]
                  font-semibold
                  text-amber-300
                "
              >
                Smart Analysis
              </span>
            </div>

            <span className="text-[11px] text-white/35">
              Based on current inventory
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="
          relative
          z-10
          mt-6
          pt-4
          border-t
          border-white/[0.08]
          flex
          items-center
          justify-between
        "
      >
        <div className="flex items-center gap-2">
          <div
            className="
              h-6
              w-6
              rounded-lg
              bg-white/[0.04]
              border
              border-white/[0.06]
              flex
              items-center
              justify-center
              text-xs
            "
          >
            ✨
          </div>

          <span className="text-[11px] font-medium text-white/40">
            Inventory analysis
          </span>
        </div>

        <span className="flex items-center gap-1.5 text-[9px] text-gray-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live
        </span>
      </div>
    </motion.div>
  );
}