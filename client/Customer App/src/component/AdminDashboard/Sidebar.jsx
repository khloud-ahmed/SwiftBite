import styles from "./Sidebar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChartPie,        // Dashboard
  faUsers,            // Users
  faCar,              // Drivers
  faUtensils,         // Restaurants
  faPlusCircle,       // Create Account
  faChartLine,        // Analytics
  faPizzaSlice,       // Logo
  faSignOutAlt        // Logout
} from '@fortawesome/free-solid-svg-icons';

const NAV = [
  { id: "overview",    icon: faChartPie, label: "Dashboard" },
  { id: "users",       icon: faUsers, label: "Users" },
  { id: "drivers",     icon: faCar, label: "Drivers" },
  { id: "restaurants", icon: faUtensils, label: "Restaurants" },
  { id: "create",      icon: faPlusCircle, label: "Create Account" },
  { id: "analytics",   icon: faChartLine, label: "Analytics" },
];

export default function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <div className={styles.logoIcon}>
          <FontAwesomeIcon icon={faPizzaSlice} />
        </div>
        <div>
          <div className={styles.logoText}>SwiftBite</div>
          <div className={styles.logoSubtext}>Admin Panel</div>
        </div>
      </div>

      <nav className={styles.nav}>
        {NAV.map(({ id, icon, label }) => (
          <button
            key={id}
            onClick={() => setActivePage(id)}
            className={`${styles.navItem} ${activePage === id ? styles.active : ""}`}
          >
            <span className={styles.navIcon}>
              <FontAwesomeIcon icon={icon} />
            </span>
            {label}
          </button>
        ))}
      </nav>

      <div className={styles.userSection}>
        <div className={styles.userProfile}>
          <div className={styles.userAvatar}>AT</div>
          <div>
            <div className={styles.userName}>Alex Thompson</div>
            <div className={styles.userRole}>Super Admin</div>
          </div>
        </div>
        <button className={styles.logoutBtn}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}