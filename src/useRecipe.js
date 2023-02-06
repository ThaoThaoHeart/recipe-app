import { useState, useEffect } from "react"

//Communicate with API
const useRecipe = () => { 
  const [recipes, setRecipes] = useState([])

  let url = 'http://localhost:3001/recipes/'

  useEffect(()=> {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setRecipes(data)
      })
      .catch(error => {
        console.log(error)
      })
  },[])

  //Create recipe
  const createRecipe = data => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .catch(error => {
      console.log(error)
    }) 

  }

  // const updateRecipe = id => {
  //   let recipeUrl = url+id
  //   fetch(recipeUrl,{
  //     method: 'PUT', 
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify(recipe)
  //   })
  //   .then(res => res.json())
  //   .catch(error => {
  //     console.log(error)
  //   })

  // }

  const removeRecipe = id => {
    //Todo - After delete refresh list
    let recipeUrl = url+id
    fetch(recipeUrl,{
      method: 'DELETE'
    })
    .then(res => res.json())
    .catch(error => {
      console.log(error)
    })
  }


  return {
    recipes,
    createRecipe,
    removeRecipe,
  }
}

export default useRecipe
