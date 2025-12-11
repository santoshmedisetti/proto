export const fechrecipes=async (query ="") => {
    try{
        const res=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data=await res.json();
        return data.meals || [];

    }catch(err){
        console.log("Error feching data ",err);
        return [];
    }
};