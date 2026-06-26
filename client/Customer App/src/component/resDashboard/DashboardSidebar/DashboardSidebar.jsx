import styles from "./DashboardSidebar.module.css";

import {
  FaClipboardList,
  FaUtensils,
  FaCog,
  FaBolt,
} from "react-icons/fa";

function DashboardSidebar() {
  return (
    <aside className={styles.sidebar}>

      {/* Logo */}

      <div className={styles.logo}>

        <h2>SwiftBite</h2>

        <p>Kitchen Dashboard</p>

      </div>

      {/* Navigation */}

      <div className={styles.menu}>

        <button className={styles.menuItem}>
          <FaClipboardList />
          Orders
        </button>

        <button className={`${styles.menuItem} ${styles.active}`}>
          <FaUtensils />
          Menu
        </button>

        <button className={styles.menuItem}>
          <FaCog />
          Settings
        </button>

      </div>

      {/* Bottom Button */}

      <div className={styles.bottom}>

        <button className={styles.liveBtn}>
          <FaBolt />
          Go Live
        </button>

      </div>

    </aside>
  );
}

export default DashboardSidebar;