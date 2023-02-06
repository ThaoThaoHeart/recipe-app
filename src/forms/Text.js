import { useContext } from 'react'
import { FormContext } from '../context'

const Text = ({name, label, isRequired}) => {
  const { data, setData, errors, setErrors } = useContext(FormContext)

  const handleChange = e => {
    setData({...data, [name]: e.target.value})
  }

  const handleBlur = e => {
    if (isRequired) {
      setErrors({...errors, [name]: "Must fill this field"})
    }
  }

  return (
    <div className="field">
      <label>{label}</label>
      <input type="text" name={name} value={data[name] ? data[name] : ''} onBlur={handleBlur} onChange={handleChange}/>
      {errors[name] ? <div>{errors[name]}</div> : null}
    </div>
  )
}

export default Text
