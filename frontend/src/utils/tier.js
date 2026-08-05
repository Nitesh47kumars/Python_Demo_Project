export const tierStyles = {
  low: "bg-green-50 text-green-700 border-green-200",
  medium: "bg-yellow-50 text-yellow-700 border-yellow-200",
  high: "bg-red-50 text-red-700 border-red-200",
};

export function getTier(price) {
  if (price < 10000) {
    return {
      label: "Budget",
      hex: "#22C99A",
    };
  }

  if (price < 50000) {
    return {
      label: "Standard",
      hex: "#756BFF",
    };
  }

  return {
    label: "Premium",
    hex: "#FF7466",
  };
}
