import "./Chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="#5550bd"
            animationBegin={0}
            animationDuration={1800}
            animationEasing="ease-in-out"
          />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}


// import { ResponsiveContainer } from "recharts";

// export default function Chart() {
//   return (
//     <ResponsiveContainer width="100%" aspect={4}>
//       <div>Hello</div>
//     </ResponsiveContainer>
//   );
// }