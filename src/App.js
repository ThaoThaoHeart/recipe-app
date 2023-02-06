import { Route, Routes } from 'react-router-dom'

import useRecipe from "./useRecipe"

import Navbar from './Navbar'
import Profile from "./Profile"
import RecipeList from "./Recipe/RecipeList"
import PublishedRecipes from "./Recipe/PublishedRecipes"

import ShowRecipe from "./Recipe/ShowRecipe"
import EditRecipe from "./Recipe/EditRecipe"
import AddRecipe from './Recipe/AddRecipe'
import { RecipeContext } from './context'

const App = () => {

  const recipeState = useRecipe()

  return (
    <RecipeContext.Provider value={recipeState}>
      <Navbar/>
      <Routes>
        <Route path='' element={ <Profile/> } />
        <Route path='profile' element={ <Profile/> } />
        <Route path='recipes/*' element={ <RecipeList /> } />
        <Route path='published-recipes' element={ <PublishedRecipes /> } />
        <Route path='recipes/edit-recipe/:id' element={ <EditRecipe/> } />
        <Route path='recipes/add-recipe/*' element={ <AddRecipe/> } />
        <Route path='/recipes/:id' element={ <ShowRecipe/> } />
      </Routes>
    </RecipeContext.Provider>
  )
}

export default App;
