import React, { useEffect, useState } from "react";
import axios from "axios"; //This us used to connect the frontend to the backend
import { Routes, Route, Link, useNavigate } from "react-router-dom"; // This is used to enable routing.
import Home from "./User-Components/User-pages/home"; // This is used to import the home page from the pages folder
import About from "./User-Components/User-pages/AboutUs"; // This is used to import the About us page from the pages folder
import HowToDO from "./User-Components/User-pages/HowToDO";
import ContactUs from "./User-Components/User-pages/contactUs";
import News from "./User-Components/User-pages/News";
import Services from "./User-Components/User-pages/Services";
import GamingLaptop from "./User-Components/User-pages/GamingLaptops";
import BusinesLaptops from "./User-Components/User-pages/BusinesLaptops";
import BudgetLaptos from "./User-Components/User-pages/BudgetLaptos";
import StudentLaptop from "./User-Components/User-pages/StudentsLaptops";
import Tablets from "./User-Components/User-pages/Tablets";
import TwoInOne from "./User-Components/User-pages/TwoInOne";
import Order_page from "./User-Components/User-pages/Order_page";
import OrderProductDisplay from "./User-Components/User-pages/OrderProductDisplay";
import ProductDetails from "./User-Components/User-pages/productDetails";
import Cart from "./User-Components/User-pages/Cart";
import PlaceOrder from "./User-Components/User-pages/PlaceOrder";
import SignUp from "./User-Components/User-pages/SignUp";

function App() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   // Fetch data from Node.js server
  //   axios
  //     .get("http://localhost:5000")
  //     .then((response) => {
  //       setData(response.data.message);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/HowToDO" element={<HowToDO />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/news" element={<News />} />
        <Route path="/service" element={<Services />} />
        <Route path="/gamingLaptops" element={<GamingLaptop />} />
        <Route path="/BusinessLaptops" element={<BusinesLaptops />} />
        <Route path="/BudgetLaptops" element={<BudgetLaptos />} />
        <Route path="/StudentLaptops" element={<StudentLaptop />} />
        <Route path="/Tablets" element={<Tablets />} />
        <Route path="/TwoInOne" element={<TwoInOne />} />
        <Route path="/OrderPage" element={<Order_page />} />
        <Route path="/OrderProductDisplay" element={<OrderProductDisplay />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/PlaceOrder" element={<PlaceOrder />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
