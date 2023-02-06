import { useContext } from 'react'
import { FormContext } from '../context'

const Select = ({name, label, choices = []}) => {
  if (choices.length < 1) {
    throw new Error('Must pass choices per select')
  } 
  const { data, setData, errors, setErrors } = useContext(FormContext)

  const handleChange = e => {
    setData({...data, [name]: e.target.value})
  }

  return (
    <div className="field">
      <label>{label}</label>
      <select name={name} onChange={handleChange} defaultValue={data.category}>
        <option value="-1">Select</option>
        {choices.map(choice => 
          <option value={choice[0]} key={choice[0]}>
            {choice[1]}
          </option>
        )}
      </select>
    </div>
  )
}

export default Select
