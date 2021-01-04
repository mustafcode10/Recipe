import React from 'react'

function Recipe({title, calories, image, ingredients}) {
    return (
        <div>
             <h1>{title}</h1>
            <h2>{calories}</h2>
            <ol>
                {ingredients.map(ingredient => (
                    <li>
                        {ingredient.text}
                    </li>
                ))}
            </ol>
           
            <img src={image} alt = "recipe"/>
        </div>
    )
}

export default Recipe
