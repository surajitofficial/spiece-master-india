import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const MenuSection = () => {
  const menus = [
    { title: 'Appetizers', price: '$10', image: '/appetizers.jpg' },
    { title: 'Main Courses', price: '$20', image: '/main-courses.jpg' },
    { title: 'Desserts', price: '$8', image: '/desserts.jpg' },
  ];

  return (
    <section style={{ backgroundColor: '#fff', padding: '60px 0' }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Our Menu
        </Typography>
        <Grid container spacing={3}>
          {menus.map((menu, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  alt={menu.title}
                  height="140"
                  image={menu.image}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {menu.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {menu.price}
                  </Typography>
                  <Button variant="outlined" color="primary">
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

export default MenuSection;
