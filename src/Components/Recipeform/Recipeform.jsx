import { useState } from "react";
const AddRecipeForm = ({ onAddRecipe }) => {
  const [mealName, setMealName] = useState("");
  const [mealCategory, setMealCategory] = useState("");
  const [selectedMealImage, setSelectedMealImage] = useState(null);
  const [mealIngredients, setMealIngredients] = useState("");
  const [mealMeasurements, setMealMeasurement] = useState("");
  const [mealInstructions, setMealInstructions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !mealName.trim() ||
      !mealCategory.trim() ||
      !selectedMealImage.trim() ||
      !mealIngredients.trim() ||
      !mealMeasurements.trim() ||
      !mealInstructions.trim()
    )
      return;

    const newRecipe = {
      name: mealName,
      category: mealCategory,
      image: selectedMealImage,
      ingredients: mealIngredients,
      measurement: mealMeasurements,
      instructions: mealInstructions,
    };

    onAddRecipe(newRecipe);

    setMealName("");
    setMealCategory("");
    setSelectedMealImage;
    setMealIngredients("");
    setMealMeasurement("");
    setMealMeasurement("");
    setMealInstructions("");
  };
  return (
    <>
      <h1>Add Your Yummy Recipe</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mealName"></label>
        <input
          type="text"
          id="mealName"
          onChange={(e) => setMealName(e.target.value)}
          placeholder="Enter Meal or Recipe Name"
        />

        <label htmlFor="mealCategory">Meal Category</label>
        <select
          name="mealCategory"
          id="mealCategory"
          value={mealCategory}
          onChange={(e) => setMealCategory(e.target.value)}
        >
          <option value="">Select meal Category</option>
          <option value="">Beef</option>
          <option value="">Chicken</option>
          <option value="">Desert</option>
          <option value="">Lamb</option>
          <option value="">Pasta</option>
          <option value="">Pork</option>
          <option value="">Seafood</option>
          <option value="">Vegeterian</option>
          <option value="">Vegan</option>
          <option value="">Goat</option>
          <option value="">Breakfast</option>
          <option value="">Swallow</option>
          <option value="">Lunch</option>
        </select>

        <label htmlFor="selectedMealImage">Add Image</label>
        <input
          type="file"
          id="selectedMealImage"
          onChange={(e) => setSelectedMealImage(e.target.files[0])}
        />

        <label htmlFor="mealIngredients">Meal Ingredients</label>
        <label htmlFor="mealMeasurement"></label>


        <label htmlFor="mealInstrucetions"></label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </form>
    </>
  );
};
