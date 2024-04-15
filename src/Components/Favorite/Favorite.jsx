import { useState, useEffect } from "react";

function Favorite() {
  const [favoriteMeals, setIsFavoriteMeals] = useState(null);

  const loadData = () => {
    const favoriteMeal = JSON.parse(localStorage.getItem("favorite")) || [];

    setIsFavoriteMeals(favoriteMeal)
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleVeiwMealDetail = (recipe) => {
    setIsFavoriteMeals(recipe);
  };
  return (
    <div className="favorites" id="favorites">
      <h4>Favorites</h4>
      <div className="mealArea">
        {favoriteMeals[0] && favoriteMeals.map((recipe) => {
          <div key={recipe.idMeal}>
            <h5> {recipe.strMeal} </h5>
            <img src={recipe.strMealThumb} alt={recipe.strMealThumb} />
            <button onClick={handleVeiwMealDetail}>Veiw Details</button>
          </div>
        })}
      </div>
    </div>
  );
}

export default Favorite;
