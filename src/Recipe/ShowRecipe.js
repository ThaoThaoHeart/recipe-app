import { useContext } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { RecipeContext } from "../context";

const ShowRecipe = () => { 
  const { id } = useParams()

  const { recipes } = useContext(RecipeContext)
  const recipe = recipes ? recipes.find(r => r.id == id) : null

  return recipe ? ( 
    <div>
      <h1>{recipe.recipeName} Recipe</h1>
      <ul className='recipeIngredients'>
        {recipe.ingredients.map((ingredient, index) => {
          return <li key={'ingredient'+index}><input type='checkbox' name={'ingredient'+index}/>{ingredient.name}</li>
        })}
        </ul>
      <p>{recipe.instructions}</p>
    </div>
  ) : null
  
}

export default ShowRecipe
