import React, { useState } from "react";
import {
  Card,
  CardContent,
  Container,
  TextField,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
  fullScreenBackground: {
    backgroundImage: `url('/images/contactus.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  grid: {
    display: "flex",
    width: "100%",
    maxWidth: 1200, // Adjust as needed
  },
  gridItem: {
    flex: "1",
    padding: theme.spacing(2),
    boxSizing: "border-box",
  },
  contactDetails: {
    padding: theme.spacing(2),
    background: "#FFF", // White background
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    marginBottom: theme.spacing(2),
    textAlign: "center",
  },
  card: {
    maxWidth: "100%",
    padding: theme.spacing(2),
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    background: "#f9f9f9",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    backgroundColor: "#FF5722",
    color: "#FFF",
    "&:hover": {
      backgroundColor: "#E64A19",
    },
  },
  mapContainer: {
    border: "1px solid #ccc",
    height: "400px",
    position: "relative",
  },
  map: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
}));

function ContactFormWithMap() {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    country: "",
    phoneNumber: "",
    altPhoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log(formData);
  };

  return (
    <div className={classes.fullScreenBackground}>
      <Container>
        <div className={classes.grid}>
          <div className={classes.gridItem}>
            <Card className={classes.card}>
              <CardContent>
                <form className={classes.form} onSubmit={handleSubmit}>
                  <TextField
                    label="First Name"
                    name="firstname"
                    placeholder="Your name.."
                    value={formData.firstname}
                    onChange={handleChange}
                    className={classes.input}
                    fullWidth
                    margin="normal"
                  />

                  <TextField
                    label="Last Name"
                    name="lastname"
                    placeholder="Your last name.."
                    value={formData.lastname}
                    onChange={handleChange}
                    className={classes.input}
                    fullWidth
                    margin="normal"
                  />

                  <TextField
                    label="Country or Address"
                    name="country"
                    placeholder="Enter your country or address.."
                    value={formData.country}
                    onChange={handleChange}
                    className={classes.input}
                    fullWidth
                    margin="normal"
                  />

                  <TextField
                    label="Phone Number"
                    name="phoneNumber"
                    placeholder="Enter your phone number.."
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={classes.input}
                    fullWidth
                    margin="normal"
                  />

                  <TextField
                    label="Alternate Phone Number (Optional)"
                    name="altPhoneNumber"
                    placeholder="Enter an alternate phone number.."
                    value={formData.altPhoneNumber}
                    onChange={handleChange}
                    className={classes.input}
                    fullWidth
                    margin="normal"
                  />

                  <TextField
                    label="Message"
                    name="message"
                    placeholder="Write your message.."
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    fullWidth
                    margin="normal"
                  />

                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className={classes.submitButton}
                  >
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          <div className={classes.gridItem}>
            <div className={classes.contactDetails}>
              <Typography variant="h5" component="div" color="primary">
                Contact Us
              </Typography>
              <div>Email: booking@spicemasterindia.com</div>
              <div>Phone: +1 123 456 7890</div>
              <div>Daily: 8.00 am to 10.00 pm</div>
              <div>Location: Kolkata, SaltLake, Sector -V, Pin- 700156</div>
            </div>
            <div className={classes.mapContainer}>
              <iframe
                title="Map"
                className={classes.map}
                frameBorder="0"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Saltlake, sector v&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ContactFormWithMap;
