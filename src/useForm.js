import { useState } from 'react'

//Handles Form data/errors
const useForm = () => {
  const [data, setData] = useState({})
  const [errors, setErrors] = useState({})

  const handleNext = e => {
    if(data.recipeName === ''){
      e.preventDefault()
      // setErrors('Name is required')
    }
  }

  return {
    data,
    setData,
    errors,
    setErrors
  }
}

export default useForm
