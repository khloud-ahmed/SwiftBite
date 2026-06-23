import Cover from "../component/DiscoverRestaurant/Cover";
import Navbar from"../component/Navbar/navbar";
import Catigory  from "../component/DiscoverRestaurant/catigory";
function DiscoverRestaurant() {
  return (
    <div>
      <Navbar/>
      <Cover />
      <Catigory/>
    </div>
  );
}   
export default DiscoverRestaurant;