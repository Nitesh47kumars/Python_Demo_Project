import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EMPTY_FORM = {
  name: "",
  description: "",
  price: "",
  quantity: "",
};

export default function ProductForm({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}) {
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

    if (!form.price || Number(form.price) <= 0) {
      next.price = "Price must be greater than 0";
    }

    if (form.quantity === "" || Number(form.quantity) < 0) {
      next.quantity = "Quantity can't be negative";
    }

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

  const inputClasses = `
    w-full
    mt-1.5
    rounded-xl
    border
    border-gray-200
    bg-gray-50/70
    px-3.5
    py-2.5
    text-sm
    text-gray-900
    placeholder:text-gray-400
    outline-none
    transition-all
    duration-200
    hover:border-gray-300
    focus:bg-white
    focus:border-indigo-400
    focus:ring-4
    focus:ring-indigo-500/10
  `;

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
            bg-gray-950/40
            backdrop-blur-md
            p-4
          "
          onClick={onClose}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 15,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 15,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              overflow-hidden
              w-full
              max-w-md
              rounded-3xl
              bg-white/95
              backdrop-blur-xl
              border
              border-white
              shadow-[0_25px_80px_rgba(23,20,38,0.18)]
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                -right-16
                -top-16
                h-40
                w-40
                rounded-full
                bg-indigo-500/10
                blur-3xl
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -left-20
                bottom-10
                h-36
                w-36
                rounded-full
                bg-fuchsia-500/5
                blur-3xl
              "
            />

            <div className="relative z-10 p-6 md:p-7">


              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{
                      rotate: 6,
                      scale: 1.05,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                    className="
                      h-10
                      w-10
                      rounded-2xl
                      bg-gradient-to-br
                      from-indigo-500
                      via-violet-500
                      to-fuchsia-500
                      flex
                      items-center
                      justify-center
                      text-white
                      text-sm
                      shadow-lg
                      shadow-indigo-500/20
                    "
                  >
                    {initialData ? "✏️" : "✦"}
                  </motion.div>

                  <div>
                    <h2
                      className="
                        text-base
                        md:text-lg
                        font-bold
                        tracking-tight
                        text-gray-900
                      "
                    >
                      {initialData
                        ? "Edit product"
                        : "Add new product"}
                    </h2>

                    <p className="text-[11px] text-gray-400 mt-0.5">
                      {initialData
                        ? "Update your inventory details"
                        : "Add an item to your inventory"}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="
                    h-8
                    w-8
                    rounded-xl
                    bg-gray-50
                    border
                    border-gray-100
                    text-gray-400
                    hover:bg-gray-100
                    hover:text-gray-700
                    transition-all
                    duration-200
                  "
                >
                  ×
                </button>
              </div>


              <form onSubmit={handleSubmit} className="space-y-4">

                {/* NAME */}

                <div>
                  <label
                    className="
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-wider
                      text-gray-500
                    "
                  >
                    Product name
                  </label>

                  <input
                    type="text"
                    placeholder="e.g. Wireless Mouse"
                    value={form.name}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        name: e.target.value,
                      })
                    }
                    className={inputClasses}
                  />

                  {errors.name && (
                    <p className="text-[11px] text-rose-500 mt-1.5">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* DESCRIPTION */}

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      className="
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-wider
                        text-gray-500
                      "
                    >
                      Description
                    </label>

                    <span className="text-[10px] text-gray-400">
                      Optional
                    </span>
                  </div>

                  <textarea
                    placeholder="Describe the product, features, category, or other useful details..."
                    value={form.description}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        description: e.target.value,
                      })
                    }
                    rows={4}
                    className={`
                      ${inputClasses}
                      resize-none
                      leading-6
                    `}
                  />
                </div>

                {/* PRICE + QUANTITY */}

                <div className="grid grid-cols-2 gap-3">

                  <div>
                    <label
                      className="
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-wider
                        text-gray-500
                      "
                    >
                      Price
                    </label>

                    <div className="relative">
                      <span
                        className="
                          absolute
                          left-3.5
                          top-1/2
                          -translate-y-1/2
                          text-xs
                          font-semibold
                          text-gray-400
                        "
                      >
                        ₹
                      </span>

                      <input
                        type="number"
                        step="0.01"
                        placeholder="0.00"
                        value={form.price}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            price: e.target.value,
                          })
                        }
                        className={`${inputClasses} pl-8 font-mono`}
                      />
                    </div>

                    {errors.price && (
                      <p className="text-[11px] text-rose-500 mt-1.5">
                        {errors.price}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      className="
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-wider
                        text-gray-500
                      "
                    >
                      Quantity
                    </label>

                    <input
                      type="number"
                      placeholder="0"
                      value={form.quantity}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          quantity: e.target.value,
                        })
                      }
                      className={`${inputClasses} font-mono`}
                    />

                    {errors.quantity && (
                      <p className="text-[11px] text-rose-500 mt-1.5">
                        {errors.quantity}
                      </p>
                    )}
                  </div>
                </div>

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-3
                    pt-5
                    mt-2
                    border-t
                    border-gray-100
                  "
                >
                  <p className="hidden sm:block text-[10px] text-gray-400">
                    {initialData
                      ? "Changes will update this product"
                      : "Product will be added to inventory"}
                  </p>

                  <div className="flex items-center gap-2 ml-auto">
                    <button
                      type="button"
                      onClick={onClose}
                      className="
                        px-4
                        py-2.5
                        text-xs
                        font-semibold
                        rounded-xl
                        text-gray-500
                        border
                        border-gray-200
                        bg-white
                        hover:bg-gray-50
                        hover:text-gray-700
                        transition-all
                        duration-200
                      "
                    >
                      Cancel
                    </button>

                    <motion.button
                      whileHover={{
                        scale: 1.02,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      type="submit"
                      className="
                        px-5
                        py-2.5
                        text-xs
                        font-semibold
                        rounded-xl
                        bg-gradient-to-r
                        from-indigo-600
                        via-violet-600
                        to-fuchsia-600
                        text-white
                        shadow-lg
                        shadow-indigo-500/20
                        hover:shadow-indigo-500/30
                        transition-shadow
                        duration-300
                      "
                    >
                      {initialData
                        ? "Save changes"
                        : "Add product"}
                    </motion.button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}