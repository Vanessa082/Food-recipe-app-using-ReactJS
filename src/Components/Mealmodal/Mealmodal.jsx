import React from "react";
import "./Mealmodal.css";

const Mealmodal = ({
  recipe,
  displayIngredientsMeasurements,
  mealInstructions,
  handleCloseModal,
}) => {
  return (
    <div id="mealModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleCloseModal}>
          &times;
        </span>
        <h2 className="mealName">{recipe.strMeal}</h2>
        <div className="imgingredientsme">
          <img
            className="mealImage"
            src={recipe.strMealThumb}
            alt={recipe.strMealThumb}
          />
          <div className="ingredientsmeasurement">
            <div className="ingredients">{displayIngredientsMeasurements()}</div>
            <div className="measurements">{displayIngredientsMeasurements()}</div>
          </div>
        </div>
        <div className="mealInstructions">{mealInstructions}</div>
      </div>
    </div>
  );
};

export default Mealmodal;
