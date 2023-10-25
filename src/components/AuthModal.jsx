import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Tabs,
  Tab,
  Paper,
  TextField,
} from "@material-ui/core";
import { auth, googleAuthProvider, githubAuthProvider } from "../api/firebase"; 

const AuthModal = ({ open, onClose }) => {
  const [tabValue, setTabValue] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
    setError(null); // Clear any previous errors when switching tabs
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // Handle successful login
        onClose();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleRegistration = () => {
    if (email && password.length >= 6 && name) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          user
            .updateProfile({
              displayName: name,
            })
            .then(() => {
              // Handle successful registration
              onClose();
            })
            .catch((error) => {
              setError(error.message);
            });
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      setError("Name, email, and password are required. Password must be at least 6 characters.");
    }
  };

  const handleGoogleSignIn = () => {
    auth
      .signInWithPopup(googleAuthProvider)
      .then(() => {
        // Handle successful Google sign-in
        onClose();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGithubSignIn = () => {
    auth
      .signInWithPopup(githubAuthProvider)
      .then(() => {
        // Handle successful GitHub sign-in
        onClose();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <Tabs
          value={tabValue}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChangeTab}
          centered
        >
          <Tab label="Login" />
          <Tab label="Registration" />
        </Tabs>
      </DialogTitle>
      <DialogContent>
        {tabValue === 0 && (
          <Paper>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin} color="primary">
              Login
            </Button>
            <Button onClick={handleGoogleSignIn} color="primary">
              Sign in with Google
            </Button>
            <Button onClick={handleGithubSignIn} color="primary">
              Sign in with GitHub
            </Button>
          </Paper>
        )}
        {tabValue === 1 && (
          <Paper>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleRegistration} color="primary">
              Register
            </Button>
          </Paper>
        )}
        {error && <p>{error}</p>}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AuthModal;
