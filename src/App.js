import React, { useState } from "react";
import "./App.css";
import ShowRecipe from "./ShowRecipe";
import getRecipes from './utilities'

function App() {
  const recipes = getRecipes();
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

  console.log(current)
  console.log(recipes)

  const deleteRecipe = () => {
    const clonedRecipes = [...recipes];
    clonedRecipes.splice(current, 1);
    localStorage.setItem("recipes", JSON.stringify(clonedRecipes));
    console.log(current)
    console.log(recipes)

    next();
  }

  return (
    <div className="App">
      <header className="App-header">
        <ShowRecipe
          className="mainpage"
          recipe={currentRecipe}
          next={next}
          prev={prev}
          deleteRecipe={deleteRecipe}
          isLast={isLast}
          isFirst={isFirst}
        />
      </header>
    </div>
  );
}

export default App;
