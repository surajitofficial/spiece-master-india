import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Link,
  Grid,
  Typography,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

const RegistrationForm = ({
  name,
  email,
  setEmail,
  password,
  setName,
  setPassword,
  setError,
  onClose,
  onSwitchToLogin,
}) => {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [imagePath, setImagePath] = useState(""); // New state for image URL or path

  // const handlePhotoChange = (e) => {
  //   const file = e.target.files[0];
  //   setPhoto(file);
  // };

  const handleRegistration = () => {
    setNameError(false);
    setEmailError(false);
    setPasswordError(false);

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (name.trim() === "") {
      setNameError(true);
      return;
    }

    if (!emailPattern.test(email)) {
      setEmailError(true);
      return;
    }

    if (password.trim() === "" || password.length < 6) {
      setPasswordError(true);
      return;
    }

    // Implement your registration logic here, including handling the image URL or path.
    // You can access the imagePath state for the URL or path provided by the user.

    onClose();
  };

  return (
    <Container maxWidth="xs">
      <form>
        <TextField
          label="Name"
          variant="outlined"
          margin="normal"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={nameError}
          helperText={nameError ? "Name cannot be empty" : ""}
        />
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
          helperText={emailError ? "Invalid email address" : ""}
        />
        <TextField
          label="Password"
          variant="outlined"
          margin="normal"
          fullWidth
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
          helperText={
            passwordError ? "Password must be at least 6 characters" : ""
          }
        />

        {/* New input field for image URL or path */}
        <TextField
          label="Image URL or Path"
          variant="outlined"
          margin="normal"
          fullWidth
          value={imagePath}
          onChange={(e) => setImagePath(e.target.value)}
        />

        {/* <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
        /> */}

        <Grid container justifyContent="space-between" spacing={2}>
          <Grid item>
            <Link onClick={onSwitchToLogin}>Already have an account? Sign In</Link>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button
              variant="contained"
              fullWidth
              onClick={handleRegistration}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default RegistrationForm;
