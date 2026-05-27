import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const ATSChart = ({ score }) => {
  const data = [
    { name: "Score", value: score },
    { name: "Remaining", value: 100 - score },
  ];

  const COLORS = ["#22c55e", "#374151"];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          innerRadius={70}
          outerRadius={90}
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>

        {/* ✅ CENTER TEXT */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-green-400 text-xl font-bold"
        >
          {score}%
        </text>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ATSChart;