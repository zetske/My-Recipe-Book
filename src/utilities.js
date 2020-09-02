import staticRecipes from "./Recipes";

function returnRecipes() {
  let recipes = [];
  const lsRecipes = localStorage.getItem("recipes");
  if (lsRecipes) {
    const parsedRecipes = JSON.parse(lsRecipes);
    recipes = parsedRecipes;
    // if recipes present in local storage, use stored recipes
  } else {
    recipes = staticRecipes;
    // if no recipes present in local storage, use static recipes
  }
  return recipes;
}

export default returnRecipes