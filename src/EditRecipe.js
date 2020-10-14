import React, { useState } from "react";
import SearchPhotos from "./SearchPhotos";

const getFieldValue = (id) => document.getElementById(id).value;

const handleSubmit = (event, props, image) => {
  event.preventDefault();
  const name = getFieldValue("recipe-title");
  const dishtype = getFieldValue("dishtype");
  const ingredients = getFieldValue("ingredients");
  const instructions = getFieldValue("instructions");
  let newRecipe = { name, dishtype, image, ingredients, instructions };
  props.editRecipe(newRecipe);
  props.setEditPrompt(false);
};

const EditRecipe = (props) => {
  const [url, setUrl] = useState(props.recipe.image)
  const onImageSelection = (url) => {
    setUrl(url)
  }
  return (
    <div className="form-board">
      <form
        onSubmit={(e) => {
          handleSubmit(e, props, url);
          props.showRecipeBook();
        }}
        className="new-recipe edit-recipe"
      >
        <input
          id="recipe-title"
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
        <textarea
          className="field edit-ingredients"
          type="text"
          required
          id="ingredients"
          placeholder="Ingredients"
          defaultValue={props.recipe.ingredients}
        />
        <textarea
          className="field edit-instructions"
          type="text"
          required
          id="instructions"
          placeholder="Instructions"
          defaultValue={props.recipe.instructions}
        />
        <img id='edit-recipe-img' src={props.recipe.image} alt='a delicious dish' width='250px'/>
         <SearchPhotos onImageSelection={onImageSelection}/>
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
