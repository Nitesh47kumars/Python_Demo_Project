import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EMPTY_FORM = { name: "", description: "", price: "", quantity: "" };

export default function ProductForm({ isOpen, onClose, onSubmit, initialData }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name,
        description: initialData.description || "",
        price: initialData.price,
        quantity: initialData.quantity,
      });
    } else {
      setForm(EMPTY_FORM);
    }
    setErrors({});
  }, [initialData, isOpen]);

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.price || Number(form.price) <= 0) next.price = "Price must be greater than 0";
    if (form.quantity === "" || Number(form.quantity) < 0) next.quantity = "Quantity can't be negative";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    onSubmit({
      name: form.name.trim(),
      description: form.description.trim(),
      price: Number(form.price),
      quantity: Number(form.quantity),
    });
  };

  const inputClasses =
    "w-full mt-1.5 border border-ink/10 rounded-xl px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-indigo/30 focus:border-indigo transition-colors";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-ink/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-sm p-6 md:p-7"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo to-coral flex items-center justify-center text-white text-sm">
                {initialData ? "✏️" : "+"}
              </div>
              <h2 className="font-display text-lg font-semibold text-ink">
                {initialData ? "Edit product" : "Add product"}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-medium text-ink-soft">Name</label>
                <input
                  type="text"
                  placeholder="e.g. Wireless Mouse"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClasses}
                />
                {errors.name && <p className="text-xs text-coral mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="text-xs font-medium text-ink-soft">Description</label>
                <input
                  type="text"
                  placeholder="Optional"
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className={inputClasses}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-ink-soft">Price (₹)</label>
                  <input
                    type="number"
                    step="0.01"
                    placeholder="0"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    className={`${inputClasses} font-mono`}
                  />
                  {errors.price && <p className="text-xs text-coral mt-1">{errors.price}</p>}
                </div>

                <div>
                  <label className="text-xs font-medium text-ink-soft">Quantity</label>
                  <input
                    type="number"
                    placeholder="0"
                    value={form.quantity}
                    onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                    className={`${inputClasses} font-mono`}
                  />
                  {errors.quantity && <p className="text-xs text-coral mt-1">{errors.quantity}</p>}
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-sm font-medium rounded-full text-ink-soft hover:bg-base transition-colors"
                >
                  Cancel
                </button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="px-5 py-2.5 text-sm font-medium rounded-full bg-gradient-to-r from-indigo to-[#7A5BEA] text-white shadow-md shadow-indigo/25"
                >
                  {initialData ? "Save changes" : "Add product"}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}