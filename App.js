import { useState } from "react";
import recipes from "./recipe";
import RecipeCard from "./RecipeCard.jsx";
import FavoritesSection from "./components/FavoritesSection";

export default function App() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (recipe) => {
    const exists = favorites.find((fav) => fav.id === recipe.id);

    if (exists) {
      setFavorites(favorites.filter((fav) => fav.id !== recipe.id));
    } else {
      setFavorites([...favorites, recipe]);
    }
  };

  return (
    <div className="app">
      <h1 className="title">Food Delivery Menu</h1>

      <FavoritesSection favoriteRecipes={favorites} />

      <div className="recipe-container">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            {...recipe}
            toggleFavorite={() => toggleFavorite(recipe)}
          />
        ))}
      </div>
    </div>
  );
}
