import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";
import AuthModal from "../auth/AuthModal";
import UserProfileModal from "./UserProfileModal";
import { useUserContext } from "../context/userContext";

const HeaderContainer = styled("header")`
  background: #333;
  color: #fff;
  padding: 10px 0;
`;

const Navbar = styled("nav")`
  display: flex;
  flex-direction: column; /* For mobile devices */
  justify-content: space-around;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row; /* For larger screens */
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  li {
    margin: 0 15px;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Logo = styled("a")`
  img {
    width: 200px;
    height: 70px;
  }
`;

const TopBar = styled("div")`
  background: linear-gradient(45deg, #ffcc33 30%, #ffcc66 90%);
  color: #fff;
  padding: 10px 0;
  text-align: center; /* Center text for mobile devices */

  @media (min-width: 768px) {
    text-align: left; /* Align left for larger screens */
  }
`;

const TopBarContainer = styled("div")`
  display: flex;
  flex-direction: column; /* For mobile devices */
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row; /* For larger screens */
    justify-content: space-between;
  }
`;

const ContactInfo = styled("div")`
  display: flex;
  align-items: center;
  margin: 10px 0; /* Add margin for separation */

  @media (min-width: 768px) {
    margin: 0; /* Remove margin for larger screens */
  }
`;

const ContactIcon = styled("div")`
  font-size: 18px;
  margin-right: 5px;
  color: #ff0000;
`;

const ContactText = styled("span")`
  font-weight: bold;
  font-size: 14px;
`;

function Header() {
  const location = useLocation();

  const { user, logoutUser } = useUserContext();

  const [modalOpen, setModalOpen] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleLogin = (userData) => {
    // Implement your login logic here and update isLoggedIn state
    // setIsLoggedIn(true);
    setUserData(userData); // Set the user data when logged in
  };

  const handleLogout = () => {
    // Implement your logout logic here and update isLoggedIn state
    // setIsLoggedIn(false);
    logoutUser(null); // Clear user data on logout
  };

  const customButtonStyle = {
    backgroundColor: "#ff68b4", // Pink background color
    color: "white",
    borderRadius: "5px",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", // Drop shadow
    "&:hover": {
      backgroundColor: "#ff1493", // Darker pink on hover
    },
  };

  const customLogOutButtonStyle = {
    backgroundColor: "red", // Pink background color
    color: "white",
    borderRadius: "5px",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", // Drop shadow
    "&:hover": {
      backgroundColor: "#ff1493", // Darker pink on hover
    },
  };

  const [userProfileModalOpen, setUserProfileModalOpen] = useState(false);

  const openUserProfileModal = () => {
    setUserProfileModalOpen(true);
  };

  const closeUserProfileModal = () => {
    setUserProfileModalOpen(false);
  };

  return (
    <>
      <TopBar>
        <Container>
          <TopBarContainer>
            <ContactInfo>
              <ContactIcon>
                <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
              </ContactIcon>
              <ContactText>
                Kolkata, SaltLake, Sector -V, Pin- 700156
              </ContactText>
            </ContactInfo>

            <div className="separator"></div>

            <ContactInfo>
              <ContactIcon>
                <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
              </ContactIcon>
              <ContactText>Daily: 8.00 am to 10.00 pm</ContactText>
            </ContactInfo>

            <ContactInfo>
              <ContactIcon>
                <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
              </ContactIcon>
              <ContactText>+1 123 456 7890</ContactText>
            </ContactInfo>

            <ContactInfo>
              <ContactIcon>
                <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
              </ContactIcon>
              <ContactText>booking@spicemasterindia.com</ContactText>
            </ContactInfo>
          </TopBarContainer>
        </Container>
      </TopBar>

      <HeaderContainer>
        <Container>
          <Navbar>
            <Link to="/">
              <Logo>
                <Box component="img" src="/images/logo.png" alt="" />
              </Logo>
            </Link>

            <ul>
              <li>
                <Link to="/home" color="inherit">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" color="inherit">
                  Menus
                </Link>
              </li>
              <li>
                <Link to="/about" color="inherit">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/chefs" color="inherit">
                  Our Chefs
                </Link>
              </li>
              <li>
                <Link to="/contact" color="inherit">
                  Contact
                </Link>
              </li>
              {user ? (
                <>
                  <li>
                    <img
                      src={
                        user.photoURL ? user.photoURL : "/Images/noImage.png"
                      }
                      alt="User"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        cursor: "pointer",
                      }}
                      onClick={openUserProfileModal}
                    />
                  </li>
                  {userProfileModalOpen && (
                    <UserProfileModal
                      user={user}
                      onClose={closeUserProfileModal}
                    />
                  )}
                  <li>
                    <Typography variant="body1" color="inherit">
                      Welcome, {user.displayName}
                    </Typography>
                  </li>
                  <li>
                    <Button
                      variant="contained"
                      style={customLogOutButtonStyle}
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </li>
                </>
              ) : (
                <li>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={openModal}
                  >
                    Login
                  </Button>
                </li>
              )}

              <li>
                <Link to={"/reservations"}>
                  <Button variant="contained" style={customButtonStyle}>
                    Book a Table
                  </Button>
                </Link>
              </li>
              <AuthModal
                open={modalOpen}
                onClose={closeModal}
                onLogin={handleLogin}
              />
            </ul>
          </Navbar>
        </Container>
      </HeaderContainer>
    </>
  );
}

export default Header;
