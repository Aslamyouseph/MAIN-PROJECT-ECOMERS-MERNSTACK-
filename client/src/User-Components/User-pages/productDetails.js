import React from "react";
import Footer from "../../User-Components/Home/footer/footer";
import NavBar from "../../User-Components/Home/NavigationBar/navBar";
import SearchBar from "../../User-Components/Home/SearchBar/searchBar";
import ProductDetails from "../../User-Components/ProductDetails/productDetails";
function ProductDetail() {
  return (
    <div>
      <NavBar /> {/*This is used to import the navigation bar  */}
      <SearchBar /> {/*This is used to import the Search bar  */}
      <ProductDetails /> {/*This is used to import the productDetails page  */}
      <Footer /> {/*This is used to import the Footer   */}
    </div>
  );
}

export default ProductDetail;
