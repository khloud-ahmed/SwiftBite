import { useState } from "react";
import styles from "./UsersManagement.module.css";

const USERS = [
  { id: "USR-001", name: "Sarah Jenkins",  email: "sarah@example.com",  phone: "+20 100 111 0001", role: "Customer",         orders: 34, joined: "Jan 12, 2024", status: "Active" },
  { id: "USR-002", name: "Michael Ross",   email: "michael@example.com", phone: "+20 100 111 0002", role: "Customer",         orders: 18, joined: "Feb 5, 2024",  status: "Active" },
  { id: "USR-003", name: "Emma Watson",    email: "emma@example.com",    phone: "+20 100 111 0003", role: "Customer",         orders: 56, joined: "Dec 2, 2023",  status: "Active" },
  { id: "USR-004", name: "Marco Ricci",    email: "marco@example.com",   phone: "+20 100 111 0004", role: "Restaurant Admin", orders: 0,  joined: "Nov 14, 2023", status: "Active" },
  { id: "USR-005", name: "Carlos Mendez",  email: "carlos@example.com",  phone: "+20 100 111 0005", role: "Restaurant Admin", orders: 0,  joined: "Mar 8, 2024",  status: "Suspended" },
  { id: "USR-006", name: "Omar Hassan",    email: "omar@example.com",    phone: "+20 100 111 0006", role: "Driver",           orders: 142, joined: "Oct 1, 2023", status: "Active" },
];

const roleColor = {
  Customer:          { bg: "#EEF2FF", color: "#4338CA" },
  "Restaurant Admin":{ bg: "#FFF4E5", color: "#B85C00" },
  Driver:            { bg: "#EAFBF0", color: "#1A7A45" },
};

const statusColor = {
  Active:    { bg: "#EAFBF0", color: "#1A7A45" },
  Suspended: { bg: "#FEECEC", color: "#C0321E" },
};

export default function UsersManagement() {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");

  const filtered = USERS.filter(u =>
    (roleFilter === "All" || u.role === roleFilter) &&
    (u.name.toLowerCase().includes(search.toLowerCase()) || u.email.includes(search))
  );

  return (
    <div>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Users Management</h1>
        <p className={styles.pageSubtitle}>{USERS.length} total accounts across all roles</p>
      </div>

      <div className={styles.filterBar}>
        <input
          placeholder="Search by name or email…"
          value={search} onChange={e => setSearch(e.target.value)}
          className={styles.searchInput}
        />
        <div className={styles.roleFilters}>
          {["All", "Customer", "Driver", "Restaurant Admin"].map(r => (
            <button
              key={r}
              onClick={() => setRoleFilter(r)}
              className={`${styles.roleFilterBtn} ${roleFilter === r ? styles.active : ""}`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tableHeader}>
              {["User", "Email", "Phone", "Role", "Orders", "Joined", "Status", "Actions"].map(h => (
                <th key={h} className={styles.tableHeaderCell}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map(u => {
              const r = roleColor[u.role] || { bg: "#F5F4F1", color: "#666" };
              const s = statusColor[u.status] || { bg: "#F5F4F1", color: "#666" };
              return (
                <tr key={u.id} className={styles.tableRow}>
                  <td className={styles.tableCell}>
                    <div className={styles.userInfo}>
                      <div className={styles.avatar}>
                        {u.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <div className={styles.userName}>{u.name}</div>
                        <div className={styles.userId}>{u.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className={styles.tableCellEmail}>{u.email}</td>
                  <td className={styles.tableCellPhone}>{u.phone}</td>
                  <td className={styles.tableCell}>
                    <span className={styles.roleBadge} style={{ background: r.bg, color: r.color }}>{u.role}</span>
                  </td>
                  <td className={styles.tableCellNumber}>{u.orders}</td>
                  <td className={styles.tableCellJoined}>{u.joined}</td>
                  <td className={styles.tableCell}>
                    <span className={styles.statusBadge} style={{ background: s.bg, color: s.color }}>{u.status}</span>
                  </td>
                  <td className={styles.tableCell}>
                    <div className={styles.actionButtons}>
                      <button className={styles.actionBtn}>Edit</button>
                      <button className={styles.actionBtnDanger}>
                        {u.status === "Active" ? "Suspend" : "Activate"}
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className={styles.emptyState}>
            No users found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}