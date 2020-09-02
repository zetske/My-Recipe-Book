import React from "react";
import recipes from "./Recipes";

const AddRecipe = (props) => {
    
  const getFieldValue = (id) => document.getElementById(id).value;

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = getFieldValue("name");
    const dishtype = getFieldValue("dishtype");
    const image = getFieldValue("image");
    const ingredients = getFieldValue("ingredients");
    const instructions = getFieldValue("instructions");
    let newRec = {name, dishtype, image, ingredients, instructions};
    recipes.push(newRec)
  };
  return (
    <div className='formBoard'>
      <form
      onSubmit={(e) => {
        handleSubmit(e);
        props.showRecipeBook()
      }}
      className="newRecipe"
    >
      <input
        id="name"
        className="field"
        type="text"
        required
        placeholder="Name your newest creation"
      />
      <label >
        Dish type
        <select id="dishtype">
          <option value="starter">Starter</option>
          <option value="main">Main</option>
          <option value="side">Side</option>
          <option value="dessert">Dessert</option>
        </select>
      </label>
      <input id="image" className="field" type="file" label="Add Picture" />
      <input
        className="field"
        type="text"
        required
        id="ingredients"
        placeholder="Ingredients"
      />
      <input
        className="field"
        type="text"
        required
        id="instructions"
        placeholder="Instructions"
      />
      <input id="btn" className="field" type="submit" value="Submit" />
     </form>
    </div>
  );
};

export default AddRecipe;
