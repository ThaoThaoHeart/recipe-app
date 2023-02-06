import { useContext } from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import { RecipeContext } from "../context";

const EditRecipe = () => {
  const { id } = useParams()
  const { recipes } = useContext(RecipeContext)
  const recipe = recipes ? recipes.find(r => r.id == id) : null

  useEffect(()=> { 

  },[])

  return ( //Duplicates of form
    <div>
      <h1>Edit Recipe</h1>
      <label>Name: </label> <input type="text" defaultValue={recipe.recipeName} ></input> <br/>
      <label>Ingredients: </label> <input type="text" /> <button>+</button> <br/>
      <ul className='recipeIngredients'>
          {recipe.ingredients.map((ingredient, index) => {
            return <li key={'ingredient'+index}><button>-</button>{ingredient.name}</li>
          })}
      </ul>
      <label>Instructions: </label> <textarea type="textbox" defaultValue={recipe.instructions}></textarea> <br/>
      <Link to='/recipes'>
        <button>Save Changes</button>
      </Link>
    </div>
  )
  }

export default EditRecipe
