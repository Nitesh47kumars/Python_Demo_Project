import { motion, AnimatePresence } from "framer-motion";
import ProductItem from "./ProductItem";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

export default function ProductList({ products, loading, error, onEdit, onDelete }) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 animate-pulse">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-36 rounded-2xl bg-white/60 border border-ink/5" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl bg-coral-soft border border-coral/20 p-8 text-center">
        <p className="text-sm font-medium text-coral">Unable to load products</p>
        <p className="text-xs text-ink-soft mt-1">
          Check that the backend is running, then try again.
        </p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="rounded-2xl bg-white border border-dashed border-ink/15 p-10 text-center">
        <div className="h-10 w-10 rounded-xl bg-indigo-soft flex items-center justify-center text-indigo text-lg mx-auto mb-3">
          +
        </div>
        <p className="text-sm font-medium text-ink">No products yet</p>
        <p className="text-xs text-ink-soft mt-1">Add your first product to see it here.</p>
      </div>
    );
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
    >
      <AnimatePresence mode="popLayout">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}