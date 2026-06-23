import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import styles from "./RevenueChart.module.css";

const data = [
  { date: "Oct 01", orders: 720,  revenue: 16200 },
  { date: "Oct 08", orders: 850,  revenue: 19100 },
  { date: "Oct 15", orders: 940,  revenue: 21300 },
  { date: "Oct 22", orders: 1080, revenue: 24400 },
  { date: "Oct 30", orders: 1240, revenue: 28000 },
];

export default function RevenueChart() {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Daily Orders & Revenue</h3>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#F0EDE6" />
          <XAxis dataKey="date" tick={{ fontSize: 12, fill: "#888" }} />
          <YAxis tick={{ fontSize: 12, fill: "#888" }} />
          <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #ECEAE4", fontSize: 13 }} />
          <Legend wrapperStyle={{ fontSize: 13 }} />
          <Line type="monotone" dataKey="orders"  stroke="#C8441A" strokeWidth={2} dot={false} name="Orders" />
          <Line type="monotone" dataKey="revenue" stroke="#888"    strokeWidth={2} dot={false} name="Revenue" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}