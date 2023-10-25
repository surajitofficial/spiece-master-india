import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const MenuDetails = () => {
  const { id } = useParams();

  const menuItems = [
    { id: 1, title: "Appetizers 1", price: "$10", image: "/images/service-1.jpg", description: "Delicious appetizers" },
    { id: 2, title: "Appetizers 2", price: "$12", image: "/images/service-2.jpg", description: "Amazing appetizers" },
    { id: 3, title: "Appetizers 3", price: "$9", image: "/images/service-3.jpg", description: "Tasty appetizers" },
  ];

  const cardStyles = {
    height: "100%",
    backgroundColor: "#f7d794", // Unique background color
    borderRadius: "10px", // Rounded corners
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Drop shadow
    padding: "16px", // Add padding for space
  };

  // Add a unique color for buttons
  const buttonStyles = {
    backgroundColor: "#fd9644",
    color: "#fff",
    textTransform: "none", // Prevent uppercase text
  };

  const descriptionStyles = {
    color: "#2d3436", // Text color
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {menuItems.map(menuItem => (
          <Grid key={menuItem.id} item xs={12} sm={6} md={4} style={{ marginTop: '20px', marginBottom: '50px' }}>
            <Card style={cardStyles}>
              <CardMedia
                component="img"
                alt={menuItem.title}
                height="250"
                image={menuItem.image}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {menuItem.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" style={descriptionStyles}>
                  {menuItem.description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Price: {menuItem.price}
                </Typography>
                <Button
                  variant="contained"
                  style={buttonStyles}
                  component={Link}
                  to={`/menu/${menuItem.id}`}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MenuDetails;
