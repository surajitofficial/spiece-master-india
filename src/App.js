import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/Home/HomePage";
import MenuPage from "./components/Menu/MenuPage";
import ReservationPage from "./components/Reservation/ReservationPage";
import ContactPage from "./components/Contact/ContactPage";
import AboutUs from "./components/About/AboutUs";
import Chefs from "./components/Chef/Chefs";
import ChefRecipes from "./components/Chef/ChefReceipes";
import MenuDetails from "./components/Menu/MenuDetails";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/menu/:id" element={<MenuDetails />} />
          <Route path="/reservations" element={<ReservationPage />} />
          <Route path="/chefs" element={<Chefs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/chef/:chefId" element={<ChefRecipes />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
