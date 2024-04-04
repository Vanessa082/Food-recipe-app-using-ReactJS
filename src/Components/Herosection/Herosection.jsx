const Herosection = () => {
  return (
    <div id="hero-section">
      <div class="content-holder">
        <div class="col1">
          <h1>It's Not Just Cooking, It's an Experience</h1>

          <div class="search">
            <button class="searchbtn">Search</button>
          </div>
        </div>

        <section class="col2">
          <img
            src="./assets/images/bg.jpg"
            alt="hero image"
            height="400"
            width="500"
          />
        </section>
      </div>
      <div class="overlay">
        <div class="searchbar">
          <input
            type="text"
            class="searchInput"
            placeholder="Search recipes..."
          />
          <ul id="recipeList" class="search-result"></ul>
        </div>

        <button class="closeButton">close</button>
      </div>
    </div>
  );
};

export default Herosection;
