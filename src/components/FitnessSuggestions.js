import React from 'react'
import {useState,useEffect} from 'react'
import ReactPlayer from 'react-player/youtube'
import '../App.css'
// Only loads the YouTube player

const FitnessSuggestions = ({painpoint}) => {
    const [video1,setvideo1]=useState('');
    const [video2,setvideo2]=useState('');
    const [video3,setvideo3]=useState('');
    const [video4,setvideo4]=useState('');
   const painPoint={painpoint};
   const vi=[];
   useEffect(() => {
     if(painPoint.painpoint==='HeadAche'){
        vi.push('https://www.youtube.com/watch?v=4D28HgC_tFY');
        vi.push('https://www.youtube.com/watch?v=0NX1N6r17IY');
        vi.push('https://www.youtube.com/watch?v=AKoDOyV4fgI');
        vi.push('https://www.youtube.com/watch?v=mj2IBoPK8EU');
        
     }
     else if(painPoint.painpoint==='Hands'){
        vi.push('https://www.youtube.com/watch?v=g4Fe-A8E4Zw');
        vi.push('https://www.youtube.com/watch?v=tRnqF-AFFdw');
        vi.push('https://www.youtube.com/watch?v=6jHsraw2NIk');
        vi.push('https://www.youtube.com/watch?v=wK4II92qHDs');
     
    }
   else if(painPoint.painpoint==="BackPain"){
    vi.push('https://www.youtube.com/watch?v=2VuLBYrgG94');
        vi.push('https://www.youtube.com/watch?v=QDFFKOtuHh0');
        vi.push('https://www.youtube.com/watch?v=q9oK8KZf0J0');
        vi.push('https://www.youtube.com/watch?v=UYMmtEFhuxA');
        
    }
    setvideo1(vi[0]);
    setvideo2(vi[1]);
    setvideo3(vi[2]);
    setvideo4(vi[3]);
   }, [painPoint]);
  
  
    return (
            {vi}?
        <div className='player-wrapper'>
    
        <ReactPlayer  className='react-player' url={video1}/>
        <ReactPlayer  className='react-player' url={video2}/>
        <ReactPlayer  className='react-player' url={video3}/>
        <ReactPlayer  className='react-player' url={video4}/>
        </div>:<div>
            <h1>p</h1>
        </div>
    )
}

export default FitnessSuggestions
