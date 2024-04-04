const Mealmodal = () => {
  return (
    <div id="mealModal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2 class="mealName"></h2>
        <div class="imgingredientsme">
          <img class="mealImage" src="" alt="Meal Thumbnail" />
          <div class="ingredientsmeasurement">
            <div class="ingredients"></div>
            <div class="measurements"></div>
          </div>
        </div>
        <div class="mealInstructions"></div>
      </div>
    </div>
  );
};
