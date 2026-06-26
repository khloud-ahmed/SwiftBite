import Navbar from "../component/Navbar/Navbar";
import DiscoverRestaurant from "./DiscoverRestaurant";
import Footer from "../component/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar
        links={[
          { name: "Browse", path: "/" },
          { name: "Offers", path: "/offers" },
          { name: "Support", path: "/support" },
        ]}
        activeLink="Browse"
        showSearch={true}
        showLocation={true}
        showCart={true}
        showSignIn={true}
        cartCount={3}
      />

      <DiscoverRestaurant />

      <Footer />
    </>
  );
}

export default Home;