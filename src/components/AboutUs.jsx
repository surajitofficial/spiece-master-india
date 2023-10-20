import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import Loader from "react-loader";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "2rem",
    padding: "2rem",
  },
  header: {
    fontSize: "2rem",
    marginBottom: "2rem",
    color: "#ff5722",
    textAlign: "center",
  },
  paper: {
    padding: "2rem",
    background: "linear-gradient(135deg, #ff9a8b, #ec4e21)",
    border: "1px solid #ff5722",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    color: "#fff",
  },
  sectionTitle: {
    fontSize: "1.8rem",
    marginBottom: "1.5rem",
    color: "#fff",
  },
  content: {
    fontSize: "1.2rem",
    color: "#f7f7f7",
  },
  chefCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "1rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    marginBottom: "1rem",
  },
  chefImage: {
    maxWidth: "100%",
    borderRadius: "50%",
  },
  chefLink: {
    textDecoration: "none",
    color: "#fff",
    fontWeight: "bold",
  },
  groupCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "1rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    marginBottom: "1rem",
  },
  groupImage: {
    maxWidth: "100%",
    borderRadius: "10px",
  },
  exploreButton: {
    marginTop: "1rem",
    backgroundColor: "#ff5722",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#ec4e21",
    },
  },
}));

const chefsData = [
  {
    name: "Chef Arjun Sharma",
    experience: "10 Years",
    recipes: 150,
    likes: 500,
    image: "/Images/chef1.jpg",
  },
  {
    name: "Chef Priyansh Patel",
    experience: "8 Years",
    recipes: 120,
    likes: 450,
    image: "/Images/chef.jpeg",
  },
  {
    name: "Chef Deepak Singh",
    experience: "12 Years",
    recipes: 180,
    likes: 600,
    image: "/Images/chef3.jpeg",
  },
  {
    name: "Chef Rajesh Verma",
    experience: "7 Years",
    recipes: 90,
    likes: 350,
    image: "/Images/chef4.jpg",
  },
  {
    name: "Chef Ayan Joshi",
    experience: "9 Years",
    recipes: 140,
    likes: 550,
    image: "/Images/chef5.jpg",
  },
  {
    name: "Chef Vikram Sharma",
    experience: "11 Years",
    recipes: 160,
    likes: 700,
    image: "/Images/chef6.jpg",
  },
];

const groupImages = [
  "/Images/group1.jpg",
  "/Images/group2.jpg",
  // Add more group images as needed
];

const AboutUs = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);

  return (
    <Container className={classes.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <Typography variant="h2" className={classes.header}>
            About Us
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <Typography variant="h4" className={classes.sectionTitle}>
                  Our Restaurant
                </Typography>
                <Typography variant="body1" className={classes.content}>
                  At{" "}
                  <span style={{ color: "#ff5722" }}>Cuisine Restaurant</span>,
                  we offer an extraordinary journey through the most exquisite
                  flavors from around the globe. Our unwavering dedication to
                  perfection begins with the meticulous selection of the
                  freshest, finest ingredients and extends to the expertise of
                  our culinary artisans, who transform these elements into
                  nothing short of gastronomic works of art. We pride ourselves
                  on creating an environment where each visit is more than just
                  a meal; it's an immersive experience. As you step into our
                  restaurant, you'll be greeted with an ambiance that transports
                  you to a world of culinary delights, with soothing music, warm
                  lighting, and attentive staff to enhance your journey.
                </Typography>

                <Typography variant="body1" className={classes.content}>
                  Our commitment to excellence goes beyond sourcing exceptional
                  ingredients and talented chefs. It's ingrained in every aspect
                  of our service, ensuring that your visit is memorable and
                  remarkable. We continually strive to push the boundaries of
                  creativity, providing our guests with unique and unforgettable
                  dishes that excite the palate. Our menu is a carefully curated
                  symphony of flavors, offering a diverse range of dishes
                  inspired by global cuisines. Whether you're craving a classic
                  favorite or ready to explore new tastes, our menu caters to
                  every palate.
                </Typography>

                <Typography variant="body1" className={classes.content}>
                  Our chefs pour their passion into each plate, balancing
                  innovation with tradition to create culinary masterpieces that
                  will leave you longing for more. Pair your meal with a
                  selection from our extensive wine list or indulge in our
                  handcrafted cocktails, expertly crafted to complement your
                  dining experience. We take pride in offering a well-rounded
                  dining experience, where every sip and every bite harmonize to
                  create a culinary masterpiece. Cuisine Restaurant isn't just a
                  place to eat; it's a destination for those who appreciate the
                  finer things in life. It's where you can celebrate special
                  occasions, enjoy a romantic dinner, or simply savor a meal
                  that transcends the ordinary. Join us on this journey through
                  taste and indulge in a dining experience that will leave an
                  indelible mark on your senses and memories. Your adventure in
                  the world of fine dining begins here at Cuisine Restaurant.
                </Typography>

                <Button
                  component={Link}
                  to="/menu"
                  variant="contained"
                  className={classes.exploreButton}
                >
                  Explore Our Menu
                </Button>

                <Grid container spacing={2}>
                  {groupImages.map((image, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                      <Card className={classes.groupCard}>
                        <CardMedia
                          component="img"
                          alt={`Group ${index + 1}`}
                          height="200"
                          image={image}
                        />
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <Typography variant="h4" className={classes.sectionTitle}>
                  Meet Our Chefs and Staff
                </Typography>
                <Grid container spacing={2}>
                  {chefsData.map((chef, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Card className={classes.chefCard}>
                        <CardMedia
                          component="img"
                          alt={chef.name}
                          height="200"
                          image={chef.image}
                        />
                        <CardContent>
                          <Typography variant="h6">{chef.name}</Typography>
                          <Typography variant="body2" color="textSecondary">
                            {chef.experience} of Experience
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            {chef.recipes} Recipes
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
                <Typography variant="body1" className={classes.content}>
                  At Cuisine Restaurant, our culinary team is a force to be
                  reckoned with. They transcend the conventional role of mere
                  cooks and emerge as true culinary artists. Each chef within
                  our illustrious team carries a distinct culinary background
                  and an unbridled passion for curating dining experiences that
                  linger in your memory.
                  <Link to="/chefs" className={classes.chefLink}>
                    Learn more about our chefs...
                  </Link>
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </>
      )}
    </Container>
  );
};

export default AboutUs;
