import "./Herosection.css";
import bg from "../../assets/images/bg.jpg";
import { Search } from "./Search";
import { useState } from "react";

function Herosection() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div id="hero-section">
      <div className="content-holder">
        <div className="col1">
          <h1>It's Not Just Cooking, It's an Experience</h1>

          <div className="search">
            <button className="searchbtn" onClick={() => setShowSearch(true)}>Search</button>
          </div>
        </div>

        <div className="col2">
          <img
            className="hero-image"
            src={bg}
            alt="hero image"
            height="400"
            width="500"
          />
        </div>
      </div>

     {showSearch ? <Search setShowSearch={setShowSearch} /> : null}
    </div>
  );
};

export default Herosection;
