import { useContext } from 'react'
import { FormContext } from '../context'

const Checkbox = ({name}) => {
  const { data, setData, errors, setErrors } = useContext(FormContext)

  const handleChange = e => {
    setData({...data, [name]: e.target.checked})
  }
  
  return (
    <div className="field">
      <input 
      type="checkbox" 
      name={name} 
      onChange={handleChange} 
      checked={data.show_author}/> Show Author 
    </div>
  )
}

export default Checkbox
