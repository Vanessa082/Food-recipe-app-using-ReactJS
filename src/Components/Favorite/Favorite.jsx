const Favorite = () => {
  return (
    <div className="favorites" id="favorites">
      <h4>Favorites</h4>
      <div className="mealArea">
        <figure className="british">
          <img
            src="https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg"
            alt="Beef Wellington"
          />

          <i className="fa-solid fa-heart"></i>

          <figcaption>Beef Wellington</figcaption>
        </figure>

        <figure className="malysian">
          <img
            src="https://www.themealdb.com/images/media/meals/ursuup1487348423.jpg"
            alt="Beef Brisket Pot Roast"
          />
          <i className="fa-solid fa-heart"></i>
          <figcaption>Beef Brisket Pot Roast</figcaption>
        </figure>

        <figure className="canadian">
          <img
            src="https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg"
            alt="Bread and Butter Pudding"
          />

          <i className="fa-solid fa-heart"></i>

          <figcaption>Bread and Butter Pudding</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Favorite;