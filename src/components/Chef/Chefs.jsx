import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Avatar,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Loader from "react-loader";
import chefsData from "../../api/chefsData"

const ChefSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);

  const sectionStyle = {
    background: `url('/images/shape-6.png')`,
    backgroundPosition: "center",
    padding: "20px 0",
    opacity: 0.9,
  };

  return (
    <section style={sectionStyle}>
      <Container>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div style={{ backgroundColor: "white", borderRadius: "10px" }}>
              <Typography
                align="center"
                variant="h3"
                gutterBottom
                style={{ fontWeight: "bold" }}
              >
                Our Talented Chefs
              </Typography>
            </div>

            <Grid container spacing={3}>
              {chefsData.map((chef, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card style={{ height: "100%" }}>
                    <CardMedia
                      component="img"
                      alt={chef.name}
                      height="250"
                      image={chef.image}
                    />
                    <CardContent>
                      <Typography variant="h6" component="div">
                        {chef.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {chef.experience} of Experience
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {chef.recipes} Recipes
                      </Typography>
                      <Box display="flex" alignItems="center">
                        <Avatar
                          style={{
                            backgroundColor: "red",
                            marginRight: "5px",
                            width: "20px",
                            height: "20px",
                            fontSize: "12px",
                          }}
                        >
                          <FavoriteIcon
                            fontSize="small"
                            style={{ color: "white" }}
                          />
                        </Avatar>
                        <Typography variant="body2" color="textSecondary">
                          {chef.likes} Likes
                        </Typography>
                      </Box>
                      <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to={`/chef/${chef.id}`}
                      >
                        View Recipes
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Container>
    </section>
  );
};

export default ChefSection;
