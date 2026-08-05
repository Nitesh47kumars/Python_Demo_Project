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
        bg-white/90
        backdrop-blur-xl
        border border-white
        shadow-[0_12px_40px_rgba(23,20,38,0.07)]
        hover:shadow-[0_20px_55px_rgba(23,20,38,0.12)]
        hover:-translate-y-1
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
          bg-indigo/5
          blur-3xl
        "
      />


      <div className="relative z-10 flex items-center gap-3 mb-6">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 8, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="
            h-10
            w-10
            rounded-2xl
            bg-gradient-to-br
            from-amber-50
            to-orange-100
            border
            border-amber-100
            flex
            items-center
            justify-center
            text-amber-600
            text-lg
            shadow-sm
          "
        >
          ✦
        </motion.div>

        {/* Title */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p
              className="
                text-[11px]
                font-bold
                text-gray-900
                uppercase
                tracking-[0.16em]
              "
            >
              Quick Insight
            </p>

            {/* Live indicator */}
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
                  bg-amber-500
                "
              />
            </span>
          </div>

          <p className="text-[11px] text-gray-400 mt-1">
            Based on your inventory
          </p>
        </div>

        {/* More button */}
        <button
          className="
            h-8
            w-8
            rounded-xl
            border
            border-gray-100
            bg-gray-50
            text-gray-400
            hover:bg-gray-100
            hover:text-gray-700
            transition-all
            duration-200
          "
        >
          ···
        </button>
      </div>


      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full">

          {/* Section label */}
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-gray-400
              "
            >
              Inventory Insight
            </span>

            <div
              className="
                h-px
                flex-1
                bg-gradient-to-r
                from-gray-200
                to-transparent
              "
            />
          </div>

          {/* Main insight */}
          <div className="relative">
            {/* Accent line */}
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
              "
            />

            <p
              className="
                pl-5
                text-base
                md:text-lg
                font-semibold
                text-gray-900
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
                bg-amber-50
                border
                border-amber-100
                px-3
                py-1.5
                shadow-sm
              "
            >
              <span className="text-sm">✦</span>

              <span
                className="
                  text-[11px]
                  font-semibold
                  text-amber-700
                "
              >
                Smart Analysis
              </span>
            </div>

            <span className="text-[11px] text-gray-400">
              Based on current inventory
            </span>
          </div>
        </div>
      </div>


      <div
        className="
          relative
          z-10
          mt-6
          pt-4
          border-t
          border-gray-100
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
              bg-gray-50
              flex
              items-center
              justify-center
              text-xs
            "
          >
            ✨
          </div>

          <span className="text-[11px] font-medium text-gray-500">
            Inventory analysis
          </span>
        </div>

        <span
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-wider
            text-gray-300
          "
        >
          Live
        </span>
      </div>
    </motion.div>
  );
}