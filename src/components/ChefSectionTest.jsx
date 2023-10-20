import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, Avatar, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const chefsData = [
  {
    name: 'Chef John Doe',
    experience: '10 Years',
    recipes: 150,
    likes: 500,
    image: '/chef1.jpg', 
  },
  {
    name: 'Chef Jane Smith',
    experience: '8 Years',
    recipes: 120,
    likes: 450,
    image: '/chef2.jpg', 
  },
  {
    name: 'Chef Sarah Wilson',
    experience: '12 Years',
    recipes: 180,
    likes: 600,
    image: '/chef3.jpg',
  },
  {
    name: 'Chef David Clark',
    experience: '7 Years',
    recipes: 90,
    likes: 350,
    image: '/chef4.jpg',
  },
  {
    name: 'Chef Emily Brown',
    experience: '9 Years',
    recipes: 140,
    likes: 550,
    image: '/chef5.jpg',
  },
  {
    name: 'Chef Michael Taylor',
    experience: '11 Years',
    recipes: 160,
    likes: 700,
    image: '/chef6.jpg',
  },
];

function ChefSection() {
  return (
    <section style={{ backgroundColor: '#f9f9f9', padding: '60px 0' }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Our Talented Chefs
        </Typography>
        <Grid container spacing={3}>
          {chefsData.map((chef, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  alt={chef.name}
                  height="200"
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
                        backgroundColor: 'red',
                        marginRight: '5px',
                        width: '20px',
                        height: '20px',
                        fontSize: '12px',
                      }}
                    >
                      <FavoriteIcon fontSize="small" style={{ color: 'white' }} />
                    </Avatar>
                    <Typography variant="body2" color="textSecondary">
                      {chef.likes} Likes
                    </Typography>
                  </Box>
                  <Button variant="contained" color="primary">
                    View Recipes
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

export default ChefSection;
