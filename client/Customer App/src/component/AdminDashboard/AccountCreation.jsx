import { useState } from "react";
import styles from "./AccountCreation.module.css";

const ROLES = ["Driver", "Restaurant Admin", "Customer"];

export default function AccountCreation() {
  const [role, setRole] = useState("Driver");
  const [form, setForm] = useState({
    fullName: "", email: "", phone: "", password: "",
    vehicleType: "", licenseNumber: "", zone: "",
    restaurantName: "", cuisine: "", address: "", commission: "15"
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (k, v) => 
    setForm(f => 
      ({ ...f, [k]: v

       }));
       

  const handleSubmit = (e) => {
    e.preventDefault();
    //appear succes massege
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const resetForm = () => {
    setForm({
      fullName: "", email: "", phone: "", password: "",
      vehicleType: "", licenseNumber: "", zone: "",
      restaurantName: "", cuisine: "", address: "", commission: "15"
    });
    setRole("Driver");
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Create New Account</h1>
        <p className={styles.subtitle}>Add a new driver, restaurant, or customer to the platform.</p>
      </div>

      {submitted && (
        <div className={styles.successAlert}>
          ✓ Account created successfully! Credentials sent to {form.email}
        </div>
      )}

      <div className={styles.layout}>
        {/* Role selector */}
        <div className={styles.roleCard}>
          <p className={styles.sectionLabel}>Account Type</p>
       // for each role button
          {ROLES.map(r => (
            <button
              key={r}
              onClick={() => setRole(r)}
              
              className={`${styles.roleBtn}
               ${role === r ? styles.active : ""}`}
            >
              {r === "Driver" ? "🚗" : r === "Restaurant Admin" ? "🍽️" : "👤"} {r}
            </button>
          ))}

          <div className={styles.roleInfo}>
            <p>
              {role === "Driver" && "Drivers can receive and manage delivery orders within their assigned zone."}
              {role === "Restaurant Admin" && "Restaurant admins can manage menus, view orders, and update availability."}
              {role === "Customer" && "Customers can browse restaurants, place orders, and track deliveries."}
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Basic Information</h2>

            <div className={styles.grid2}>
              <Field label="Full Name" value={form.fullName} onChange={v => set("fullName", v)} placeholder="John Doe" required />
              <Field label="Email Address" type="email" value={form.email} onChange={v => set("email", v)} placeholder="john@example.com" required />
              <Field label="Phone Number" value={form.phone} onChange={v => set("phone", v)} placeholder="+20 100 000 0000" />
              <Field label="Temporary Password" type="password" value={form.password} onChange={v => set("password", v)} placeholder="Min 8 characters" required />
            </div>

            {/* Driver fields */}
            {role === "Driver" && (
              <>
                <Divider label="Driver Details" />
                <div className={styles.grid3}>
                  <div>
                    <label className={styles.label}>Vehicle Type</label>
                    <select value={form.vehicleType} onChange={e => set("vehicleType", e.target.value)} className={styles.select}>
                      <option value="">Select…</option>
                      <option>Motorcycle</option>
                      <option>Car</option>
                      <option>Bicycle</option>
                      <option>Electric Scooter</option>
                    </select>
                  </div>
                  <Field label="License Number" value={form.licenseNumber} onChange={v => set("licenseNumber", v)} placeholder="e.g. LIC-2024-XYZ" />
                  <div>
                    <label className={styles.label}>Delivery Zone</label>
                    <select value={form.zone} onChange={e => set("zone", e.target.value)} className={styles.select}>
                      <option value="">Select zone…</option>
                      <option>Cairo - Zamalek</option>
                      <option>Cairo - Maadi</option>
                      <option>Cairo - Nasr City</option>
                      <option>Giza - 6th October</option>
                      <option>Alexandria - Sidi Gaber</option>
                    </select>
                  </div>
                </div>
              </>
            )}

            {/* Restaurant fields */}
            {role === "Restaurant Admin" && (
              <>
                <Divider label="Restaurant Details" />
                <div className={styles.grid2}>
                  <Field label="Restaurant Name" value={form.restaurantName} onChange={v => set("restaurantName", v)} placeholder="e.g. Luigi's Italian" required />
                  <div>
                    <label className={styles.label}>Cuisine Type</label>
                    <select value={form.cuisine} onChange={e => set("cuisine", e.target.value)} className={styles.select}>
                      <option value="">Select…</option>
                      <option>Italian</option><option>Japanese</option><option>Egyptian</option>
                      <option>Mexican</option><option>American</option><option>Chinese</option>
                      <option>Indian</option><option>Lebanese</option>
                    </select>
                  </div>
                  <Field label="Restaurant Address" value={form.address} onChange={v => set("address", v)} placeholder="Full address" />
                  <div>
                    <label className={styles.label}>Platform Commission (%)</label>
                    <input type="number" min="5" max="30" value={form.commission} onChange={e => set("commission", e.target.value)} className={styles.input} />
                    <p className={styles.commissionNote}>Standard is 15%. Range: 5–30%</p>
                  </div>
                </div>
              </>
            )}

            <div className={styles.actions}>
              <button type="submit" className={styles.btnPrimary}>
                Create {role} Account
              </button>
              <button type="button" onClick={resetForm} className={styles.btnSecondary}>
                Reset Form
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, type = "text", required }) {
  return (
    <div>
      <label className={styles.label}>{label}{required && <span className={styles.required}> *</span>}</label>
      <input
        type={type} value={value} onChange={e => onChange(e.target.value)}
        placeholder={placeholder} className={styles.input}
      />
    </div>
  );
}

function Divider({ label }) {
  return (
    <div className={styles.divider}>
      <span className={styles.dividerLabel}>{label}</span>
      <div className={styles.dividerLine} />
    </div>
  );
}