import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";

const NotFoundPage = () => {
  const containerStyle = {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  const paperStyle = {
    padding: "20px",
    textAlign: "center",
    maxWidth: "1000px",
  };

  const imageStyle = {
    maxWidth: "100%",
  };

  return (
    <div style={containerStyle}>
      <div style={paperStyle}>
        <img src="/images/404.png" alt="404" style={imageStyle} />
        <Link to="/">
          <Button variant="contained" color="primary" startIcon={<HomeIcon />}>
            Go to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
