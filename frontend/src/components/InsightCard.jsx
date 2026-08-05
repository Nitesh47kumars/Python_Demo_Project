import { motion } from "framer-motion";

export default function InsightCard({ insight }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.15 }}
      className="relative overflow-hidden rounded-2xl bg-white border border-ink/5 shadow-sm p-5 h-full flex flex-col"
    >
      <div className="absolute -right-8 -bottom-8 h-28 w-28 rounded-full bg-amber/10 blur-2xl" />

      <div className="flex items-center gap-2 mb-3 relative">
        <div className="h-8 w-8 rounded-xl bg-amber-soft flex items-center justify-center text-amber text-base">
          ✦
        </div>
        <p className="text-xs font-semibold text-ink-soft uppercase tracking-wide">
          Quick insight
        </p>
      </div>
      <p className="font-display text-sm md:text-base font-medium text-ink leading-relaxed flex-1 relative">
        {insight || "Gathering insight from your inventory..."}
      </p>
    </motion.div>
  );
}