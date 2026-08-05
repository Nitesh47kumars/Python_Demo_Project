import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { getTier } from "../utils/tier";

function CustomTooltip({ active, payload }) {
  if (!active || !payload || !payload.length) return null;
  const item = payload[0].payload;
  return (
    <div className="bg-ink text-white text-xs rounded-lg px-3 py-2 shadow-lg">
      <p className="font-medium mb-0.5">{item.name}</p>
      <p className="font-mono text-white/80">₹{item.price}</p>
    </div>
  );
}

// Custom bar shape — reads its color directly from the data point instead
// of relying on <Cell>, which some Recharts v3 builds don't reliably honor
// for per-item fill overrides inside a single <Bar>.
function ColoredBar(props) {
  const { x, y, width, height, payload } = props;
  const radius = 6;
  return (
    <path
      d={`M${x},${y + height}
          L${x},${y + radius}
          Q${x},${y} ${x + radius},${y}
          L${x + width - radius},${y}
          Q${x + width},${y} ${x + width},${y + radius}
          L${x + width},${y + height}
          Z`}
      fill={payload.tier.hex}
    />
  );
}

export default function ProductChart({ products }) {
  const chartData = products.map((p) => ({
    name: p.name,
    price: p.price,
    tier: getTier(p.price),
  }));

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white border border-ink/5 shadow-sm p-4 md:p-5 h-72 md:h-80">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo/5 blur-2xl" />

      <div className="flex items-center justify-between mb-2 relative">
        <p className="text-xs font-semibold text-ink-soft uppercase tracking-wide">
          Price by product
        </p>
        <div className="hidden sm:flex items-center gap-3 text-[11px] text-ink-soft">
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-teal" /> Budget
          </span>
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-indigo" /> Mid
          </span>
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-coral" /> Premium
          </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={chartData} margin={{ top: 8, right: 4, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#EFEDF8" vertical={false} />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 11, fill: "#6F6B85" }}
            axisLine={{ stroke: "#EFEDF8" }}
            tickLine={false}
          />
          <YAxis tick={{ fontSize: 11, fill: "#6F6B85" }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "#F6F5FB" }} />
          <Bar dataKey="price" shape={ColoredBar} maxBarSize={44} isAnimationActive />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}