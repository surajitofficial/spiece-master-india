import React, { useState, useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const images = [
  "/images/hero-slider-1.jpg",
  "/images/hero-slider-2.jpg",
  "/images/hero-slider-3.jpg",
];

const sliderContainerStyle = {
  maxHeight: "500px",
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const sliderStyle = {
  width: "100%",
};

const sliderContent = [
  {
    title: "Experience a Culinary Journey",
    description:
      "Embark on a flavorful adventure at our restaurant. We offer a diverse menu filled with mouthwatering dishes and a warm, welcoming atmosphere.",
    buttonLabel: "Explore Our Menu",
    buttonLink: "/menu",
  },
  {
    title: "Savor the Delights of Our Kitchen",
    description:
      "Treat your taste buds to an unforgettable experience. Our chefs create delectable masterpieces, and our attentive staff ensures a memorable dining experience.",
    buttonLabel: "See Our Specialties",
    buttonLink: "/chefs",
  },
  {
    title: "Unforgettable Dining Awaits You",
    description:
      "At our restaurant, we take pride in delivering exceptional flavors and service. Join us for a remarkable journey through the world of cuisine.",
    buttonLabel: "Book a Table",
    buttonLink: "/reservations",
  },
];

const BannerSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    // Automatically switch to the next slide after 5 seconds
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={sliderContainerStyle}>
      <AwesomeSlider style={sliderStyle} selected={activeSlide} bullets={false}>
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#333",
              color: "#fff",
              padding: "60px 0",
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "400px",
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h3" gutterBottom>
                  {sliderContent[index].title}
                </Typography>
                <Typography variant="body1" paragraph>
                  {sliderContent[index].description}
                </Typography>
                <Link to={sliderContent[index].buttonLink}>
                  <Button variant="contained" color="primary">
                    {sliderContent[index].buttonLabel}
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </div>
        ))}
      </AwesomeSlider>
    </div>
  );
};

export default BannerSection;
