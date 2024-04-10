const Category = () => {
  return (
    <div className="section" id="category">
      <div className="favorites">
        <h4>Popular Recipe Area</h4>
        <div className="popMealArea">
          <figure className="british">
            <img
              src="https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg"
              alt="Apple Frangipan Tart"
            />

            <div className="rating">
              <i className="fa-solid fa-star o"></i>
              <i className="fa-solid fa-star n"></i>
              <i className="fa-solid fa-star e"></i>
              <i className="fa-solid fa-star t"></i>
              <i className="fa-solid fa-star t"></i>
            </div>

            <figcaption>British</figcaption>
          </figure>

          <figure className="malysian">
            <img
              src="https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg"
              alt="Apam balik"
            />
            <div className="rating">
              <i className="fa-solid fa-star r"></i>
              <i className="fa-solid fa-star f"></i>
              <i className="fa-solid fa-star u"></i>
              <i className="fa-solid fa-star i"></i>
              <i className="fa-solid fa-star e"></i>
            </div>
            <figcaption>Malaysian</figcaption>
          </figure>

          <figure className="canadian">
            <img
              src="https://www.themealdb.com/images/media/meals/wpputp1511812960.jpg"
              alt="Canadian Butter Tarts"
            />

            <div className="rating">
              <i className="fa-solid fa-star g"></i>
              <i className="fa-solid fa-star h"></i>
              <i className="fa-solid fa-star w"></i>
              <i className="fa-solid fa-star s"></i>
              <i className="fa-solid fa-star y"></i>
            </div>

            <figcaption>Canadian</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Category;