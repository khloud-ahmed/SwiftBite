import Navbar from "../../component/Navbar/navbar";
import Hero from "../../component/Hero/Hero ";
import Categories from "../../component/Catigories/Categories";
import ProductList from "../../component/ProductList/ProductList";
import Cart from "../../component/Cart/Cart";

import styles from "./RestaurantDetails.module.css";

function RestaurantDetails() {
  return (
    <>

      <Navbar
        links={[
          { name: "Browse", path: "/" },
          { name: "Offers", path: "/offers" },
          { name: "Support", path: "/support" },
        ]}
        activeLink="Browse"
        showSearch={false}
        showLocation={false}
        showSignIn={false}
        showCart={true}
        cartCount={2}
      />

      <Hero />

      <section className={`container-fluid ${styles.menuSection}`}>

        <div className="row g-4">

          {/* Categories */}

          <div className="col-xl-2 col-lg-3">

            <Categories />

          </div>

          {/* Products */}

          <div className="col-xl-7 col-lg-6">

            <ProductList />

          </div>

          {/* Cart */}

          <div className="col-xl-3 col-lg-3">

            <Cart />

          </div>

        </div>

      </section>

    </>
  );
}

export default RestaurantDetails;