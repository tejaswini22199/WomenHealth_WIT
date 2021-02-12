import React from 'react'
import '../App.css'
const Labels = ({healthlabels}) => {
    return healthlabels.map((element) => <span class="badge rounded-pill bg-primary">{element}</span>);
   
}

export default Labels
