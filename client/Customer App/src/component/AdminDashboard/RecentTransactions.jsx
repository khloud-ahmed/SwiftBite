import styles from "./RecentTransactions.module.css";

const txns = [
  { id: "SB-9921", restaurant: "Luigi's Italian",  customer: "Sarah Jenkins",  time: "2 mins ago",  amount: "$42.50", status: "COMPLETED",  emoji: "🍕" },
  { id: "SB-9920", restaurant: "The Burger Lab",   customer: "Michael Ross",   time: "8 mins ago",  amount: "$28.90", status: "IN TRANSIT", emoji: "🍔" },
  { id: "SB-9919", restaurant: "Sushi Zen",        customer: "Emma Watson",    time: "15 mins ago", amount: "$65.00", status: "PENDING",    emoji: "🍣" },
  { id: "SB-9918", restaurant: "Taco Fiesta",      customer: "James Liu",      time: "22 mins ago", amount: "$19.75", status: "COMPLETED",  emoji: "🌮" },
];

const statusColor = {
  "COMPLETED":  { bg: "#EAFBF0", color: "#1A7A45" },
  "IN TRANSIT": { bg: "#FFF4E5", color: "#B85C00" },
  "PENDING":    { bg: "#F5F4F1", color: "#666" },
};

export default function RecentTransactions() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Recent Transaction Activity</h3>
        <button className={styles.viewAllBtn}>View All Activity</button>
      </div>
      {txns.map(({ id, restaurant, customer, time, amount, status, emoji }) => {
        const s = statusColor[status];
        return (
          <div key={id} className={styles.transaction}>
            <span className={styles.emoji}>{emoji}</span>
            <div className={styles.details}>
              <div className={styles.orderInfo}>Order #{id} from '{restaurant}'</div>
              <div className={styles.orderMeta}>Customer: {customer} • {time}</div>
            </div>
            <div className={styles.right}>
              <div className={styles.amount}>{amount}</div>
              <span className={styles.statusBadge} style={{ background: s.bg, color: s.color }}>
                {status}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}