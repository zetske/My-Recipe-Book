import React, { useState } from "react";
import "./App.css";
import ShowRecipe from "./ShowRecipe";
import getRecipes from "./utilities";

function App() {
  const originalRecipes = getRecipes();
  const [recipes, setRecipes] = useState(originalRecipes);
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const isFirst = 0 === current;
  const isLast = recipes.length - 1 === current;
  const currentRecipe = recipes[current];

  const addRecipe = (addedRecipe) => {
    const clonedRecipes = [...recipes];
    clonedRecipes.push(addedRecipe);
    setRecipes(clonedRecipes);
    localStorage.setItem("recipes", JSON.stringify(clonedRecipes));
  };
  const deleteRecipe = () => {
    const clonedRecipes = [...recipes];
    clonedRecipes.splice(current, 1);
    setRecipes(clonedRecipes);
    localStorage.setItem("recipes", JSON.stringify(clonedRecipes));
  };
  const editRecipe = (editedRecipe) => {
    const clonedRecipes = [...recipes];
    clonedRecipes.splice(current, 1, editedRecipe);
    setRecipes(clonedRecipes);
    localStorage.setItem("recipes", JSON.stringify(clonedRecipes));
  };
  return (
    <div className="App">
      <span id="logo">Click-Chef</span>
      <header className="App-header">
        <ShowRecipe
          className="mainpage"
          recipe={currentRecipe}
          next={next}
          prev={prev}
          addRecipe={addRecipe}
          deleteRecipe={deleteRecipe}
          editRecipe={editRecipe}
          isLast={isLast}
          isFirst={isFirst}
        />
      </header>
    </div>
  );
}