import Recipe from "./Recipe"
import { useContext } from "react";
import { Link } from "react-router-dom";
import { RecipeContext } from "../context";
import { useEffect } from "react";

const RecipeList = () => {
  const { recipes } = useContext(RecipeContext)

  return (
    <div>
      <h1>My Recipes</h1>
      <Link to="add-recipe">
        <button>Add Recipe</button>
      </Link>
      {recipes.map(recipe => {
        return <Recipe recipe={recipe} key={recipe.id} id={recipe.id}/>
      })}
    </div>
  )
}

export default RecipeList
