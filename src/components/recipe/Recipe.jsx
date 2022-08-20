import "./Recipe.css"

export default function Recipe({recipe}) {

    return(
        <>
           <div className="header">
            <h2 className="cursive">{recipe.type}</h2>
            <hr/>
            <h1 className="title">{recipe.name}</h1> 
            <hr/>
            </div>
            <div className="preparation-info">
                <h3 className="cursive">Serves: {recipe.serves}</h3>
                <h3 className="cursive">Prep-Time: {recipe.preptime}</h3>
                <h3 className="cursive">Cook-Time: {recipe.cooktime}</h3>
            	{/* TO DO: 
                    servings, cook time, prep time */}
            </div>
            <div className="recipe-info flex-two">
                <div id="ingredients"><h3>Ingredients</h3></div>
                <div id="directions"><h3>Directions</h3>
                    <div className="border">{recipe.directions}</div></div>
                

            </div>
           <div id="tags" className="border">
                    <p>These are going to be tags over here...</p>
                </div>
           
           <div className="additional-info flex-two">
            <div id="nutrition">
                    <h3>Nutrition</h3>
            </div>
            <div id="notes" ><h3>Notes</h3></div>
           </div>
           
           <div id="food-img">
            <img src={recipe.imageUrl} alt="" />
            {/* Image needed here!  */}
           </div>

           

        </>
    )
}