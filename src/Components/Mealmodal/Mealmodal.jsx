import React from "react";
import "./Mealmodal.css";
import Addtofavorite from "../Addtofavorite/Addtofavorite";

const Mealmodal = ({ recipe, handleCloseModal }) => {
  const ingredients = [];
  const measure = [];
  for (let i = 1; i <= 20; i++) {
    const ingredientKey = `strIngredient${i}`;
    const measureKey = `strMeasure${i}`;
    if (recipe[ingredientKey]) {
      ingredients.push(recipe[ingredientKey]);
      measure.push(recipe[measureKey]);
    }
  }
  const instructions = recipe.strInstructions.split("\n");
  // console.log(recipe.strInstructions)
  return (
    <div id="mealModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleCloseModal}>
          &times;
        </span>

        <h1 className="mealName">{recipe.strMeal}</h1>
        <div className="imgingredientsme">
          <img
            className="meal-image"
            src={recipe.strMealThumb}
            alt={recipe.strMealThumb}
          />
          <div className="ingredientsmeasurement">
            <div className="ingredients">
              <h2>Ingredients and Measure</h2>
              <ul>
                {ingredients.map((ingredient, index) => (
                  <li key={index}>
                    {ingredient} ({measure[index]})
                  </li>
                ))}
              </ul>
            </div>
            <div className="measurements"></div>
          </div>
        </div>
        <div className="mealInstructions">
          <ol>
            {instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
        <Addtofavorite recipe={recipe} />
      </div>
    </div>
  );
};

export default Mealmodal;
