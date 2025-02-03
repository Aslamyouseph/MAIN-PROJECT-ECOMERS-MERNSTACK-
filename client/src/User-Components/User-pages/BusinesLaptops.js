import React from "react";
import Footer from "../../User-Components/Home/footer/footer";
import NavBar from "../../User-Components/Home/NavigationBar/navBar";
import SearchBar from "../../User-Components/Home/SearchBar/searchBar";
import BusinesLaptops from "../../User-Components/BusinesLaptops/BusinesLaptops";
function BusinesLaptop() {
  return (
    <div>
      <NavBar /> {/*This is used to import the navigation bar  */}
      <SearchBar /> {/*This is used to import the Search bar  */}{" "}
      {/*This is used to import the BusinesLaptops laptopes page*/}
      <BusinesLaptops />
      <Footer /> {/*This is used to import the Footer   */}
    </div>
  );
}

export default BusinesLaptop;
