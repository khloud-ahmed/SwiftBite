import { useState } from "react";
import styles from "./RestaurantsManagement.module.css";

const RESTAURANTS = [
  { id: "RST-001", name: "Luigi's Italian",    owner: "Marco Ricci",    cuisine: "Italian",  orders: 892,  revenue: "$28,400", rating: 4.7, status: "Active",   commission: 15 },
  { id: "RST-002", name: "Sushi Zen",          owner: "Yuki Tanaka",   cuisine: "Japanese", orders: 634,  revenue: "$41,200", rating: 4.9, status: "Active",   commission: 18 },
  { id: "RST-003", name: "The Burger Lab",     owner: "Sam Wilson",    cuisine: "American", orders: 1204, revenue: "$19,600", rating: 4.5, status: "Active",   commission: 12 },
  { id: "RST-004", name: "Taco Fiesta",        owner: "Carlos Mendez", cuisine: "Mexican",  orders: 445,  revenue: "$12,800", rating: 4.3, status: "Suspended", commission: 15 },
  { id: "RST-005", name: "Koshary El Tahrir",  owner: "Ahmed Naguib",  cuisine: "Egyptian", orders: 2100, revenue: "$31,500", rating: 4.8, status: "Active",   commission: 10 },
];

const statusColor = {
  Active:    { bg: "#EAFBF0", color: "#1A7A45" },
  Suspended: { bg: "#FEECEC", color: "#C0321E" },
  Pending:   { bg: "#FFF4E5", color: "#B85C00" },
};

const cuisineEmoji = {
  Italian: "🍝",
  Japanese: "🍣",
  American: "🍔",
  Mexican: "🌮",
  Egyptian: "🥙",
};

export default function RestaurantsManagement() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = RESTAURANTS.filter(r =>
    r.name.toLowerCase().includes(search.toLowerCase()) ||
    r.cuisine.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Restaurants Management</h1>
          <p className={styles.pageSubtitle}>{RESTAURANTS.length} restaurants · {RESTAURANTS.filter(r => r.status === "Active").length} active</p>
        </div>
      </div>

      <div className={styles.statsGrid}>
        {[
          { label: "Total Restaurants", value: RESTAURANTS.length, icon: "🍽️" },
          { label: "Total Orders",      value: RESTAURANTS.reduce((a, r) => a + r.orders, 0).toLocaleString(), icon: "🛒" },
          { label: "Avg Rating",        value: (RESTAURANTS.reduce((a, r) => a + r.rating, 0) / RESTAURANTS.length).toFixed(1) + " ⭐", icon: "⭐" },
        ].map(({ label, value, icon }) => (
          <div key={label} className={styles.statCard}>
            <span className={styles.statIcon}>{icon}</span>
            <div className={styles.statValue}>{value}</div>
            <div className={styles.statLabel}>{label}</div>
          </div>
        ))}
      </div>

      <div className={styles.searchBar}>
        <input
          placeholder="Search restaurants or cuisine…"
          value={search} onChange={e => setSearch(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      <div className={styles.restaurantGrid}>
        {filtered.map(r => {
          const s = statusColor[r.status];
          return (
            <div key={r.id} className={styles.restaurantCard}>
              <div className={styles.restaurantHeader}>
                <div className={styles.restaurantInfo}>
                  <span className={styles.cuisineEmoji}>{cuisineEmoji[r.cuisine] || "🍽️"}</span>
                  <div>
                    <div className={styles.restaurantName}>{r.name}</div>
                    <div className={styles.restaurantMeta}>{r.cuisine} · {r.id}</div>
                  </div>
                </div>
                <span className={styles.statusBadge} style={{ background: s.bg, color: s.color }}>{r.status}</span>
              </div>

              <div className={styles.restaurantDetails}>
                {[["Owner", r.owner], ["Orders", r.orders], ["Revenue", r.revenue], ["Commission", `${r.commission}%`], ["Rating", `⭐ ${r.rating}`]].map(([k, v]) => (
                  <div key={k} className={styles.detailItem}>
                    <div className={styles.detailLabel}>{k}</div>
                    <div className={styles.detailValue}>{v}</div>
                  </div>
                ))}
              </div>

              <div className={styles.restaurantActions}>
                <button onClick={() => setSelected(r)} className={styles.manageBtn}>Manage</button>
                <button className={`${styles.statusToggleBtn} ${r.status === "Active" ? styles.suspend : styles.activate}`}>
                  {r.status === "Active" ? "Suspend" : "Activate"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {selected && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>{selected.name}</h2>
              <button onClick={() => setSelected(null)} className={styles.modalClose}>×</button>
            </div>
            {[["Owner", selected.owner], ["Cuisine", selected.cuisine], ["Status", selected.status], ["Total Orders", selected.orders], ["Revenue", selected.revenue], ["Rating", `⭐ ${selected.rating}`], ["Commission", `${selected.commission}%`]].map(([k, v]) => (
              <div key={k} className={styles.modalRow}>
                <span className={styles.modalRowLabel}>{k}</span>
                <span className={styles.modalRowValue}>{v}</span>
              </div>
            ))}
            <div className={styles.modalCommission}>
              <label className={styles.modalLabel}>Update Commission (%)</label>
              <input type="number" defaultValue={selected.commission} min="5" max="30" className={styles.modalInput} />
            </div>
            <div className={styles.modalActions}>
              <button className={styles.modalBtnPrimary}>Save Changes</button>
              <button onClick={() => setSelected(null)} className={styles.modalBtnSecondary}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}