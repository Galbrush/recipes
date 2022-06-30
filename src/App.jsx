
import { useState } from "react"
import Recipe from "./components/recipe/Recipe"
import recipes from "./recipes.json"
import "./App.css"

export default function App() {
    

    const[selectedRecipe, setSelectedRecipe] = useState(recipes.recipes[0])
    
    return (
        <main>
    
        <select name="Recipes" onChange={(event)=>{setSelectedRecipe(recipes.recipes[event.target.value])}}>
            {
                recipes.recipes.map((recipe, index) => {
                    return (
                        <option value={index}>{recipe.name}</option>
                    )
                })
            }
        </select>
        <Recipe recipe={selectedRecipe}/>


            
        </main>
        
    )
} 