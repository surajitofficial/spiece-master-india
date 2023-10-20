import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import MenuPage from "./components/MenuPage";
import ReservationPage from "./components/ReservationPage";
import ContactPage from "./components/ContactPage";
import AboutUs from "./components/AboutUs";
import Chefs from "./components/Chefs";
import ChefRecipes from "./components/ChefReceipes";

const chefsData = [
  {
    id: 1,
    name: "Chef Arjun Sharma",
    experience: "10 Years",
    recipes: 150,
    likes: 500,
    image: "/Images/chef1.jpg",
  },
  {
    id: 2,
    name: "Chef Priyansh Patel",
    experience: "8 Years",
    recipes: 120,
    likes: 450,
    image: "/Images/chef.jpeg",
  },
  {
    id: 3,
    name: "Chef Deepik Singh",
    experience: "12 Years",
    recipes: 180,
    likes: 600,
    image: "/Images/chef3.jpeg",
  },
  {
    id: 4,
    name: "Chef Rajesh Verma",
    experience: "7 Years",
    recipes: 90,
    likes: 350,
    image: "/Images/chef4.jpg",
  },
  {
    id: 5,
    name: "Chef Ayan Joshi",
    experience: "9 Years",
    recipes: 140,
    likes: 550,
    image: "/Images/chef5.jpg",
  },
  {
    id: 6,
    name: "Chef Vikram Sharma",
    experience: "11 Years",
    recipes: 160,
    likes: 700,
    image: "/Images/chef6.jpg",
  },
];

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/chefs" element={<Chefs chefsData={chefsData} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/chef/:chefId"
            element={<ChefRecipes chefsData={chefsData} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
