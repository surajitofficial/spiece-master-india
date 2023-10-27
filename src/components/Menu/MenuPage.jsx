import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const MenuPage = () => {
  const menus = [
    { id: 1, title: "Appetizers", price: "$10", image: "/images/service-1.jpg" },
    { id: 2, title: "Main Courses", price: "$20", image: "/images/service-2.jpg" },
    { id: 3, title: "Desserts", price: "$8", image: "/images/service-3.jpg" },
  ];

  const sectionStyle = {
    background: `url('/images/footer-bg.jpg')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: "80px 0",
    color: "#fff",
    opacity: 0.9,
  };

  return (
    <section style={sectionStyle}>
      <Container>
        <Typography variant="h3" gutterBottom>
          Our Delicious Menu
        </Typography>
        <Grid container spacing={3}>
          {menus.map((menu) => (
            <Grid item xs={12} sm={6} md={4} key={menu.id}>
              <Card style={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  alt={menu.title}
                  height="200"
                  image={menu.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom style={{ color: "#333" }}>
                    {menu.title}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    {menu.price}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to={`/menu/${menu.id}`}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default MenuPage;
