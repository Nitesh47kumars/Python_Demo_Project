export default function SummaryCards({ analytics }) {
  if (!analytics) return null;

  const cards = [
    { label: "Total Products", value: analytics.total_products },
    { label: "Inventory Value", value: `₹${analytics.total_inventory_value}` },
    { label: "Average Price", value: `₹${analytics.average_price}` },
    { label: "Highest Price", value: `₹${analytics.highest_price}` },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {cards.map((card) => (
        <div
          key={card.label}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-4"
        >
          <p className="text-xs text-gray-500 mb-1">{card.label}</p>
          <p className="text-xl font-semibold text-gray-900">{card.value}</p>
        </div>
      ))}
    </div>
  );
}