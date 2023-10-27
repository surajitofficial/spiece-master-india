import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Avatar,
  Box,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import ChefSection from "../Chef/Chefs";
import BannerSection from "../Banner/BannerSection";
import Loader from "react-loader";
import MenuSection from "../Menu/MenuPage";

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
const AboutUsSection = () => {
  const sectionStyle = {
    backgroundColor: "rgba(255, 215, 0,0.9)",
    padding: "60px 0",
    textAlign: "center",
    color: "#fff", // Text color
    backgroundImage: `url('/images/shape-5.png')`,
  };

  const buttonStyle = {
    backgroundColor: "#FF6347", // Tomato color
    color: "#fff", // Text color
  };

  return (
    <section style={sectionStyle}>
      <Container>
        <div style={{ backgroundColor: "white", borderRadius: "10px" }}>
          <Typography
            variant="h2"
            gutterBottom
            style={{ fontWeight: "bold", color: "red" }}
          >
            Discover the Spice Master Experience
          </Typography>
        </div>
        <Typography
          variant="h6"
          paragraph
          style={{
            fontWeight: "bold",
            color: "#FFF",
            textShadow: "2px 2px 10px rgba(0, 0, 0, 1)", // Adjust the shadow values as needed
          }}
        >
          Our commitment to exceptional dining begins with the careful selection
          of the finest, freshest ingredients, sourced locally and from around
          the globe. We believe that the foundation of an extraordinary meal
          lies in the quality of the components. It's this dedication that
          infuses our dishes with remarkable flavors and keeps our patrons
          coming back for more.
        </Typography>
        <Link to="/menu">
          <Button variant="contained" style={buttonStyle}>
            Explore Our Menu
          </Button>
        </Link>
      </Container>
    </section>
  );
};

// Contact Us Section
const ContactUsSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url('/images/footer-bg.jpg')`,
        padding: "60px 0",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography variant="h4" gutterBottom style={{ color: "white" }}>
          Let's Connect
        </Typography>
        <Typography variant="body1" paragraph style={{ color: "white" }}>
          Have questions or want to make a reservation? We're here to assist
          you!
        </Typography>
        <Typography variant="body1" paragraph style={{ color: "white" }}>
          Phone: +1 123 456 7890 <br />
          Email: info@spicemaster.com
        </Typography>
        <Link to="/contact">
          <Button variant="contained" color="primary">
            Contact Us
          </Button>
        </Link>
      </Container>
    </section>
  );
};

// Menu component
<MenuSection />;

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <BannerSection />
          <MenuSection />
          <ChefSection chefsData={chefsData} />
          <AboutUsSection />
          <ContactUsSection />
        </>
      )}
    </div>
  );
};

export default Home;
