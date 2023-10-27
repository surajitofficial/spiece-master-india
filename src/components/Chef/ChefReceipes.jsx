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
  Snackbar,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useParams } from "react-router-dom";
import NotFoundPage from "../404/NotFoundPage";
import recipesData from "./RecipeData";
import Loader from "react-loader";
import chefsData from "../../api/chefsData";

const ChefRecipes = () => {
  const { chefId } = useParams();
  const selectedChef = chefsData.find((chef) => chef.id === parseInt(chefId));
  const chefRecipesData = recipesData.find(
    (data) => data.chefId === parseInt(chefId)
  );

  const [favoritedRecipes, setFavoritedRecipes] = useState([]);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [recipeToDelete, setRecipeToDelete] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarColor, setSnackbarColor] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Simulate loading for 2 seconds (adjust as needed)
    setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // Load favorited recipes from localStorage when the component mounts
    const storedFavoritedRecipes =
      JSON.parse(localStorage.getItem("favoritedRecipes")) || [];
    setFavoritedRecipes(storedFavoritedRecipes);
  }, []);

  if (isLoading) {
    return <Loader loaded={false} />; // Display the loader while loading
  }

  if (!selectedChef) {
    return <NotFoundPage />;
  }

  if (!chefRecipesData) {
    return <NotFoundPage />;
  }

  const chefRecipes = chefRecipesData.recipes;

  const updateLocalStorage = (updatedFavoritedRecipes) => {
    // Update localStorage with the updated list of favorited recipes
    localStorage.setItem(
      "favoritedRecipes",
      JSON.stringify(updatedFavoritedRecipes)
    );
  };

  const handleDeleteConfirm = () => {
    if (recipeToDelete) {
      // Filter out the recipe to delete from chefRecipesData.recipes
      const updatedRecipes = chefRecipesData.recipes.filter(
        (recipe) => recipe.name !== recipeToDelete
      );
      chefRecipesData.recipes = updatedRecipes; // Update chefRecipesData.recipes

      // Update favorited recipes
      const updatedFavoritedRecipes = favoritedRecipes.filter(
        (name) => name !== recipeToDelete
      );

      // Update localStorage with the updated list of favorited recipes
      updateLocalStorage(updatedFavoritedRecipes);

      setFavoritedRecipes(updatedFavoritedRecipes);
      setRecipeToDelete(null);
      setOpenDeleteDialog(false);
      setSnackbarMessage("Recipe deleted successfully");
      setSnackbarColor("green");
      setOpenSnackbar(true);
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
      const updatedFavoritedRecipes = favoritedRecipes.filter(
        (name) => name !== recipeName
      );
      setFavoritedRecipes(updatedFavoritedRecipes);

      // Update localStorage
      updateLocalStorage(updatedFavoritedRecipes);

      setSnackbarMessage("Recipe removed from favorites");
      setSnackbarColor("red");
    } else {
      // Add the recipe to favorited recipes
      const updatedFavoritedRecipes = [...favoritedRecipes, recipeName];
      setFavoritedRecipes(updatedFavoritedRecipes);

      // Update localStorage
      updateLocalStorage(updatedFavoritedRecipes);

      setSnackbarMessage("Recipe added to favorites");
      setSnackbarColor("green");
    }
    setOpenSnackbar(true);
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
          {recipe.rating} <ThumbUpIcon color="error" />
        </TableCell>
        <TableCell>
          <IconButton
            color="primary"
            aria-label="favorite"
            onClick={() => handleFavoriteClick(recipe.name)}
          >
            {favoritedRecipes.includes(recipe.name) ? (
              <FavoriteIcon color="error" />
            ) : (
              <FavoriteBorderIcon />
            )}
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
      </Container>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={openDeleteDialog}
        onClose={handleDeleteCancel}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this recipe?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for Feedback */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message={snackbarMessage}
        style={{ backgroundColor: snackbarColor }}
      />
    </section>
  );
};

export default ChefRecipes;
