export function Search({ setShowSearch }) {
  
  return (
    <div className="overlay">
      <div className="searchbar">
        <input
          type="text"
          className="searchInput search-input"
          placeholder="Search recipes..."
        />
        <ul id="recipeList" className="search-result"></ul>
      </div>

      <button
        className="closeButton close-button"
        onClick={() => setShowSearch(false)}
      >
        close
      </button>
    </div>
  );
}
