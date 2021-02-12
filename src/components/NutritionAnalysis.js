import React from 'react'
import {useEffect} from 'react'
const NutritionAnalysis = () => {
    const [nutriget,setNutriget]=useState('');
    useEffect(()=>
    {
        const fetchItems=async()=>
        {
            const response=await axios(`https://api.edamam.com/api/nutrition-data?app_id=${process.env.app_id}&app_key=${process.env.app_key}&ingr=one%20large%20apple`);
            console.log(response.data);
           
        }
        fetchItems();
    },[]);
    return (
        <div>
            <h1>GG</h1>
        </div>
    )
}

export default NutritionAnalysis
