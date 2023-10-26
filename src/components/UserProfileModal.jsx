import React from "react";
import { Dialog, DialogTitle, DialogContent, Button, Grid } from "@mui/material";
import { useUserContext } from "../context/userContext";

function UserProfileModal({ onClose, email, openSnackbar }) {
  const { user, forgotPassword } = useUserContext();

  const modalStyle = {
    background: "linear-gradient(45deg, #FE6B8B, #FF8E53)",
    padding: "16px",
    borderRadius: "8px",
  };

  const imageStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: "4px solid #fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  };

  const nameStyle = {
    fontSize: "24px",
    color: "#fff",
  };

  const emailStyle = {
    fontSize: "18px",
    color: "#fff",
  };

  const resetPasswordButtonStyle = {
    backgroundColor: "red", // Color for Reset Password button
    color: "#fff",
    marginRight: "8px", // Add margin for spacing
  };

  const closeButtonStyle = {
    backgroundColor: "#3F51B5", // Color for Close button
    color: "#fff",
  };

  const gridContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const handleResetPassword = async () => {
    const email = user.email; // Assuming you have access to the user's email
    if (email) {
      try {
        await forgotPassword(email);
        alert("Reset password link sent to registered email");
      } catch (error) {
        // Handle the error, if needed
      }
    }
  };
  

  return (
    <Dialog open={Boolean(user)} onClose={onClose}>
      <DialogTitle style={{ color: "#FF8E53" }}>User Profile</DialogTitle>
      <DialogContent style={modalStyle}>
        {user && (
          <div>
            <Grid container direction="column" alignItems="center" spacing={2}>
              <Grid item>
                <img
                  src={user.photoURL || "/Images/noImage.png"}
                  alt="User"
                  style={imageStyle}
                />
              </Grid>
              <Grid item>
                <p style={nameStyle}>{`Name: ${user.displayName}`}</p>
                <p style={emailStyle}>{`Email: ${user.email}`}</p>
              </Grid>
              <Grid item style={gridContainerStyle}>
                <Button onClick={handleResetPassword} style={resetPasswordButtonStyle}>
                  Reset Password
                </Button>
                <Button onClick={onClose} style={closeButtonStyle}>
                  Close
                </Button>
              </Grid>
            </Grid>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default UserProfileModal;
