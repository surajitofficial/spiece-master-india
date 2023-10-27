import React from "react";
import {
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Box,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import RoomIcon from "@mui/icons-material/Room";
import { Link as RouterLink } from "react-router-dom";

const linkStyle = {
  textDecoration: "none", // Remove underline
  color: "#fff",
};

const colorfulIconStyle = {
  color: "#3b5998", // Facebook Blue
};

const footerStyle = {
  backgroundColor: "#222",
  padding: "20px 0",
  // position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
};

const Logo = {
  width: "160px",
  height: "70px",
};

function SimpleFooter() {
  const footerLinks = [
    { label: "Home", link: "/" },
    { label: "Menus", link: "/menu" },
    { label: "About Us", link: "/about" },
    { label: "Our Chefs", link: "/chefs" },
    { label: "Contact", link: "/contact" },
  ];

  const socialMediaLinks = [
    { icon: <FacebookIcon />, link: "https://www.facebook.com" },
    { icon: <TwitterIcon />, link: "https://www.twitter.com" },
    { icon: <LinkedInIcon />, link: "https://www.linkedin.com" },
    { icon: <YouTubeIcon />, link: "https://www.youtube.com" },
  ];

  return (
    <footer style={footerStyle}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <div>
              <Typography variant="h6" gutterBottom style={{ color: "#fff" }}>
                Quick Links
              </Typography>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      component={RouterLink}
                      to={link.link}
                      style={linkStyle} // Apply custom style to the link
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div>
              <Typography variant="h6" gutterBottom style={{ color: "#fff" }}>
                Social Media
              </Typography>
              <Box display="flex" alignItems="center">
                {socialMediaLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    style={linkStyle} // Apply custom style to the link
                  >
                    <IconButton style={colorfulIconStyle}>
                      {item.icon}
                    </IconButton>
                  </a>
                ))}
              </Box>
              <Box component="img" src="/images/logo.png" alt="" />
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div>
              <Typography variant="h6" gutterBottom style={{ color: "#fff" }}>
                Get in Touch
              </Typography>
              <div>
                <RoomIcon style={{ verticalAlign: "middle", color: "#fff" }} />
                <Typography
                  variant="body2"
                  display="inline"
                  style={{ color: "#fff" }}
                >
                  Kolkata, SaltLake, Sector -V, Pin- 700156
                </Typography>
              </div>
              <div>
                <Typography variant="body2" style={{ color: "#fff" }}>
                  Email:{" "}
                  <Link
                    href="mailto:booking@spicemasterindia.com"
                    style={linkStyle}
                  >
                    booking@spicemasterindia.com
                  </Link>
                </Typography>
              </div>
              <div>
                <Typography variant="body2" style={{ color: "#fff" }}>
                  Booking Request:{" "}
                  <Link href="tel:+88123123456" style={linkStyle}>
                    +88-123-123456
                  </Link>
                </Typography>
              </div>
              <div>
                <Typography variant="body2" style={{ color: "#fff" }}>
                  Open: 09:00 am - 01:00 pm
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="body2"
            color="textSecondary"
            style={{ color: "#fff" }}
          >
            &copy; {new Date().getFullYear()} Spice Master India. All Rights
            Reserved | Crafted by{" "}
            <Link
              href="https://github.com/surajitofficial"
              target="_blank"
              style={linkStyle}
            >
              Surajit
            </Link>
          </Typography>
        </div>
      </Container>
    </footer>
  );
}

export default SimpleFooter;
