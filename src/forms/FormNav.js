import { Link } from "react-router-dom"
const FormNav = () => {
  return (
    <div>
      <Link to='/recipes'><button>Back</button></Link>
      <Link to='1/ingredients'><button>Next</button></Link>
    </div>
  )
}

export default FormNav
