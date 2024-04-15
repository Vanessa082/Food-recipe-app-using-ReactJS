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
    console.log(recipe);
    setSelectedRecipeDetail(recipe);
  };

  const handleCloseDetailModal = () => {
    setSelectedRecipeDetail(null);
  };
  return (
    <div className="favorites" id="favorites">
      <h4>Favorites</h4>
      <div className="mealArea">
        {favoriteMeals?.map((recipe) => {
          return (
            <div key={recipe.idMeal} className="favorite">
              {/* <button className="removebtn">Remove from Favorite</button> */}
              <h4> {recipe.strMeal} </h4>
              <img src={recipe.strMealThumb} alt={recipe.strMealThumb} />
              <button onClick={() => handleVeiwMealDetail(recipe)} className="viewdetalsbtn">
                Veiw Details
              </button>
            </div>
          );
        })}
      </div>

      {selectedRecipeDetail && (
        <div className="modal">
          <div className="modal-content">
          <button onClick={handleCloseDetailModal} className="close">&times;</button>
          <h3> {selectedRecipeDetail.strMeal} </h3>
          <li>Instructions: {selectedRecipeDetail.strInstructions} </li>
          </div>
        </div>
      )}
    </div>
  );
}

export default Favorite;
