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
  <div className="min-h-screen bg-[#f5f7fa] px-4 py-6 md:px-8">
    <div className="mx-auto max-w-7xl">

      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm text-gray-400">Expense Dashboard</p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-900">
              Welcome back 👋
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Here's what's happening with your expenses.
            </p>
          </div>

          <Navbar onAddClick={handleAddClick} />
        </div>
      </div>

      {/* Summary */}
      <div className="mb-6">
        <SummaryCards analytics={analytics} />
      </div>

      {/* Analytics */}
      <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-3">

        {/* Chart */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Spending Overview
              </h2>
              <p className="mt-1 text-xs text-gray-400">
                Track your spending activity
              </p>
            </div>

            <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-500 hover:bg-gray-50">
              This Month ▾
            </button>
          </div>

          <ProductChart products={products} />
        </div>

        {/* Insight */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Smart Insight
              </h2>
              <p className="mt-1 text-xs text-gray-400">
                Based on your spending
              </p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-900 text-sm text-white">
              ✦
            </div>
          </div>

          <InsightCard insight={analytics?.insight} />
        </div>
      </div>

      {/* Products */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

        {/* Section Header */}
        <div className="border-b border-gray-100 p-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                All Products
              </h2>
              <p className="mt-1 text-xs text-gray-400">
                Manage and track all your products
              </p>
            </div>

            <div className="flex gap-2">
              <button className="rounded-lg border border-gray-200 px-4 py-2 text-xs font-medium text-gray-500 hover:bg-gray-50">
                Search
              </button>

              <button className="rounded-lg border border-gray-200 px-4 py-2 text-xs font-medium text-gray-500 hover:bg-gray-50">
                Filter ▾
              </button>
            </div>

          </div>
        </div>

        {/* Product List */}
        <div className="p-2 md:p-4">
          <ProductList
            products={products}
            loading={loading}
            error={error}
            onEdit={handleEditClick}
            onDelete={setDeleteTarget}
          />
        </div>
      </div>

      {/* Modals */}
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
  </div>
)
}