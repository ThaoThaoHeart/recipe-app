import { useContext } from "react";
import { Link } from "react-router-dom";
import { FormContext, RecipeContext } from "../context";

const ConfirmStep = () => {
  const { data } = useContext(FormContext)
  const { createRecipe } = useContext(RecipeContext)

  const handleSubmit = () => {
    //create recipe using data
    createRecipe(data)
  }

  return (
    <div>
      <h1>Confirm</h1>
      <div className='recipe'>
        <h2>{data.recipeName}</h2> 
        <ul className='recipeIngredients'>
        {data.ingredients.map((ingredient, index) => {
          return <li key={'ingredient'+index}><input type='checkbox' name={'ingredient'+index}/>{ingredient.name}</li>
        })}
        </ul>
        <p>{data.instructions}</p>
      </div>
      <Link to='../1/instructions'><button>Back</button></Link>
      <button type='submit' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default ConfirmStep
