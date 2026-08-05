import { useState, useEffect, useCallback } from "react";
import Navbar from "./components/Navbar";
import SummaryCards from "./components/SummaryCards";
import InsightCard from "./components/InsightCard";
import ProductChart from "./components/ProductChart";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import ConfirmDialog from "./components/ConfirmDialog";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getAnalytics,
} from "./services/api";

export default function App() {
  const [products, setProducts] = useState([]);
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [formOpen, setFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const [deleteTarget, setDeleteTarget] = useState(null);

  const loadAll = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const [productsRes, analyticsRes] = await Promise.all([
        getProducts(),
        getAnalytics(),
      ]);
      setProducts(productsRes.data);
      setAnalytics(analyticsRes.data);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadAll();
  }, [loadAll]);

  const handleAddClick = () => {
    setEditingProduct(null);
    setFormOpen(true);
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
    setFormOpen(true);
  };

  const handleFormSubmit = async (data) => {
    try {
      if (editingProduct) {
        await updateProduct(editingProduct.id, data);
      } else {
        await createProduct(data);
      }
      setFormOpen(false);
      setEditingProduct(null);
      await loadAll();
    } catch (err) {
      console.error(err);
      alert("Something went wrong saving the product.");
    }
  };

  const handleDeleteConfirm = async () => {
    try {
      await deleteProduct(deleteTarget.id);
      setDeleteTarget(null);
      await loadAll();
    } catch (err) {
      console.error(err);
      alert("Something went wrong deleting the product.");
    }
  };

  return (
    <div className="relative min-h-screen bg-white/90 px-4 py-6 md:px-10 md:py-10">
      <div className="ambient-bg">
        <span className="bg-indigo w-96 h-96 -top-20 -left-20" />
        <span className="bg-coral w-80 h-80 top-1/3 -right-10" />
        <span className="bg-amber w-72 h-72 bottom-0 left-1/4" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <Navbar onAddClick={handleAddClick} />

        <SummaryCards analytics={analytics} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-8">
          <div className="md:col-span-2">
            <ProductChart products={products} />
          </div>
          <InsightCard insight={analytics?.insight} />
        </div>

        <div className="flex items-center justify-between mb-3">
          <h2 className="font-display text-sm font-semibold text-ink uppercase tracking-wide">
            All products
          </h2>
          <span className="text-xs text-ink-soft">{products.length} total</span>
        </div>
        <ProductList
          products={products}
          loading={loading}
          error={error}
          onEdit={handleEditClick}
          onDelete={setDeleteTarget}
        />
      </div>

      <ProductForm
        isOpen={formOpen}
        onClose={() => setFormOpen(false)}
        onSubmit={handleFormSubmit}
        initialData={editingProduct}
      />

      <ConfirmDialog
        isOpen={!!deleteTarget}
        message={`Delete "${deleteTarget?.name}"? This can't be undone.`}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
}