import React from 'react'
import style from '../recipe.module.css'
const Recipe = ({recipe:{recipe}}) => {
    return (
        <div className={style.recipe}>
            <h1 >{recipe.label}</h1>
            <ol>
                {recipe.ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p><strong>Calories: </strong>{recipe.calories}</p>
            <img className={style.image} src={`${recipe.image}`} alt=""/>

        </div>
    )
}

export default Recipe;