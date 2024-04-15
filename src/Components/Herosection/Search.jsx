import { useState } from "react";
import Mealmodal from "../Mealmodal/Mealmodal";
import "./search.css"

export function Search({ setShowSearch }) {
  const [recipes, setSearchRecipe] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const getRecipe = async (searchInput) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
    );
    const data = await response.json();
    setSearchRecipe(data.meals || []);
  };

  const showDetails = async (mealId) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const data = await response.json();
    const recipe = data.meals[0];

    setSelectedRecipe(recipe);
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };

  const handleSearch = (e) => {
    const val = e.target.value.trim();
    if (!val) return;
    getRecipe(val);
  };

  return (
    <div className="overlay">
      <div className="searchbar">
        <input
          type="text"
          className="searchInput search-input"
          placeholder="Search recipes..."
          onChange={handleSearch}
        />
        <ul id="recipeList" className="search-result">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <li key={recipe.idMeal}>
                <div>
                  <h3>{recipe.strMeal}</h3>
                  <p>Category: {recipe.strCategory}</p>
                  <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    style={{ maxWidth: "40px" }}
                  />
                </div>
                <div className="show-details-btn-holder">
                  <button onClick={() => {
                    console.log('clicked')
                    showDetails(recipe.idMeal)
                    }} className="detailbtn">
                    Show Details
                  </button>
                </div>
              </li>
            ))
          ) : (
            <li>No recipes found</li>
          )}
        </ul>
      </div>

      {selectedRecipe && (
        <Mealmodal
          recipe={selectedRecipe}
          handleCloseModal={handleCloseModal}
        />
      )}

      <button
        className="closeButton close-button"
        onClick={() => setShowSearch(false)}
      >
        close
      </button>
    </div>
  );
}
