import './Navbar.css'
const Navbar = () =>{
  return <nav className="navbar">
  <div className="nav-content">
    <h1>Yummy</h1>
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#about">About </a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
      <li>
        <a href="#favorite">Favorites</a>
      </li>
    </ul>
    <button>Add Recipe</button>
  </div>
</nav>;
}

export default Navbar;