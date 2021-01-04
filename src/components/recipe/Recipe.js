import React from 'react'
import style from './recipe.module.css'


function Recipe({title, calories, image, ingredients}) {
    return (
        <div className={style.recipe}>
             <h1>{title}</h1>
            <h4>Colories {calories}</h4>
            <ol>
            <h2>Ingredients</h2>
                {ingredients.map(ingredient => (
                    <li> 
                        {ingredient.text}
                    </li>
                ))}
            </ol>
           
            <img className={style.image} src={image} alt = "recipe"/>
        </div>
    )
}

export default Recipe
