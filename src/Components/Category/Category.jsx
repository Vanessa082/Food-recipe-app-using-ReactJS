const Category = () => {
  return (
    <div class="section" id="category">
      <div class="favorites">
        <h4>Popular Recipe Area</h4>
        <div class="popMealArea">
          <figure class="british">
            <img
              src="https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg"
              alt="Apple Frangipan Tart"
            />

            <div class="rating">
              <i class="fa-solid fa-star o"></i>
              <i class="fa-solid fa-star n"></i>
              <i class="fa-solid fa-star e"></i>
              <i class="fa-solid fa-star t"></i>
              <i class="fa-solid fa-star t"></i>
            </div>

            <figcaption>British</figcaption>
          </figure>

          <figure class="malysian">
            <img
              src="https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg"
              alt="Apam balik"
            />
            <div class="rating">
              <i class="fa-solid fa-star r"></i>
              <i class="fa-solid fa-star f"></i>
              <i class="fa-solid fa-star u"></i>
              <i class="fa-solid fa-star i"></i>
              <i class="fa-solid fa-star e"></i>
            </div>
            <figcaption>Malaysian</figcaption>
          </figure>

          <figure class="canadian">
            <img
              src="https://www.themealdb.com/images/media/meals/wpputp1511812960.jpg"
              alt="Canadian Butter Tarts"
            />

            <div class="rating">
              <i class="fa-solid fa-star g"></i>
              <i class="fa-solid fa-star h"></i>
              <i class="fa-solid fa-star w"></i>
              <i class="fa-solid fa-star s"></i>
              <i class="fa-solid fa-star y"></i>
            </div>

            <figcaption>Canadian</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};
