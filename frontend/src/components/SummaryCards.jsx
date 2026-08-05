import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function SummaryCards({ analytics }) {
  if (!analytics) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 animate-pulse">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-28 rounded-2xl bg-white/60 border border-ink/5" />
        ))}
      </div>
    );
  }

  const stats = [
    {
      label: "Total products",
      value: analytics.total_products,
      accent: "bg-indigo-soft text-indigo",
      icon: "◆",
    },
    {
      label: "Average price",
      value: `₹${analytics.average_price}`,
      accent: "bg-teal-soft text-teal",
      icon: "~",
    },
    {
      label: "Highest price",
      value: `₹${analytics.highest_price}`,
      accent: "bg-coral-soft text-coral",
      icon: "▲",
    },
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8"
    >
      {/* Hero spotlight card — the signature element */}
      <motion.div
        variants={item}
        whileHover={{ scale: 1.015 }}
        className="col-span-2 md:col-span-1 relative overflow-hidden rounded-2xl p-5 bg-gradient-to-br from-indigo via-[#7A5BEA] to-coral text-white shadow-lg shadow-indigo/25"
      >
        <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 blur-xl" />
        <div className="absolute -left-4 -bottom-8 h-20 w-20 rounded-full bg-amber/40 blur-xl" />
        <p className="text-xs font-medium text-white/80 mb-2 relative">Total inventory value</p>
        <p className="font-display text-2xl md:text-3xl font-bold relative">
          ₹{analytics.total_inventory_value.toLocaleString("en-IN")}
        </p>
      </motion.div>

      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          variants={item}
          whileHover={{ y: -3, scale: 1.01 }}
          className="rounded-2xl bg-white border border-ink/5 p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <div className={`h-7 w-7 rounded-lg flex items-center justify-center text-xs mb-3 ${stat.accent}`}>
            {stat.icon}
          </div>
          <p className="text-xs text-ink-soft mb-1">{stat.label}</p>
          <p className="font-display text-xl md:text-2xl font-semibold text-ink">
            {stat.value}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}