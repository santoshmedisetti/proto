import "../styles/RecipeCard.css";

const RecipeCard = ({ recipe,seleted }) => {
  return (
    <div className='recipe-card' onClick={()=>seleted(recipe)}>
      <img src={recipe.strMealThumb} alt='' />
      <h3>{recipe.strMeal}</h3>
      <p>{recipe.strCategory}</p>
    </div>
  );
};

export default RecipeCard;
