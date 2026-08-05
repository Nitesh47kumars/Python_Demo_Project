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
    <div
      className="
        min-w-[150px]
        rounded-2xl
        border border-white/20
        bg-gray-950/95
        backdrop-blur-xl
        px-4
        py-3
        shadow-2xl
      "
    >
      <div className="flex items-center gap-2 mb-2">
        <div
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: item.tier.hex }}
        />

        <p className="text-xs font-semibold text-white truncate max-w-[110px]">
          {item.name}
        </p>
      </div>

      <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">
        Product price
      </p>

      <p className="font-mono text-lg font-bold text-white">
        ₹{item.price}
      </p>
    </div>
  );
}

// Custom bar shape — logic unchanged
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
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        bg-[#111015]/90
border-white/10
shadow-[0_12px_40px_rgba(0,0,0,0.35)]
hover:shadow-[0_20px_55px_rgba(0,0,0,0.5)]
        hover:-translate-y-1
        transition-all
        duration-500
        p-5
        md:p-6
        h-80
        md:h-[360px]
      "
    >

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-56
          w-56
          rounded-full
          bg-indigo/10
          blur-3xl
          transition-transform
          duration-700
          group-hover:scale-125
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-24
          -bottom-24
          h-48
          w-48
          rounded-full
          bg-teal/5
          blur-3xl
        "
      />


      <div className="relative z-10 flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          {/* Chart icon */}
          <div
            className="
              h-10
              w-10
              rounded-2xl
              bg-gradient-to-br
              from-indigo-50
              to-violet-100
              border
              border-indigo-100
              flex
              items-center
              justify-center
              text-indigo
              shadow-sm
            "
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 3v18h18" />
              <path d="M7 16l4-5 3 3 5-7" />
            </svg>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <p
                className="
                  text-[11px]
                  font-bold
                  text-gray-900
                  uppercase
                  tracking-[0.16em]
                "
              >
                Price by Product
              </p>

              <span
                className="
                  rounded-full
                  bg-emerald-50
                  border
                  border-emerald-100
                  px-2
                  py-0.5
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-emerald-600
                "
              >
                Live
              </span>
            </div>

            <p className="text-[11px] text-gray-400 mt-1">
              Product pricing overview
            </p>
          </div>
        </div>

        {/* Small decorative menu */}
        <button
          className="
            hidden
            sm:flex
            h-8
            w-8
            items-center
            justify-center
            rounded-xl
            bg-gray-50
            border
            border-gray-100
            text-gray-400
            hover:bg-gray-100
            hover:text-gray-700
            transition-all
          "
        >
          ···
        </button>
      </div>


      <div
        className="
          relative
          z-10
          flex
          flex-wrap
          items-center
          gap-2
          mb-2
        "
      >
        <div
          className="
            flex
            items-center
            gap-1.5
            rounded-full
            bg-gray-50
            border
            border-gray-100
            px-2.5
            py-1
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-teal" />
          <span className="text-[10px] font-medium text-gray-500">
            Budget
          </span>
        </div>

        <div
          className="
            flex
            items-center
            gap-1.5
            rounded-full
            bg-gray-50
            border
            border-gray-100
            px-2.5
            py-1
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-indigo" />
          <span className="text-[10px] font-medium text-gray-500">
            Mid
          </span>
        </div>

        <div
          className="
            flex
            items-center
            gap-1.5
            rounded-full
            bg-gray-50
            border
            border-gray-100
            px-2.5
            py-1
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-coral" />
          <span className="text-[10px] font-medium text-gray-500">
            Premium
          </span>
        </div>
      </div>


      <div className="relative z-10 h-[205px] md:h-[225px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{
              top: 15,
              right: 8,
              left: -20,
              bottom: 0,
            }}
            barCategoryGap="22%"
          >
            <CartesianGrid
  strokeDasharray="4 5"
  stroke="#2A2738"
  vertical={false}
/>

<XAxis
  dataKey="name"
  tick={{
    fontSize: 10,
    fill: "#A7A3B8",
  }}
  axisLine={{
    stroke: "#2A2738",
  }}
  tickLine={false}
  tickMargin={8}
/>

<YAxis
  tick={{
    fontSize: 10,
    fill: "#777287",
  }}
  axisLine={false}
  tickLine={false}
  tickMargin={6}
/>

<Tooltip
  content={<CustomTooltip />}
  cursor={{
    fill: "#FFFFFF08",
    radius: 8,
  }}
/>

            <Bar
              dataKey="price"
              shape={ColoredBar}
              maxBarSize={48}
              isAnimationActive
              animationDuration={900}
              animationEasing="ease-out"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>


      <div
        className="
          absolute
          bottom-0
          left-5
          right-5
          h-px
          bg-gradient-to-r
          from-transparent
          via-gray-100
          to-transparent
        "
      />

      <div
        className="
          absolute
          bottom-2
          left-6
          right-6
          flex
          items-center
          justify-between
          pointer-events-none
        "
      >
        <span className="text-[9px] uppercase tracking-widest text-gray-300">
          Inventory Analytics
        </span>

        <span className="flex items-center gap-1.5 text-[9px] text-gray-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Updated
        </span>
      </div>
    </div>
  );
}