import React from 'react'
import '../App.css'
import doctor from '../assets/doctor.png'
const periodtracker = () => {
    return (
        <div className="iperiod">
             <img className="imaged" src={doctor} alt="ALT"/>
        <div className="dialogflowbg">
           
        <iframe
    allow="microphone;"
    width="350"
    height="430"
    className="dialogflow"
    src="https://console.dialogflow.com/api-client/demo/embedded/09f9d7a8-0555-4fbd-a4a7-6889347ad804">
</iframe>
</div>
</div>
      
    )
}

export default periodtracker
