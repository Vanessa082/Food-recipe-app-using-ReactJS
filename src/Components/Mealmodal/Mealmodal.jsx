import "./Mealmodal.css";

const Mealmodal = () => {
  return (
    <div id="mealModal" className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <h2 className="mealName"></h2>
        <div className="imgingredientsme">
          <img className="mealImage" src="" alt="Meal Thumbnail" />
          <div className="ingredientsmeasurement">
            <div className="ingredients"></div>
            <div className="measurements"></div>
          </div>
        </div>
        <div className="mealInstructions"></div>
      </div>
    </div>
  );
};

export default Mealmodal;
