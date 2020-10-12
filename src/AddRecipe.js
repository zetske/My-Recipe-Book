import React, { useState } from "react";
import getRecipes from "./utilities";
import './AddRecipe.css'
import SearchPhotos from "./SearchPhotos";

const getFieldValue = (id) => document.getElementById(id).value;

const handleSubmit = (event, image) => {
  event.preventDefault();
  const name = getFieldValue("recipe-title");
  const dishtype = getFieldValue("dishtype");
  const ingredients = getFieldValue("ingredients");
  const instructions = getFieldValue("instructions");
  let newRecipe = { name, dishtype, image, ingredients, instructions };
  const recipes = getRecipes();
  recipes.push(newRecipe);
  console.log(recipes)
  localStorage.setItem("recipes", JSON.stringify(recipes));
};

const AddRecipe = (props) => {
  const [url, setUrl] = useState('')

  const onImageSelection = (url) => {
    setUrl(url)
  }

  return (
    <div className="formBoard">
      <form
        onSubmit={(e) => {
          handleSubmit(e, url);
          props.showRecipeBook();
        }}
        className="newRecipe"
      >
        <input
          id="recipe-title"
          className="field"
          type="text"
          // required
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
        {/* <input id="image" className="field" type="file" label="Add Picture" /> */}
        <input
          className="field"
          type="text"
          // required
          id="ingredients"
          placeholder="Ingredients"
        />
        <input
          className="field"
          type="text"
          // required
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
