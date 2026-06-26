import styles from "./Navbar.module.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaMapMarkerAlt, FaUserCircle } from "react-icons/fa";

function Navbar({
  links = [],
  activeLink = "",
  showSearch = true,
  showLocation = true,
  showSignIn = true,
  showCart = true,
  cartCount = 0,
}) {
  const [search, setSearch] = useState("");

  return (
    <nav className={`${styles.navbar} navbar navbar-expand-lg bg-white`}>

      {/* Logo */}

      <Link to="/" className={styles.logo}>
        SwiftBite
      </Link>

      {/* Links */}

      <ul className={styles.navList}>
        {links.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={
                activeLink === item.name
                  ? styles.active
                  : styles.link
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Search */}

      {showSearch && (
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search restaurants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.searchInput}
          />
        </div>
      )}

      {/* Right */}

      <div className={styles.actions}>

        {showLocation && (
          <button className={styles.locationBtn}>
            <FaMapMarkerAlt />
            New York
          </button>
        )}

        {showCart && (
          <Link to="/cart" className={styles.cart}>
            <FaShoppingCart />

            {cartCount > 0 && (
              <span className={styles.badge}>
                {cartCount}
              </span>
            )}
          </Link>
        )}

        {showSignIn ? (
          <Link to="/login" className={styles.signBtn}>
            Sign In
          </Link>
        ) : (
          <FaUserCircle className={styles.profileIcon} />
        )}

      </div>

    </nav>
  );
}

export default Navbar;