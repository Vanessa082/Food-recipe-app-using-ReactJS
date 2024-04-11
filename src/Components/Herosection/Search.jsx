import { useState } from "react";

export function Search({ setShowSearch }) {
  const [searchRecipe, setSearchRecipe] = useState([]);

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
          onChange={() => {
            handleSearch;
          }}
        />
        <ul id="recipeList" className="search-result"></ul>
      </div>

      <button
        className="closeButton close-button"
        onClick={() => setShowSearch(false)}
      >
        close
      </button>
    </div>
  );
}
