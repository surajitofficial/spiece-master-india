import React, { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Button,
  Grid,
  Typography,
  Snackbar,
  SnackbarContent,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const backgroundStyle = {
  background: `url('/images/testimonial-bg.jpg')`, // Replace with your background image URL
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const ReservationPage = () => {
  const initialFormData = {
    name: "",
    email: "",
    date: getCurrentDate(),
    time: getCurrentTime(),
    numberOfGuests: "",
    specialRequests: "",
  };

  const [reservationData, setReservationData] = useState({
    ...initialFormData,
  });
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReservationData({ ...reservationData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to the server)
    console.log(reservationData);
    setShowSuccessAlert(true);

    // Reset the form data after submission
    setReservationData({
      ...initialFormData,
      date: getCurrentDate(),
      time: getCurrentTime(),
    });
  };

  const handleCloseAlert = () => {
    setShowSuccessAlert(false);
  };

  return (
    <div style={backgroundStyle}>
      <Container maxWidth="md">
        <Paper
          elevation={3}
          style={{ padding: 20, backgroundColor: "rgba(255, 255, 255, 0.8)" }}
        >
          <Typography variant="h5" component="h2" gutterBottom>
            Make a Reservation
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Name"
                  name="name"
                  onChange={handleInputChange}
                  value={reservationData.name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  onChange={handleInputChange}
                  value={reservationData.email}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Date"
                  type="date"
                  name="date"
                  onChange={handleInputChange}
                  value={reservationData.date}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Time"
                  type="time"
                  name="time"
                  onChange={handleInputChange}
                  value={reservationData.time}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Number of Guests"
                  type="number"
                  name="numberOfGuests"
                  onChange={handleInputChange}
                  value={reservationData.numberOfGuests}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Special Requests"
                  name="specialRequests"
                  multiline
                  rows={4}
                  onChange={handleInputChange}
                  value={reservationData.specialRequests}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required 
                  fullWidth
                  label="Add Primary Mobile No."
                  name="additionalField1"
                  onChange={handleInputChange}
                  value={reservationData.additionalField1}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Add Alternate Mobile No."
                  name="additionalField2"
                  onChange={handleInputChange}
                  value={reservationData.additionalField2}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              style={{
                marginTop: 20,
                backgroundColor: "#ff5722",
                color: "#fff",
              }}
            >
              Submit Reservation
            </Button>
          </form>
        </Paper>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={showSuccessAlert}
          autoHideDuration={5000}
          onClose={handleCloseAlert}
        >
          <SnackbarContent
            style={{ backgroundColor: "#4CAF50" }}
            message={
              <span style={{ display: "flex", alignItems: "center" }}>
                <CheckCircleIcon
                  style={{ fontSize: 20, opacity: 0.9, marginRight: 5 }}
                />
                Reservation Successful!
              </span>
            }
            action={
              <IconButton
                key="close"
                color="inherit"
                onClick={handleCloseAlert}
                style={{ padding: 5 }}
              >
                <CloseIcon />
              </IconButton>
            }
          />
        </Snackbar>
      </Container>
    </div>
  );
};

export default ReservationPage;
