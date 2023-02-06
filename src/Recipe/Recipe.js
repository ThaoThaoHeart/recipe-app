import './css/recipe.css'
import { Link } from "react-router-dom";
import useRecipe from '../useRecipe'

const Recipe = ({recipe}) => {
  const { removeRecipe } = useRecipe()
  
  return (
      <div className='recipe'>
        <Link to={`/recipes/${recipe.id}`}>
          <h2>{recipe.recipeName}</h2> 
        </Link>
        <Link to={`/recipes/edit-recipe/${recipe.id}`}> 
          <button>Edit</button>
        </Link>
        <button onClick={()=>{removeRecipe(recipe.id)}}>Delete</button>
        <ul className='recipeIngredients'>
        {recipe.ingredients.map((ingredient, index) => {
          return <li key={'ingredient'+index}><input type='checkbox' name={'ingredient'+index}/>{ingredient.name}</li>
        })}
        </ul>
        <p>{recipe.instructions}</p>
      </div>
  )
}

export default Recipe
