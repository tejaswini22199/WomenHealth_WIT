import React from 'react'
import {useState} from 'react'
import '../App.css'
import FitnessSuggestions from './FitnessSuggestions'
import gym from '../assets/gym.png'
const Fitness = () => {
    const [painpoint,setPainPoint]=useState('');
    
   const  clickHandler=(e)=>
    {
        setPainPoint(e.target.childNodes[0].data);
        
    }
    return (
        <div className="container main_header">
            <h1>Select Pain Points</h1>
            <div>
            <div className="painPoints">
                <div>
            <button onClick={e=>clickHandler(e)} className="painelements">HeadAche</button>
            <button  onClick={e=>clickHandler(e)} className="painelements">BackPain</button>
            <button  onClick={e=>clickHandler(e)} className="painelements">Hands</button>
            </div>
            <img src={gym} alt="IMG"/>
            </div>
            <FitnessSuggestions painpoint={painpoint}/>
            </div>
          
        </div>
    )
}

export default Fitness
