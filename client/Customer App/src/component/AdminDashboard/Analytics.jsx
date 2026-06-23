import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from "recharts";
import styles from "./Analytics.module.css";

const weekly = [
  { day: "Mon", orders: 340, revenue: 7650 },
  { day: "Tue", orders: 420, revenue: 9450 },
  { day: "Wed", orders: 380, revenue: 8550 },
  { day: "Thu", orders: 510, revenue: 11475 },
  { day: "Fri", orders: 680, revenue: 15300 },
  { day: "Sat", orders: 790, revenue: 17775 },
  { day: "Sun", orders: 620, revenue: 13950 },
];

const monthly = [
  { month: "Jul", active: 98000, new: 3200 },
  { month: "Aug", active: 103000, new: 4100 },
  { month: "Sep", active: 109000, new: 3800 },
  { month: "Oct", active: 115024, new: 5200 },
];

export default function Analytics() {
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Analytics</h1>
        <p className={styles.subtitle}>Performance trends and platform insights.</p>
      </div>

      <div className={styles.chartGrid}>
        {/* Weekly Orders Bar Chart */}
        <div className={styles.chartCard}>
          <h3 className={styles.chartTitle}>Weekly Orders</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={weekly}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F0EDE6" vertical={false} />
              <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#888" }} />
              <YAxis tick={{ fontSize: 12, fill: "#888" }} />
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #ECEAE4", fontSize: 13 }} />
              <Bar dataKey="orders" fill="#C8441A" radius={[4, 4, 0, 0]} name="Orders" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Weekly Revenue Line */}
        <div className={styles.chartCard}>
          <h3 className={styles.chartTitle}>Weekly Revenue ($)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={weekly}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F0EDE6" />
              <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#888" }} />
              <YAxis tick={{ fontSize: 12, fill: "#888" }} />
              <Tooltip formatter={v => `$${v.toLocaleString()}`} contentStyle={{ borderRadius: 8, border: "1px solid #ECEAE4", fontSize: 13 }} />
              <Line type="monotone" dataKey="revenue" stroke="#C8441A" strokeWidth={2.5} dot={{ fill: "#C8441A", r: 4 }} name="Revenue" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* User Growth */}
        <div className={styles.fullWidthChart}>
          <h3 className={styles.chartTitle}>User Growth (Monthly)</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={monthly}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F0EDE6" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#888" }} />
              <YAxis tick={{ fontSize: 12, fill: "#888" }} />
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #ECEAE4", fontSize: 13 }} />
              <Legend wrapperStyle={{ fontSize: 13 }} />
              <Line type="monotone" dataKey="active" stroke="#C8441A" strokeWidth={2} name="Active Users" dot={false} />
              <Line type="monotone" dataKey="new"    stroke="#888"    strokeWidth={2} name="New Signups"  dot={false} strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Summary KPIs */}
      <div className={styles.kpiGrid}>
        {[
          { label: "Avg Order Value", value: "$21.77", sub: "This month" },
          { label: "Delivery Success", value: "96.4%",  sub: "Last 30 days" },
          { label: "Peak Hour",        value: "7–9 PM", sub: "Daily average" },
          { label: "Top Cuisine",      value: "Italian", sub: "42% of orders" },
        ].map(({ label, value, sub }) => (
          <div key={label} className={styles.kpiCard}>
            <div className={styles.kpiValue}>{value}</div>
            <div className={styles.kpiLabel}>{label}</div>
            <div className={styles.kpiSub}>{sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}