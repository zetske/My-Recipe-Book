import React from "react";
import "./ShowRecipe.css";
import prev from "./nav/prev.png";
import next from "./nav/next.png";
import AddRecipe from "./AddRecipe";
import Trash from "./icons/trash";
import Edit from "./icons/edit";
import Add from "./icons/add";
import Modal from "./modal";
import EditRecipe from "./EditRecipe";

function Recipe(props) {
  const displayLeftArrowStyle = props.isFirst ? "0.1" : "1";
  const displayRightArrowStyle = props.isLast ? "0.1" : "1";

  return (
    <div className="container">
        <img
          className="prev-arrow"
          onClick={() => (props.isFirst ? null : props.prev())}
          src={prev}
          style={{
            width: "50px",
            height: "50px",
            opacity: displayLeftArrowStyle,
          }}
          alt="previous recipe"
        />
      <div className='page page-one-back-1'></div>
        <div className='page page-one-back-2'></div>
        <div className='page page-one-back-3'></div>
        <div className='page page-one-back-4'></div>
        <div className="page page-one">
          <h1 className="name">{props.name}</h1>
          <h2 className="dishtype">{props.dishtype} Dish</h2>
          <img
            className="recipeImage"
            src={props.image}
            alt="A Homemade Dish"
          />
        </div>
        <div className="page page-two">
          <div className='recipe-info'>
          <h1 className="ingredientsTitle">Ingredients</h1>
          <h3 className="ingredients">{props.ingredients}</h3>
          <h1 className="instructionsTitle">Instructions</h1>
          <h3 className="instructions">{props.instructions}</h3>
          </div>
          <div className="bottom-icons">
            <Add
              onClick={() => {
                props.showAddRecipe();
              }}
            ></Add>
            <Edit onClick={() => {
              props.showEditPrompt();
              }} 
            />
            <Trash
              onClick={() => {
                props.showDeletePrompt();
              }}
            />
          </div>
          
        </div>
        <div className='page page-two-back-1'></div>
        <div className='page page-two-back-2'></div>
        <div className='page page-two-back-3'></div>
        <div className='page page-two-back-4'></div>
        <img
          className="next-arrow"
          onClick={() => (props.isLast ? null : props.next())}
          src={next}
          style={{
            width: "50px",
            height: "50px",
            opacity: displayRightArrowStyle,
          }}
          alt="next recipe"
        />
    </div>
  );
}

function ShowRecipe(props) {
  const [newRecipe, setNewRecipe] = React.useState(false);
  const showAddRecipe = () => setNewRecipe(true);
  const showRecipeBook = () => setNewRecipe(false);

  const [deletePrompt, setDeletePrompt] = React.useState(false);
  const showDeletePrompt = () => setDeletePrompt(true);

  const [editPrompt, setEditPrompt] = React.useState(false);
  const showEditPrompt = () => setEditPrompt(true);

  return (
    <div className="main">
      {newRecipe ? (
        <AddRecipe
          showRecipeBook={() => {
            showRecipeBook();
          }}
        />
      ) : (
        <>
          {deletePrompt ? (
            <Modal closeModal={() => setDeletePrompt(false)}>
              <p>Are you sure you want to delete this recipe?</p>
              <button
                onClick={() => {
                  props.deleteRecipe();
                  setDeletePrompt(false);
                }}
                className="yesBtn"
              >
                Yes
              </button>
              <button
                onClick={() => {
                  setDeletePrompt(false);
                }}
                className="noBtn"
              >
                No
              </button>
            </Modal>
          ) : (
            <></>
          )}

          {editPrompt ? (
            <Modal closeModal={() => {
              setEditPrompt(false)}}
             >
              <EditRecipe 
              setEditPrompt={setEditPrompt}
              editRecipe={props.editRecipe}
              recipe={props.recipe} 
              showRecipeBook={showRecipeBook}/>
            </Modal>
          ) : (
            <></>
          )}
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
            showDeletePrompt={showDeletePrompt}
            showEditPrompt={showEditPrompt}
          >
          </Recipe>
        </>
      )}
      
    </div>
  );
}

export default ShowRecipe;
