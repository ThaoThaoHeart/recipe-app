import { Route, Routes } from 'react-router-dom'
import { FormContext } from "../context"

import NameStep from "./NameStep"
import IngredientStep from "./IngredientStep"
import InstructionsStep from "./InstructionsStep"
import ConfirmStep from "./ConfirmStep"

import useForm from '../useForm'

const AddRecipe = () => {
  const formState = useForm()

  return (
    <FormContext.Provider value={formState}>
      <h2>Add Recipe</h2>
      <Routes>
        <Route path='/' element={ <NameStep/> } />
        <Route path='/1/ingredients' element={ <IngredientStep/> } />
        <Route path='/1/instructions' element={ <InstructionsStep /> } />
        <Route path='/1/confirm' element={ <ConfirmStep/> } />
      </Routes>
      <pre>{JSON.stringify(formState.data, null, 2)}</pre>
      <pre>{JSON.stringify(formState.errors, null, 2)}</pre>
    </FormContext.Provider>
  )
}

export default AddRecipe
