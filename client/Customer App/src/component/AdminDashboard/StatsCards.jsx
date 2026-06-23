import styles from "./StatsCards.module.css";

const cards = [
  { label: "Total Orders",   value: "24,892", change: "+12.5%", up: true,  icon: "🛒" },
  { label: "Total Revenue",  value: "$542,190", change: "+8.2%", up: true, icon: "💰" },
  { label: "Active Users",   value: "115,024", change: "Stable", up: null, icon: "👥" },
  { label: "Active Drivers", value: "3,812",   change: "-2.1%", up: false, icon: "🚗" },
];

export default function StatsCards() {
  return (
    <div className={styles.grid}>
      {cards.map(({ label, value, change, up, icon }) => (
        <div key={label} className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.icon}>{icon}</span>
            <span className={`${styles.change} ${up === true ? styles.positive : up === false ? styles.negative : styles.neutral}`}>
              {change}
            </span>
          </div>
          <div className={styles.value}>{value}</div>
          <div className={styles.label}>{label}</div>
        </div>
      ))}
    </div>
  );
}