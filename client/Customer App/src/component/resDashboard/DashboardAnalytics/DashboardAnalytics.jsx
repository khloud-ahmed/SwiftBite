import styles from "./DashboardAnalytics.module.css";

function DashboardAnalytics() {
  return (
    <div>

      {/* Today's Sales */}

      <div className={styles.card}>

        <h5 className={styles.title}>Today's Sales</h5>

        <h2 className={styles.amount}>$2,847</h2>

        <p className={styles.increase}>↑ 12.5% from yesterday</p>

      </div>

      {/* Menu Health */}

      <div className={styles.card}>

        <h5 className={styles.title}>Menu Health</h5>

        <p className={styles.label}>
          Available Items
        </p>

        <div className="progress mb-3">

          <div
            className="progress-bar bg-success"
            style={{ width: "82%" }}
          >
            82%
          </div>

        </div>

        <p className={styles.label}>
          Low Stock
        </p>

        <div className="progress mb-3">

          <div
            className="progress-bar bg-warning"
            style={{ width: "15%" }}
          >
            15%
          </div>

        </div>

        <p className={styles.label}>
          Out Of Stock
        </p>

        <div className="progress">

          <div
            className="progress-bar bg-danger"
            style={{ width: "3%" }}
          >
            3%
          </div>

        </div>

      </div>

    </div>
  );
}

export default DashboardAnalytics;