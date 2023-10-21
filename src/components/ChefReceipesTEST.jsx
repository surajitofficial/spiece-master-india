import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import recipesData from "./RecipeData";

const ChefRecipes = ({ chefsData }) => {
  const { chefId } = useParams();
  const selectedChef = chefsData.find((chef) => chef.id === parseInt(chefId));
  const chefRecipesData = recipesData.find((data) => data.chefId === parseInt(chefId));

  const [favoritedRecipes, setFavoritedRecipes] = useState([]);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [recipeToDelete, setRecipeToDelete] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storedFavoritedRecipes = JSON.parse(localStorage.getItem("favoritedRecipes")) || [];
    setFavoritedRecipes(storedFavoritedRecipes);
  }, []);

  if (!selectedChef) {
    return <NotFoundPage />;
  }

  if (!chefRecipesData) {
    return <NotFoundPage />;
  }

  const chefRecipes = chefRecipesData.recipes;

  const handleDeleteConfirm = () => {
    if (recipeToDelete) {
      // Filter out the recipe to delete
      const updatedRecipes = chefRecipes.filter((recipe) => recipe.name !== recipeToDelete);
      chefRecipesData.recipes = updatedRecipes;
      // Update local storage
      localStorage.setItem("favoritedRecipes", JSON.stringify(favoritedRecipes));
      setRecipeToDelete(null);
      setOpenDeleteDialog(false);
    }
  };

  const handleDeleteCancel = () => {
    setRecipeToDelete(null);
    setOpenDeleteDialog(false);
  };

  const handleDeleteClick = (recipeName) => {
    setRecipeToDelete(recipeName);
    setOpenDeleteDialog(true);
  };

  const handleFavoriteClick = (recipeName) => {
    if (favoritedRecipes.includes(recipeName)) {
      // Remove the recipe from favorited recipes
      const updatedFavoritedRecipes = favoritedRecipes.filter((name) => name !== recipeName);
      setFavoritedRecipes(updatedFavoritedRecipes);
      localStorage.setItem("favoritedRecipes", JSON.stringify(updatedFavoritedRecipes));
      setIsFavorite(false);
    } else {
      // Add the recipe to favorited recipes
      const updatedFavoritedRecipes = [...favoritedRecipes, recipeName];
      setFavoritedRecipes(updatedFavoritedRecipes);
      localStorage.setItem("favoritedRecipes", JSON.stringify(updatedFavoritedRecipes));
      setIsFavorite(true);
    }
  };

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
          {recipe.rating} {isFavorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
        </TableCell>
        <TableCell>
          <IconButton
            color="primary"
            aria-label={isFavorite ? "unfavorite" : "favorite"}
            onClick={() => handleFavoriteClick(recipe.name)}
          >
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <IconButton
            color="secondary"
            aria-label="delete"
            onClick={() => handleDeleteClick(recipe.name)}
          >
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    ));
  };

  
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

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Recipe Name</TableCell>
                <TableCell>Ingredients</TableCell>
                <TableCell>Cooking Method</TableCell>
                <TableCell>Rating</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{renderRecipes()}</TableBody>
          </Table>
        </TableContainer>

        <Dialog open={openDeleteDialog}>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogContent>
            Are you sure you want to remove this recipe?
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDeleteCancel} color="primary">
              Cancel
            </Button>
            <Button onClick={handleDeleteConfirm} color="primary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </section>
  );
};

export default ChefRecipes;
