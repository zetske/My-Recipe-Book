import React from "react";
import "./ShowRecipe.css";
import prev from "./prev.png";
import next from "./next.png";
import AddRecipe from "./AddRecipe";
import Trash from "./icons/trash";
import Edit from "./icons/edit";
import Add from "./icons/add";

function Recipe(props) {
  const displayLeftArrowStyle = props.isFirst ? "0.1" : "1";
  const displayRightArrowStyle = props.isLast ? "0.1" : "1";
  return (
    <div className="container">
      <a>
        <img
          className="prevArrow"
          onClick={() => (props.isFirst ? null : props.prev())}
          src={prev}
          style={{
            width: "50px",
            height: "50px",
            opacity: displayLeftArrowStyle,
          }}
          alt="previous recipe"
        />
      </a>

      <div className="RecipeBook recipe">
        <div className="pageOne">
          <h1 className='name'>{props.name}</h1>
          <h2 className='dishtype'>{props.dishtype} Dish</h2>
          <img className='recipeImage' src={props.image} alt="A Homemade Dish" />
        </div>
        <div className="pageTwo">
          <h1 className='ingredientsTitle'>Ingredients</h1>
          <h3 className='ingredients' >{props.ingredients}</h3>
          <h1 className='instructionsTitle'>Instructions</h1>
          <h3 className='instructions'>{props.instructions}</h3>
          <div className='bottomIcons'>
            <Add onClick={() => {
              console.log('clicked')
              props.showAddRecipe()
              }}></Add>
            <Edit onClick={() => console.log('edit-button clicked')}/>
            <Trash onClick={() => console.log('trash-button clicked')}/>
          </div>
        </div>
      </div>
      <a>
        <img
          className="nextArrow"
          onClick={() => (props.isLast ? null : props.next())}
          src={next}
          style={{
            width: "50px",
            height: "50px",
            opacity: displayRightArrowStyle,
          }}
          alt="next recipe"
        />
      </a>
    </div>
  );
}

function AddRecipeOption(props) {
  console.log(props)
  return (
    
      <Add onClick={props.onClick}/>
    
  );
}

function ShowRecipe(props) {
  const [newRecipe, setNewRecipe] = React.useState(false);
  const showAddRecipe = () => setNewRecipe(true);
  const showRecipeBook = () => setNewRecipe(false);
  return (
    <div>
      <h1 className="pageheader">My Recipe Book</h1>
      {newRecipe ? (
        <AddRecipe
          showRecipeBook={() => {
            showRecipeBook();
          }}
        />
      ) : (
        <>
          
          <Recipe
            isLast={props.isLast}
            isFirst={props.isFirst}
            prev={props.prev}
            next={props.next}
            name={props.recipe.name}
            dishtype={props.recipe.dishtype}
            image={props.recipe.image}
            ingredients={props.recipe.ingredients}
            instructions={props.recipe.instructions}
            showAddRecipe={showAddRecipe}
          >
            {/* <AddRecipeOption onClick={onClick} /> */}
            <Add onClick={() => {
              console.log('clicked')
            }}/>
          </Recipe>
          
          {/* <Add onClick={onClick} /> */}
        </>
      )}
    </div>
  );
}

export default ShowRecipe;
