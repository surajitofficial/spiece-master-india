import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Tabs,
  Tab,
  Snackbar,
} from "@mui/material";
import { useUserContext } from "../context/userContext"; // Import useUserContext
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

const AuthModal = ({ open, onClose }) => {
  const { registerUser } = useUserContext(); // Access the user context
  const [tabValue, setTabValue] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleLogin = () => {
    // Your login logic here using email and password
    // Example: auth.signInWithEmailAndPassword(email, password)...

    // Call registerUser or other authentication methods as needed
    // For example:
    // registerUser(email, name, password);
  };

  const handleSwitchToRegistration = () => {
    setTabValue(1);
  };

  const handleSwitchToLogin = () => {
    setTabValue(0);
  };

  const openSnackbar = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
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
          <LoginForm
            email={email}
            setEmail={setEmail}
            password={password}
            onClose={onClose}
            setPassword={setPassword}
            handleLogin={handleLogin}
            onSwitchToRegistration={handleSwitchToRegistration}
            openSnackbar={openSnackbar}
          />
        )}
        {tabValue === 1 && (
          <RegistrationForm
            name={name}
            email={email}
            password={password}
            setName={setName}
            setEmail={setEmail}
            setPassword={setPassword}
            setError={setError}
            onClose={onClose}
            onSwitchToLogin={handleSwitchToLogin}
            openSnackbar={openSnackbar}
          />
        )}
        {error && <p>{error}</p>}
      </DialogContent>
      {snackbarOpen && (
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={() => setSnackbarOpen(false)}
          message={snackbarMessage}
        />
      )}
    </Dialog>
  );
};

export default AuthModal;
