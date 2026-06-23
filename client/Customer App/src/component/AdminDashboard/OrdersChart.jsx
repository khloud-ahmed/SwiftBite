import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import styles from "./OrdersChart.module.css";

const data = [
  { name: "Italian",  value: 42, color: "#C8441A" },
  { name: "Japanese", value: 28, color: "#555" },
  { name: "Mexican",  value: 18, color: "#D4A574" },
  { name: "Other",    value: 12, color: "#E8E4DC" },
];

export default function OrdersChart() {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Orders by Cuisine</h3>
      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Pie data={data} innerRadius={55} outerRadius={80} dataKey="value" paddingAngle={2}>
            {data.map((entry, i) => <Cell key={i} fill={entry.color} />)}
          </Pie>
          <Tooltip formatter={(v) => `${v}%`} />
        </PieChart>
      </ResponsiveContainer>
      <div className={styles.legend}>
        {data.map(({ name, value, color }) => (
          <div key={name} className={styles.legendItem}>
            <div className={styles.legendDot} style={{ background: color }} />
            <span className={styles.legendLabel}>{name}</span>
            <span className={styles.legendValue}>{value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}