import React from "react";
import Footer from "../../User-Components/Home/footer/footer";
import NavBar from "../../User-Components/Home/NavigationBar/navBar";
import SearchBar from "../../User-Components/Home/SearchBar/searchBar";
import About from "../AboutUs/AboutUs";

function AboutUs() {
  return (
    <div>
      <NavBar /> {/*This is used to import the navigation bar  */}
      <SearchBar /> {/*This is used to import the Search bar  */}
      <About /> {/* This is used to import the Mission_Vission page */}
      <Footer /> {/*This is used to import the Footer   */}
    </div>
  );
}

export default AboutUs;
