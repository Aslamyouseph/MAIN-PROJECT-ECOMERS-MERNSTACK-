import React from "react";
import Footer from "../User-Components/footer/footer";
import NavBar from "../User-Components/NavigationBar/navBar";
import SearchBar from "../User-Components/SearchBar/searchBar";
import ImageSlider from "../User-Components/ImageSlider/imageSlider";
import Top_Laptop from "../User-Components/Top_Laptop/laptopListing";
import LaptopCategory from "../User-Components/laptopsCategory/laptopCategory";
function home() {
  return (
    <div>
      <NavBar /> {/*This is used to import the navigation bar  */}
      <SearchBar /> {/*This is used to import the Search bar  */}
      <ImageSlider /> {/*This is used to import the Image slider   */}
      <LaptopCategory /> {/* This id used to import the Laptop category */}
      <Top_Laptop /> {/*This is used to import the Body */}
      <Footer /> {/*This is used to import the Footer   */}
    </div>
  );
}

export default home;
