import { motion, AnimatePresence } from "framer-motion";

export default function ConfirmDialog({
  isOpen,
  message,
  onConfirm,
  onCancel,
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-gray-950/70
            backdrop-blur-md
            p-4
          "
          onClick={onCancel}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 12,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.94,
              y: 12,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            onClick={(e) => e.stopPropagation()}
            className="
              group
              relative
              overflow-hidden
              w-full
              max-w-sm
              rounded-3xl
              bg-[#111015]/95
              backdrop-blur-xl
              border
              border-white/10
              shadow-[0_25px_80px_rgba(0,0,0,0.55)]
            "
          >
            {/* Ambient glow — ProductChart style */}
            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-52
                w-52
                rounded-full
                bg-rose-500/10
                blur-3xl
                transition-transform
                duration-700
                group-hover:scale-125
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -left-24
                -bottom-24
                h-48
                w-48
                rounded-full
                bg-indigo-500/10
                blur-3xl
              "
            />

            <div className="relative z-10 p-6 md:p-7">
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <motion.div
                  initial={{ scale: 0.8, rotate: -8 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: 0.08,
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="
                    relative
                    h-11
                    w-11
                    rounded-2xl
                    bg-gradient-to-br
                    from-rose-500/15
                    to-red-500/10
                    border
                    border-rose-500/20
                    flex
                    items-center
                    justify-center
                    text-lg
                    shadow-[0_8px_25px_rgba(244,63,94,0.12)]
                  "
                >
                  🗑️

                  {/* Status dot */}
                  <span
                    className="
                      absolute
                      -right-1
                      -top-1
                      h-3
                      w-3
                      rounded-full
                      bg-rose-500
                      border-2
                      border-[#111015]
                    "
                  />
                </motion.div>

                <button
                  type="button"
                  onClick={onCancel}
                  className="
                    h-8
                    w-8
                    rounded-xl
                    bg-white/5
                    border
                    border-white/10
                    text-gray-500
                    hover:bg-white/10
                    hover:text-gray-200
                    transition-all
                    duration-200
                  "
                  aria-label="Close"
                >
                  ×
                </button>
              </div>

              {/* Title */}
              <div className="mb-3">
                <h2
                  className="
                    text-base
                    md:text-lg
                    font-bold
                    tracking-tight
                    text-white
                  "
                >
                  Delete product?
                </h2>

                <p
                  className="
                    text-[11px]
                    text-gray-500
                    mt-1
                  "
                >
                  This action requires your confirmation
                </p>
              </div>

              {/* Message */}
              <div
                className="
                  relative
                  rounded-2xl
                  bg-white/[0.035]
                  border
                  border-white/[0.08]
                  px-4
                  py-3.5
                  mb-5
                "
              >
                {/* Accent line */}
                <div
                  className="
                    absolute
                    left-0
                    top-3
                    bottom-3
                    w-1
                    rounded-r-full
                    bg-gradient-to-b
                    from-rose-400
                    to-red-500
                  "
                />

                <p
                  className="
                    pl-2
                    text-sm
                    font-medium
                    text-gray-300
                    leading-6
                  "
                >
                  {message}
                </p>
              </div>

              {/* Warning */}
              <div className="flex items-center gap-2 mb-6">
                <span
                  className="
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-rose-500/10
                    border
                    border-rose-500/15
                    text-[10px]
                    font-bold
                    text-rose-400
                  "
                >
                  !
                </span>

                <span className="text-[11px] text-gray-500">
                  This action cannot be undone.
                </span>
              </div>

              {/* Footer */}
              <div
                className="
                  flex
                  items-center
                  justify-end
                  gap-2
                  pt-4
                  border-t
                  border-white/[0.08]
                "
              >
                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onCancel}
                  className="
                    px-4
                    py-2.5
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    text-xs
                    font-semibold
                    text-gray-400
                    hover:bg-white/[0.08]
                    hover:text-gray-200
                    transition-all
                    duration-200
                  "
                >
                  Cancel
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.02,
                    y: -1,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={onConfirm}
                  className="
                    relative
                    overflow-hidden
                    px-5
                    py-2.5
                    rounded-xl
                    bg-gradient-to-r
                    from-rose-500
                    to-red-500
                    text-white
                    text-xs
                    font-semibold
                    shadow-lg
                    shadow-rose-500/20
                    hover:shadow-rose-500/35
                    transition-shadow
                    duration-300
                  "
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>🗑️</span>
                    Delete product
                  </span>

                  {/* Hover shine */}
                  <span
                    className="
                      absolute
                      inset-0
                      bg-white/10
                      translate-x-[-100%]
                      hover:translate-x-[100%]
                      transition-transform
                      duration-500
                    "
                  />
                </motion.button>
              </div>
            </div>

            {/* Bottom accent — matches ProductChart */}
            <div
              className="
                absolute
                bottom-0
                left-5
                right-5
                h-px
                bg-gradient-to-r
                from-transparent
                via-white/10
                to-transparent
              "
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}