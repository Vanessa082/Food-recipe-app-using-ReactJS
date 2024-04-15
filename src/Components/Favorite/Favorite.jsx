import { useState, useEffect } from "react";

function Favorite() {
  const [favoriteMeals, setIsFavoriteMeals] = useState([]);
  const [selectedRecipeDetail, setSelectedRecipeDetail] = useState(null)

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

  const handleCloseDetailModal = () =>{
    selectedRecipeDetail(null)
  }
  return (
    <div className="favorites" id="favorites">
      <h4>Favorites</h4>
      <div className="mealArea">
        {favoriteMeals?.map((recipe) => {
          return (
            <div key={recipe.idMeal}>
              <h5> {recipe.strMeal} </h5>
              <img src={recipe.strMealThumb} alt={recipe.strMealThumb} />
              <button onClick={() => handleVeiwMealDetail(recipe)}>Veiw Details</button>
            </div>
          );
        })}
      </div>

      {selectedRecipeDetail && (
        <div className="modal">
          <button onClick={handleCloseDetailModal}>Close</button>
          <h3> {selectedRecipeDetail.strMeal} </h3>
          <li>Ingredients: {selectedRecipeDetail.strIngredienter} </li>
          <li>Instructions: {selectedRecipeDetail.strInstructions} </li>
        </div>
      )}
    </div>
  );
}

export default Favorite;
