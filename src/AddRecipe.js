import React, { useState } from "react";
import './AddRecipe.css'
import SearchPhotos from "./SearchPhotos";

const getFieldValue = (id) => document.getElementById(id).value;

const handleSubmit = (event, image, props) => {
  event.preventDefault();
  const name = getFieldValue("recipe-title");
  const dishtype = getFieldValue("dishtype");
  const ingredients = getFieldValue("ingredients");
  const instructions = getFieldValue("instructions");
  let newRecipe = { name, dishtype, image, ingredients, instructions };
  props.addRecipe(newRecipe)
};

const AddRecipe = (props) => {
  const [url, setUrl] = useState('')

  const onImageSelection = (url) => {
    setUrl(url)
  }

  return (
    <div className="form-board">
      <form
        onSubmit={(e) => {
          handleSubmit(e, url, props);
          props.showRecipeBook();
        }}
        className="new-recipe"
      >
        <input
          id="recipe-title"
          className="field"
          type="text"
          required
          placeholder="Name your newest creation"
        />
        <label>
          Dish type
          <select id="dishtype">
            <option value="Starter">Starter</option>
            <option value="Main">Main</option>
            <option value="Side">Side</option>
            <option value="Dessert">Dessert</option>
          </select>
        </label>
        <textarea
          className="field"
          type="text"
          required
          id="ingredients"
          placeholder="Ingredients"
        />
        <textarea
          className="field"
          type="text"
          required
          id="instructions"
          placeholder="Instructions"
        />
        <SearchPhotos onImageSelection={onImageSelection}/>
        <input id="btn" className="field submit-btn" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddRecipe;
