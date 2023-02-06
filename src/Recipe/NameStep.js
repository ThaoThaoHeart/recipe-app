import Text from "../forms/Text"
import Select from "../forms/Select"
import Checkbox from "../forms/Checkbox"
import FormNav from "../forms/FormNav"

const NameStep = () => {

  return (
    <div>
      <Text name="recipe_name" label="Name: " isRequired/>
      <Select 
        name="category" 
        label="Category: " 
        choices={[
          ["breakfast", "Breakfast"],
          ["lunch", "Lunch"],
          ["dinner", "Dinner"],
        ]}
      />
      <Checkbox name="show_author" />
      <FormNav/>
    </div>
  )
}

export default NameStep
