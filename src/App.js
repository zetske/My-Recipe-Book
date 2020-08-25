import React, { useState } from "react";
import "./App.css";
import ShowRecipe from "./ShowRecipe";
import recipes from "./Recipes";

function App() {
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
  return (
    <div className="App">
      <header className="App-header">
        <ShowRecipe
          className="mainpage"
          recipe={currentRecipe}
          next={next}
          prev={prev}
          isLast={isLast}
          isFirst={isFirst}
        />
      </header>
    </div>
  );
}

export default App;
