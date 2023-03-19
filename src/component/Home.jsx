import React, { useState } from 'react'
import { useEffect } from 'react'

const Home = () => {
    
    const [recipes, setRecipes] = useState([])
    const url = 'https://api.spoonacular.com/recipes/random?number=10&apiKey=85f1b5d51106439abb073ca13cff6caa'


    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setRecipes(data.recipes))

    }, [0])
    
    console.log(recipes);

  return (
    <div>
        <h1>Recetas</h1>
        {recipes.map(recipe => (
            <div key={recipe.id} style={{display:'flexbox', float:'left', padding:'auto', textAlign:'center', marginLeft:'6vh', flexDirection:'column'}}>
                <h3 style={{color: 'green'}}>{recipe.title}</h3>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent:'center'}}>
                <img src={recipe.image} alt='Imagen de plato' style={{width:'50vh'}}/>
                <button style={{width:'20vh', margin: 'auto', marginTop:'20px', backgroundColor:'green'}}>Ir a Receta</button>
            </div>
            </div>
        ))}

    </div>
  )
}

export default Home