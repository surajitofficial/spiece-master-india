import React, { useState } from "react";
import { Container, TextField, Button, Link, Grid } from "@mui/material";
import { useUserContext } from "../context/userContext";

const RegistrationForm = ({
  name,
  email,
  password,
  setName,
  setEmail,
  setPassword,
  setError,
  onClose,
  onSwitchToLogin,
  openSnackbar,
}) => {
  const { registerUser } = useUserContext();
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [imagePath, setImagePath] = useState("");

  const handleRegistration = async () => {
    setNameError(false);
    setEmailError(false);
    setPasswordError(false);

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

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

    // if (name && email && password) {
    //   registerUser(email, name, password, imagePath) // Pass imagePath to registerUser
    //     .then(() => {
    //       openSnackbar("Registration successful");
    //       onClose();
    //     })
    //     .catch((error) => {
    //       // Handle registration error if needed
    //     });
    // }
    try {
      await registerUser(email, name, password, imagePath);
      openSnackbar("Registration successful");
      onSwitchToLogin();
    } catch (error) {
      // Handle registration error if needed
    }
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
        <TextField
          label="Image URL or Path" // Input for imagePath
          variant="outlined"
          margin="normal"
          fullWidth
          value={imagePath}
          onChange={(e) => setImagePath(e.target.value)}
        />
        <Grid container justifyContent="space-between" spacing={4}>
          <Grid item>
            <Link
              onClick={onSwitchToLogin}
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              Already have an account? Sign In
            </Link>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button variant="contained" fullWidth onClick={handleRegistration}>
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default RegistrationForm;
