import React from "react";

class AddRecipec extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event, input) {
    alert("New Recipe Added!");
    event.preventDefault();
    console.log(input)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className='newRecipe'>
        <input className='field' id='name' type="text" required placeholder="Name your newest creation" />
        <label id='dishtype'>
          Dish type
          <select>
            <option value="starter">Starter</option>
            <option value="main">Main</option>
            <option value="side">Side</option>
            <option value="dessert">Dessert</option>
          </select>
        </label>
        <input className='field' id='picture' type="file" label="Add Picture" />
        <input className='field' id='ingredients' type="text" required id='addIngredients' placeholder="Ingredients" />
        <input className='field' id='instructions' type="text" required id='addInstructions' placeholder="Instructions" />
        <input className='field' id='btn' type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddRecipec;
