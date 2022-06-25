export default function Recipe({recipe}) {

    return(
        <>
           <h1 className="title">{recipe.name}</h1> 
           <h2>{recipe.type}</h2>

           {/* TO DO: 
           servings, cook time, prep time */}

        </>
    )
}