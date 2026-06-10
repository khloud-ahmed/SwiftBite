import style from "../Navbar/navbar.module.css";
import { useState } from "react";

function Navbar() {
  const [search, setSearch] = useState("");

  return (
    <nav className={style.navbar}>
      {/* Logo */}
      <div className={style.logo}>
        <h1>SwiftBite</h1>
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
          <a href="/">Browse</a>
        </li>

        <li>
          <a href="/">Offers</a>
        </li>

        <li>
          <a href="/">Support</a>
        </li>
      </ul>

      {/* Right Side */}
      <div className={style.actions}>
        <button className={style.locationBtn}>
          New York, NY
        </button>

        <div className={style.cart}>
          Cart
          <span className={style.badge}>3</span>
        </div>

        <button className={style.signBtn}>
          Sign In
        </button>
      </div>
    </nav>
  );
}

export default Navbar;