const YOUR_APP_ID="0da3ddf9";
const YOUR_APP_KEY="8b85c399a0e0bfc931526565dc827709";

export async function fetchRecipes (filter){
    const {query, limit} = filter;
    

    // const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}`;

    const url = `https://api.edamam.com/search?q=${query}& app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=${limit}&`;


    const response = await fetch(url)

    const data = await response.json();

    return data?.hits;
}

export async function fetchRecipe(id){
const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
// const url = `https://api.edamam.com/search?q=${id}& app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

const response = await fetch(url)

const data = await response.json();

return data[0];
// return data?.hits;
}