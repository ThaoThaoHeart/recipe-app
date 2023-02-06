import { Link } from "react-router-dom"
import { useContext } from 'react'
import { FormContext } from '../context'

const InstructionsStep = () => {
  const { data, setData } = useContext(FormContext)
  

  return (
    <div>
      <label>Instructions: </label> 
      <textarea 
      type="textbox" 
      value={data.instructions}  
      onChange={e => {setData({...data, instructions: e.target.value})}}/> <br/>
      <Link to='../1/ingredients'><button>Back</button></Link>
      <Link to='../1/confirm'><button>Next</button></Link>
    </div>
  )
}

export default InstructionsStep
