import "./Herosection.css";
import bg from "../../assets/images/bg.jpg";

const Herosection = () => {
  return (
    <div id="hero-section">
      <div className="content-holder">
        <div className="col1">
          <h1>It's Not Just Cooking, It's an Experience</h1>

          <div className="search">
            <button className="searchbtn">Search</button>
          </div>
        </div>

        <section className="col2">
          <img
            className="hero-image"
            src={bg}
            alt="hero image"
            height="400"
            width="500"
          />
        </section>
      </div>
      <div className="overlay">
        <div className="searchbar">
          <input
            type="text"
            className="searchInput"
            placeholder="Search recipes..."
          />
          <ul id="recipeList" className="search-result"></ul>
        </div>

        <button className="closeButton">close</button>
      </div>
    </div>
  );
};

export default Herosection;
