import style from "../Navbar/navbar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [search, setSearch] = useState("");

  return (
    <nav className={style.navbar}>
      {/* Logo */}
      <div className={style.logo}>
        <Link to="/">
          <h1>SwiftBite</h1>
        </Link>
      </div>

      {/* Search */}
      <div className={style.searchContainer}>
        <input
          type="text"
          placeholder="Search for restaurants, cuisines..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={style.searchInput}
        />
      </div>

      {/* Navigation Links */}
      <ul className={style.navList}>
        <li className={style.active}>
          <Link to="/">Browse</Link>
        </li>

        <li>
          <Link to="/offers">Offers</Link>
        </li>

        <li>
          <Link to="/support">Support</Link>
        </li>
      </ul>

      {/* Right Side */}
      <div className={style.actions}>
        <Link to="/location" className={style.locationBtn}>
          New York, NY
        </Link>

        <Link to="/cart" className={style.cart}>
          Cart
          <span className={style.badge}>3</span>
        </Link>

        <Link to="/login" className={style.signBtn}>
          Sign In
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;