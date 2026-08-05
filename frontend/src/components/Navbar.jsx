import { motion } from "framer-motion";

export default function Navbar({ onAddClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="flex items-center justify-between mb-8 md:mb-10"
    >
      <div className="flex items-center gap-3">
        <motion.div
          whileHover={{ rotate: 8, scale: 1.05 }}
          className="h-10 w-10 rounded-2xl bg-gradient-to-br from-indigo via-coral to-amber flex items-center justify-center text-white text-lg font-display font-bold shadow-lg shadow-indigo/20 shrink-0"
        >
          P
        </motion.div>
        <div>
          <h1 className="font-display text-lg md:text-xl font-semibold text-ink leading-tight">
            Python_demo_project
          </h1>
          <p className="text-xs text-ink-soft hidden sm:block">Inventory, at a glance</p>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onAddClick}
        className="group flex items-center gap-1.5 text-white pl-4 pr-3 py-2.5 md:pl-5 md:pr-4 md:py-3 rounded-full text-sm font-medium hover:bg-indigo transition-colors duration-200 shadow-md shadow-ink/20"
      >
        <span className="hidden sm:inline">Add Product</span>
        <span className="sm:hidden">Add</span>
        <span className="h-5 w-5 rounded-full bg-white/50 flex items-center justify-center text-white leading-none group-hover:rotate-90 transition-transform duration-200">
          +
        </span>
      </motion.button>
    </motion.div>
  );
}