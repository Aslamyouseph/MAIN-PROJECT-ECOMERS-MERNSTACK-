import React from "react";
import Footer from "../User-Components/footer/footer";
import NavBar from "../User-Components/NavigationBar/navBar";
import SearchBar from "../User-Components/SearchBar/searchBar";

function home() {
  return (
    <div>
      <NavBar /> {/*This is used to import the navigation bar  */}
      <SearchBar /> {/*This is used to import the Search bar  */}
      <Footer /> {/*This is used to import the Footer   */}
    </div>
  );
}

export default home;
