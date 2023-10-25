import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Tabs,
  Tab,
  Paper,
  TextField,
  Button,
} from "@material-ui/core";
import { auth } from "../api/firebase";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

const AuthModal = ({ open, onClose }) => {
  const [tabValue, setTabValue] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
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

  const handleSwitchToRegistration = () => {
    setTabValue(1);
  };

  const handleSwitchToLogin = () => {
    setTabValue(0);
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
            setPassword={setPassword}
            handleLogin={handleLogin}
            onSwitchToRegistration={handleSwitchToRegistration}
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
          />
        )}
        {error && <p>{error}</p>}
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
