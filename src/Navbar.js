import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <h1>Recipe Tracker</h1>
      <nav>
        <Link to="profile">My Profile</Link> |{" "}
        <Link to="recipes">My Recipes</Link> |{" "}
        <Link to="published-recipes">My Published Recipes</Link>
      </nav>
    </div>
  );
}

export default Navbar