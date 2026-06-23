import { useState } from "react";
import styles from "./DriversManagement.module.css";

const DRIVERS = [
  { id: "DRV-001", name: "Omar Hassan",   phone: "+20 100 111 2222", zone: "Zamalek",    vehicle: "Motorcycle", status: "Online",  orders: 142, rating: 4.8 },
  { id: "DRV-002", name: "Karim Saleh",   phone: "+20 101 333 4444", zone: "Maadi",      vehicle: "Car",        status: "Busy",    orders: 98,  rating: 4.6 },
  { id: "DRV-003", name: "Youssef Nader", phone: "+20 102 555 6666", zone: "Nasr City",  vehicle: "Bicycle",    status: "Offline", orders: 67,  rating: 4.4 },
  { id: "DRV-004", name: "Ahmed Walid",   phone: "+20 103 777 8888", zone: "6th October", vehicle: "Scooter",   status: "Online",  orders: 205, rating: 4.9 },
  { id: "DRV-005", name: "Hassan Magdi",  phone: "+20 104 999 0000", zone: "Sidi Gaber", vehicle: "Motorcycle", status: "Online",  orders: 88,  rating: 4.5 },
];

const statusColor = {
  Online:  { bg: "#EAFBF0", color: "#1A7A45" },
  Busy:    { bg: "#FFF4E5", color: "#B85C00" },
  Offline: { bg: "#F5F4F1", color: "#666" },
};

export default function DriversManagement() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = DRIVERS.filter(d =>
    (filter === "All" || d.status === filter) &&
    (d.name.toLowerCase().includes(search.toLowerCase()) || d.id.includes(search))
  );

  return (
    <div>
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Drivers Management</h1>
          <p className={styles.pageSubtitle}>{DRIVERS.length} registered drivers · {DRIVERS.filter(d => d.status === "Online").length} online now</p>
        </div>
      </div>

      {/* Filters */}
      <div className={styles.filterBar}>
        <input
          placeholder="Search by name or ID…"
          value={search} onChange={e => setSearch(e.target.value)}
          className={styles.searchInput}
        />
        <div className={styles.statusFilters}>
          {["All", "Online", "Busy", "Offline"].map(s => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`${styles.statusFilterBtn} ${filter === s ? styles.active : ""}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tableHeader}>
              {["Driver", "ID", "Zone", "Vehicle", "Orders", "Rating", "Status", "Actions"].map(h => (
                <th key={h} className={styles.tableHeaderCell}>{h}</th>
              ))}
             </tr>
          </thead>
          <tbody>
            {filtered.map(d => {
              const s = statusColor[d.status];
              return (
                <tr key={d.id} className={styles.tableRow}>
                  <td className={styles.tableCell}>
                    <div className={styles.driverInfo}>
                      <div className={styles.avatar}>
                        {d.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <div className={styles.driverName}>{d.name}</div>
                        <div className={styles.driverPhone}>{d.phone}</div>
                      </div>
                    </div>
                  </td>
                  <td className={styles.tableCellId}>{d.id}</td>
                  <td className={styles.tableCellText}>{d.zone}</td>
                  <td className={styles.tableCellText}>{d.vehicle}</td>
                  <td className={styles.tableCellNumber}>{d.orders}</td>
                  <td className={styles.tableCellRating}>⭐ {d.rating}</td>
                  <td className={styles.tableCell}>
                    <span className={styles.statusBadge} style={{ background: s.bg, color: s.color }}>{d.status}</span>
                  </td>
                  <td className={styles.tableCell}>
                    <div className={styles.actionButtons}>
                      <button className={styles.actionBtn} onClick={() => setSelected(d)}>View</button>
                      <button className={styles.actionBtnDanger}>Suspend</button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Driver Detail Modal */}
      {selected && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Driver Profile</h2>
              <button onClick={() => setSelected(null)} className={styles.modalClose}>×</button>
            </div>
            <div className={styles.modalProfile}>
              <div className={styles.modalAvatar}>
                {selected.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <div className={styles.modalName}>{selected.name}</div>
                <div className={styles.modalId}>{selected.id}</div>
              </div>
            </div>
            {[["Phone", selected.phone], ["Zone", selected.zone], ["Vehicle", selected.vehicle], ["Total Orders", selected.orders], ["Rating", `⭐ ${selected.rating}`], ["Status", selected.status]].map(([k, v]) => (
              <div key={k} className={styles.modalRow}>
                <span className={styles.modalRowLabel}>{k}</span>
                <span className={styles.modalRowValue}>{v}</span>
              </div>
            ))}
            <div className={styles.modalActions}>
              <button className={styles.modalBtnPrimary}>Edit Driver</button>
              <button onClick={() => setSelected(null)} className={styles.modalBtnSecondary}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}