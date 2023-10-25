import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Link,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import { AccountCircle, GitHub, Google } from "@mui/icons-material";

const LoginForm = ({ email, setEmail, password, setPassword, handleLogin, onSwitchToRegistration }) => {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleEmailPasswordLogin = () => {
    setEmailError(false);
    setPasswordError(false);

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(email)) {
      setEmailError(true);
      return;
    }

    if (password.trim() === "" || password.length < 6) {
      setPasswordError(true);
      return;
    }

    handleLogin(); // Call the login handler from the parent
  };

  return (
    <Container maxWidth="xs">
      <form>
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
            passwordError
              ? "Password must be at least 6 characters"
              : ""
          }
        />

        <Grid container justifyContent="space-between" spacing={2}>
          <Grid item>
            <Link onClick={onSwitchToRegistration}>New User? Register</Link>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              fullWidth
              style={{
                backgroundColor: "#4285F4", // Google's brand color
                color: "white",
              }}
              onClick={handleEmailPasswordLogin}
            >
              Sign In
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              fullWidth
              style={{
                backgroundColor: "#4285F4", // Google's brand color
                color: "white",
              }}
              /* onClick={handleGoogleLogin} */
            >
              <IconButton color="inherit">
                <Google />
              </IconButton>
              Sign In with Google
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              fullWidth
              style={{
                backgroundColor: "#333", // GitHub's brand color
                color: "white",
              }}
              /* onClick={handleGitHubLogin} */
            >
              <IconButton color="inherit">
                <GitHub />
              </IconButton>
              Sign In with GitHub
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default LoginForm;
