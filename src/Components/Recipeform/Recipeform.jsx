import { useState } from "react";
const AddRecipeForm = ({onAddRecipe}) => {
  const [mealName, setMealName] = useState("");
  const [mealCategory, setMealCategory] = useState("");
  const [mealImage, setMealImage] = useState("");
  const [mealIngredients, setMealIngredients] = useState("");
  const [mealMeasurements, setMealMeasurement] = useState("");
  const [mealInstructions, setMealInstructions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !mealName.trim() ||
      !mealCategory.trim() ||
      !mealImage.trim() ||
      !mealIngredients.trim() ||
      !mealMeasurements.trim() ||
      !mealInstructions.trim()
    )
      return;

    const newRecipe = {
      name: mealName,
      category: mealCategory,
      image: mealImage,
      ingredients: mealIngredients,
      measurement: mealMeasurements,
      instructions: mealInstructions,
    };

    onAddRecipe(newRecipe)
  };
  return;
};
