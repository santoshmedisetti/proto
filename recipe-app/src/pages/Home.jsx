import React, { useState, useEffect } from 'react';
import { fechrecipes } from '../../app';
import RecipeCard from "../components/RecipeCard";
import "../pages/Home.css";
import RecipeModel from '../components/RecipeModel';

const Home = () => {
  const [chickenRecipes, setChickenRecipes] = useState([]);
  const [soupRecipes, setSoupRecipes] = useState([]);
  const [exploreAll, setExploreAll] = useState([]);
  const [visiblecount,setVisiblecount]=useState(15);
  const [loading,setLoading]=useState(true);
  const [selectedRecipe,setSelectedRecipe]=useState(null);
  
 
  useEffect(() => {
    const fetchData = async () => {
      const chicken = await fechrecipes("chicken");
      setChickenRecipes(chicken.slice(0,6));

      const soup = await fechrecipes("soup");
      setSoupRecipes(soup.slice(0,6));

      const all = await fechrecipes("a");
      setExploreAll(all);
    };

    fetchData();
  }, []);

  const showmore=()=>{
    setVisiblecount((prev)=>prev+5);
  };

  return (
    <div className='home-container'>
      <div className='section'>
        <h2>Chicken Recipes</h2>
        <div className='recipe-grid'>
          {chickenRecipes.map(r => (
            <RecipeCard key={r.idMeal} recipe={r} seleted={setSelectedRecipe}/>
          ))}
        </div>
      </div>


      <div className='section'>
        <h2>soup Recipes</h2>
        <div className='recipe-grid'>
          {soupRecipes.map(r => (
            <RecipeCard key={r.idMeal} recipe={r} seleted={setSelectedRecipe}/>
          ))}
        </div>
      </div>

      <div className='section'>
        <h2>Explore All Recipes</h2>
        <div className='recipe-grid'>
          {exploreAll.slice(0,visiblecount).map(r => (
            <RecipeCard key={r.idMeal} recipe={r}  seleted={setSelectedRecipe}/>
          ))}
        </div>
        {
          visiblecount<exploreAll.length && <button className="load-more" onClick={showmore}>showmore</button>

          
        }
      </div>
      {selectedRecipe && (<RecipeModel recipe={selectedRecipe} 
      onclose={()=>setSelectedRecipe (null)}/>)}

    </div>
  );
};

export default Home;
