import React from "react";
import "./recipe.css";
function Recipe({ title, calories, image, ingredients }) {
  return (
    <div className="recipe">
      <h1 className="title">{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <div>
            <li>{ingredient.text}</li>
          </div>
        ))}
      </ol>
      <p className="cal">Calories:{calories}</p>
      <img src={image} alt="" className="image"></img>
    </div>
  );
}

export default Recipe;
