import StatsCards from "./StatsCards";
import RevenueChart from "./RevenueChart";
import OrdersChart from "./OrdersChart";
import RecentTransactions from "./RecentTransactions";
import styles from "./Overview.module.css";

export default function Overview() {
  return (
    <div>
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Overview Dashboard</h1>
          <p className={styles.pageSubtitle}>Real-time performance metrics and system health.</p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.btnSecondary}>📅 Last 30 Days</button>
          <button className={styles.btnPrimary}>⬆ Export Report</button>
        </div>
      </div>

      <StatsCards />

      <div className={styles.chartGrid}>
        <RevenueChart />
        <OrdersChart />
      </div>

      <RecentTransactions />
    </div>
  );
}