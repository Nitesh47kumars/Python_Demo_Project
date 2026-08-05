import ProductItem from "./ProductItem";

export default function ProductList({ products, loading, error, onEdit, onDelete }) {
  if (loading) {
    return <p className="text-sm text-gray-500 py-6 text-center">Loading products...</p>;
  }

  if (error) {
    return (
      <p className="text-sm text-red-600 py-6 text-center">
        Unable to load products. Please try again.
      </p>
    );
  }

  if (products.length === 0) {
    return (
      <p className="text-sm text-gray-500 py-6 text-center">
        No products yet. Click "+ Add Product" to create one.
      </p>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}