const Favorite = () => {
  return (
    <div class="favorites" id="favorites">
      <h4>Favorites</h4>
      <div class="mealArea">
        <figure class="british">
          <img
            src="https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg"
            alt="Beef Wellington"
          />

          <i class="fa-solid fa-heart"></i>

          <figcaption>Beef Wellington</figcaption>
        </figure>

        <figure class="malysian">
          <img
            src="https://www.themealdb.com/images/media/meals/ursuup1487348423.jpg"
            alt="Beef Brisket Pot Roast"
          />
          <i class="fa-solid fa-heart"></i>
          <figcaption>Beef Brisket Pot Roast</figcaption>
        </figure>

        <figure class="canadian">
          <img
            src="https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg"
            alt="Bread and Butter Pudding"
          />

          <i class="fa-solid fa-heart"></i>

          <figcaption>Bread and Butter Pudding</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Favorite;