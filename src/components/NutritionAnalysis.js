import React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'
import '../App.css'
import Labels from './Labels'
import Searchbar from './Searchbar'
const NutritionAnalysis = () => {
//    const [nutriget,setNutriget]=useState('');
   const [query,setQuery]=useState('');
   const [fiber,setfiber]=useState('');
   const [carbs,setcarbs]=useState('');
   const [fats,setfats]=useState('');
   const [protein,setprotein]=useState('');
   const [healthlabels,setHealthlabels]=useState([]);
useEffect(()=>
    {
        const fetchItems=async()=>
        {
           const data= await axios(`https://api.edamam.com/api/nutrition-data?app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&ingr=1%20large%20apple`)
                 
                setfiber(data.totalDaily.FIBTG["quantity"]);
                setcarbs(data.totalDaily.CHOCDF["quantity"]);
                setfats(data.totalDaily.FAT["quantity"]);
                setprotein(data.totalDaily.PROCNT["quantity"]);
                setHealthlabels(data.healthLabels)
            }
        fetchItems();         
  }
    ,[]);
    // useEffect(()=>
    // {
    //     const fetchItems=async()=>
    //     {
    //         const data=await axios(`https://api.edamam.com/search?q=chicken&app_id=524f3769&app_key=06af0da7522e137c31e4ef667616c848`);
    //         console.log(data);
    //     }
    //     fetchItems();
    // },[]);
    
    return (
        <div>
            {/* <Searchbar getQuery={q=>setQuery(q)}/> */}
            <div className="nutrients-box">
            <h1>Nutrients in your food</h1>
            <li><strong>Fibre Percentage</strong>{fiber}</li>
            <li><strong>Carbohydrate Percentage</strong>{carbs}</li>
            <li><strong>Fat Percentage</strong>{fats}</li>
            <li><strong>Protein Percentage</strong>{protein}</li>
            <Labels healthlabels={healthlabels}/>
            </div>
        </div>
    )
}

export default NutritionAnalysis
