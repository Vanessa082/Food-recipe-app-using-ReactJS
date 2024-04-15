import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Herosection from "./Components/Herosection/Herosection";
import Favorite from "./Components/Favorite/Favorite";
import Category from "./Components/Category/Category";
import Contactus from "./Components/Contactus/Contactus";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Mealmodal from "./Components/Mealmodal/Mealmodal";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Mealmodal /> */};
          <Route path="/" element={<Herosection />} />
          <Route path="favorite" element={<Favorite />} />
        </Routes>
      </BrowserRouter>
      {/* <Herosection /> */}
      <Category />
      <Contactus />
      <Footer />
    </>
  );
}

export default App;
