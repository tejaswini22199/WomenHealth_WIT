import React from 'react'
import '../App.css'
import Bmi from './Bmi'
import Meditating_ from '../assets/Meditating_.png'
const Home = () => {
    return (
        <div>
        <div className="container home">
            <img src={Meditating_} alt="IMG" />
            <Bmi/>
        </div>
        </div>
    )
}

export default Home
