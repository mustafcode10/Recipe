import React,{useState, useEffect} from 'react'
import './App.css';
import Recipe from './components/recipe/Recipe'


const  App =()=> {
  // const [counter, setCounter]= useState(0)
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] =  useState('fish')


  const APP_ID = 'b69a2c0e'
  const APP_KEY = '2551500f992dc19086cbefd9809cc2c5'

  //const exampleApi = "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"
  

  useEffect(()=>{
    //  console.log('useEffect has been run')
    getRecipe()
    }, [query])

  const getRecipe = async () => {
    const response =  await  fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    //console.log(await response.json())
    const data = await response.json()
    // console.log(data.hits)
    setRecipes(data.hits)
  } 

  // you can use both  annynomous function or create your own function and  passed onChange 
  // to update search. there are  two  way to do it.
  const updatedSearch = e => {
    setSearch(e.target.value);
    //console.log(search)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch('')

  }


  
  return (
    <div className="App">
      <form  className="search-form"  onSubmit={getSearch} >
      <input
      className ="search-bar"
        type='text'
        value={search}
        // same its working also annynomous function to pass by onChange
        // onChange = {(e)=>{setSearch(e.target.value); console.log(search) } }
        onChange = {updatedSearch}
       />
       <button className="search-button" >search</button>
      </form>
      {/* <h2 onClick={()=> setCounter(counter + 1)}>{counter}</h2> */}
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe
        key={recipe.recipe.label}
        image = {recipe.recipe.image}
         title ={recipe.recipe.label}
         calories = {recipe.recipe.calories}
         ingredients = {recipe.recipe.ingredients}
         />
      ))}

      </div>

      


    </div>
  );
}

export default App;
