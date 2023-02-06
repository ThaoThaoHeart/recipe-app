import { useState } from 'react'
import { Link } from "react-router-dom"
import { useContext } from 'react'
import { FormContext } from '../context'

const IngredientStep = () => {
  const { data, setData } = useContext(FormContext)
  const [ingredient, setIngredient] = useState('')

  const addIngredient = ingredient => {
    setData({...data,
      ingredients: [...data.ingredients,{
          name: ingredient,
          isChecked: false
        }]
    })
    setIngredient('')//Clear field method ->Put in useForm
  }

  const removeIngredient = ingredient => {
    setData({...data, ingredients: data.ingredients.filter(i => i !== ingredient)})
  }

  return (
    <div>
      <label>Ingredients: </label> 
      <input 
      type="text" 
      value={ingredient} 
      onChange={e => {setIngredient(e.target.value)}}/> 
      <button onClick={()=>{addIngredient(ingredient)}}>+</button> <br/>
      <ul className='recipeIngredients'>
        {data.ingredients.map((ing, index) => {
          return (
          <li key={index}>
            <button onClick={()=>{removeIngredient(ing)}}>-</button>{ing.name}
          </li>
          )
        })}
      </ul>
      <Link to='../'><button>Back</button></Link>
      <Link to='../1/instructions'><button>Next</button></Link>
    </div>
  )
}

export default IngredientStep
