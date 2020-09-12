import React from "react";

const getFieldValue = (id) => document.getElementById(id).value;

const handleSubmit = (event, props) => {
  event.preventDefault();
  const name = getFieldValue("name");
  const dishtype = getFieldValue("dishtype");
  const image = getFieldValue("image");
  const ingredients = getFieldValue("ingredients");
  const instructions = getFieldValue("instructions");
  let newRecipe = { name, dishtype, image, ingredients, instructions };
  props.editRecipe(newRecipe);
  props.setEditPrompt(false);
};

const EditRecipe = (props) => {
  return (
    <div className="formBoard">
      <form
        onSubmit={(e) => {
          handleSubmit(e, props);
          props.showRecipeBook();
        }}
        className="newRecipe edit-recipe"
      >
        <input
          id="name"
          className="field edit-name"
          type="text"
          required
          placeholder="Name your newest creation"
          defaultValue={props.recipe.name}
        ></input>
        <label>
          Dish type
          <select id="dishtype" className="edit-dishtype" defaultValue={props.recipe.dishtype}>
            <option value="Starter">Starter</option>
            <option value="Main">Main</option>
            <option value="Side">Side</option>
            <option value="Dessert">Dessert</option>
          </select>
        </label>
        <input
          id="image"
          className="field edit-image"
          type="file"
          label="Add Picture"
        ></input>
        <input
          className="field edit-ingredients"
          type="text"
          required
          id="ingredients"
          placeholder="Ingredients"
          defaultValue={props.recipe.ingredients}
        ></input>
        <input
          className="field edit-instructions"
          type="text"
          required
          id="instructions"
          placeholder="Instructions"
          defaultValue={props.recipe.instructions}
        ></input>
        <input
          id="btn"
          className="field edit-submit"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default EditRecipe;
