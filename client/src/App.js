import React, { useEffect, useState } from "react";
import axios from "axios"; //This us used to connect the frontend to the backend
import { Routes, Route, Link, useNavigate } from "react-router-dom"; // This is used to enable routing.
import Home from "./User-Components/User-pages/home"; // This is used to import the home page from the pages folder
import About from "./User-Components/User-pages/AboutUs"; // This is used to import the About us page from the pages folder

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
      </Routes>
    </div>
  );
}

export default App;
