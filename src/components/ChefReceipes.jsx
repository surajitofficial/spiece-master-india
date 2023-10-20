import React from "react";
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import recipesData from "./RecipeData";

const ChefRecipes = ({ chefsData }) => {
  const { chefId } = useParams();
  const selectedChef = chefsData.find((chef) => chef.id === parseInt(chefId));

  if (!selectedChef) {
    return <NotFoundPage />;
  }

  const chefRecipesData = recipesData.find((data) => data.chefId === parseInt(chefId));

  if (!chefRecipesData) {
    return <NotFoundPage />;
  }

  const chefRecipes = chefRecipesData.recipes;

  // Function to handle the favorite button click
  const handleFavoriteClick = (recipeName) => {
    alert(`The recipe "${recipeName}" is your favorite.`);
  };

  // Function to render the list of recipes
  const renderRecipes = () => {
    return chefRecipes.map((recipe, index) => (
      <TableRow key={index}>
        <TableCell>{recipe.name}</TableCell>
        <TableCell>
          <ul>
            {recipe.ingredients.map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
          </ul>
        </TableCell>
        <TableCell>{recipe.cookingMethod}</TableCell>
        <TableCell>
          {recipe.rating} <FavoriteIcon color="error" />
        </TableCell>
        <TableCell>
          <IconButton
            color="primary"
            aria-label="add to favorites"
            onClick={() => handleFavoriteClick(recipe.name)}
          >
            <FavoriteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    ));
  };

  // Styles for the chef's information banner
  const bannerStyle = {
    position: "relative",
    marginBottom: "20px",
    backgroundImage: `url(${selectedChef.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "20px",
    color: "white",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.9)",
  };

  const chefNameStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
  };

  const chefStatsStyle = {
    fontSize: "1.5rem",
  };

  const chefDescriptionStyle = {
    fontSize: "1.2rem",
    marginTop: "20px",
  };

  return (
    <section>
      <Container>
        <div style={bannerStyle}>
          <div>
            <Typography variant="h4" style={chefNameStyle}>
              {selectedChef.name}
            </Typography>
            <Typography variant="h6" style={chefStatsStyle}>
              Likes: {selectedChef.likes}
            </Typography>
            <Typography variant="h6" style={chefStatsStyle}>
              Recipes: {selectedChef.recipes}
            </Typography>
            <Typography variant="h6" style={chefStatsStyle}>
              Experience: {selectedChef.experience} years
            </Typography>
            <Typography variant="body1" style={chefDescriptionStyle}>
              {selectedChef.bio}
            </Typography>
          </div>
        </div>

        <Typography variant="h4" gutterBottom>
          Chef's Recipes
        </Typography>

        {/* Table to display recipes */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Recipe Name</TableCell>
                <TableCell>Ingredients</TableCell>
                <TableCell>Cooking Method</TableCell>
                <TableCell>Rating</TableCell>
                <TableCell>Favorite</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{renderRecipes()}</TableBody>
          </Table>
        </TableContainer>
      </Container>
    </section>
  );
};

export default ChefRecipes;
