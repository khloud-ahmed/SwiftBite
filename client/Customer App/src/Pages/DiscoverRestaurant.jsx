import Cover from "../component/DiscoverRestaurant/Cover";
// import Navbar from"../component/Navbar/navbar";
import Catigory  from "../component/DiscoverRestaurant/catigory";
import AddProduct from "../component/resDashboard/addProduct"
function DiscoverRestaurant() {
  return (
    <>
      {/* <Navbar
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
      /> */}
      <Cover />
      <Catigory/>
      <AddProduct/>

    </>
  );
}   
export default DiscoverRestaurant;