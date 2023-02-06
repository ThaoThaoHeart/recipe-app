import Recipe from "./Recipe"
import { useContext } from "react"
import { RecipeContext } from "../context"
const PublishedRecipes = () => {
  const {recipes} = useContext(RecipeContext)

  return (
    <div>
      <h1>My Published Recipes</h1>
      {recipes.map(recipe => {
        if (recipe.published) {
          return <Recipe recipe={recipe} key={recipe.id} id={recipe.id}/>
        }
      })}
    </div>
  )
}

export default PublishedRecipes
