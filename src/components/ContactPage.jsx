import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { TextField, Button, Grid, Typography, Paper } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import RoomIcon from "@material-ui/icons/Room";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f7f7f7", // Background color
  },
  content: {
    width: "100%",
    maxWidth: "900px",
    padding: theme.spacing(3),
    textAlign: "center",
    backgroundColor: "white",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
  header: {
    marginBottom: theme.spacing(3),
    color: "#333", // Text color
  },
  icon: {
    fontSize: "2rem",
    marginRight: theme.spacing(2),
    color: "#007BFF", // Icon color
  },
  address: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
    color: "#555", // Text color
  },
  contactInfo: {
    marginBottom: theme.spacing(3),
  },
  mapContainer: {
    height: "400px",
    width: "100%", // Ensure full width
  },
  form: {
    padding: theme.spacing(2),
  },
}));

const ContactForm = () => {
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a server.
  };

  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!map) {
      mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
      // mapboxgl.accessToken =
      //   "pk.eyJ1Ijoic2FoaWx0aGFrYXJlNTIxIiwiYSI6ImNrbjVvMTkzNDA2MXQydnM2OHJ6aHJvbXEifQ.z5aEqRBTtDMWoxVzf3aGsg"; 
      const center = {
        lat: 40.7128, // Valid latitude value (New York City)
        lng: -74.006, // Valid longitude value (New York City)
      };

      const newMap = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [center.lng, center.lat],
        zoom: 8,
      });

      new mapboxgl.Marker().setLngLat([center.lng, center.lat]).addTo(newMap);

      setMap(newMap);
    }
  }, [map]);

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Typography variant="h4" className={classes.header}>
          Contact Us
        </Typography>
        <div className={classes.address}>
          <RoomIcon className={classes.icon} />
          <Typography variant="body1">
            Address: Kolkata, SaltLake, Sector -V, Pin- 700156
          </Typography>
        </div>
        <div className={classes.address}>
          <PhoneIcon className={classes.icon} />
          <Typography variant="body1">Phone: +123-456-7890</Typography>
        </div>
        <div className={classes.address}>
          <EmailIcon className={classes.icon} />
          <Typography variant="body1">Email: contact@example.com</Typography>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} className={classes.form}>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  required
                  margin="normal"
                />
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  required
                  margin="normal"
                />
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  required
                  margin="normal"
                />
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                  required
                  margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </form>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} className={classes.mapContainer}>
              <Typography>
                <h2>Mapbox Map</h2>
              </Typography>
              <div ref={mapContainerRef} className="map-container" />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ContactForm;
