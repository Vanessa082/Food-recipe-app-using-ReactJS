import { useState, useEffect } from "react";
import "./Favorites.css";
function Favorite() {
  const [favoriteMeals, setIsFavoriteMeals] = useState([]);
  const [selectedRecipeDetail, setSelectedRecipeDetail] = useState(null);

  const loadData = () => {
    const favoriteMeal = JSON.parse(localStorage.getItem("favorite")) || [];
    setIsFavoriteMeals(favoriteMeal);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleVeiwMealDetail = (recipe) => {
    setSelectedRecipeDetail(recipe);
  };

  const handleCloseDetailModal = () => {
    setSelectedRecipeDetail(null);
  };

  return (
    <div className="favorites" id="favorites" style={{ display: favoriteMeals.length === 0 ? 'none' : 'block' }}>
      <h4>Favorites</h4>
      <div className="mealArea">
        {favoriteMeals.map((recipe) => (
          <div key={recipe.idMeal} className="favorite">
            <h4>{recipe.strMeal}</h4>
            <img src={recipe.strMealThumb} alt={recipe.strMealThumb} />
            <button onClick={() => handleVeiwMealDetail(recipe)} className="viewdetalsbtn">
              View Details
            </button>
          </div>
        ))}
      </div>

      {selectedRecipeDetail && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={handleCloseDetailModal} className="close">×</button>
            <h3>{selectedRecipeDetail.strMeal}</h3>
            <p>Instructions: {selectedRecipeDetail.strInstructions}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Favorite;
