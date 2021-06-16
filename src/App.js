import './App.css';
import Recipe from './components/Recipe';
import {useEffect,useState} from 'react';

function App() {
  const APP_KEY='4f88c997017cc437ef86cd72857a1e3b'
  const APP_ID='1ef3f748'

  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState('');
  const [query,setQuery]=useState('chicken')

  useEffect(() => {
    getRecipes()
  },[query]);

  const getRecipes= async ()=>{
      const response =await fetch(` https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data=await response.json();
      setRecipes(data.hits);
  }

  const setSearchHandler=e=>{
    setSearch(e.target.value)
  }

  const getSearch=e=>{
    e.preventDefault();
    setQuery(search)
    setSearch('');
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={setSearchHandler}/>
        <button type="submit" className="search-button" onClick={getRecipes}>Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe=>(
          <Recipe key={recipe.recipe.label} recipe={recipe} />
        ))}
      </div>

    </div>
  );
}

export default App;
