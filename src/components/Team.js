import React from 'react'
import Tejaswini from '../assets/Tejaswini.jpg'
import '../tailwind.css'
import '../tailwind.min.css';
const Team = () => {
    return (
      //  <!-- component -->
<div class="min-h-screen bg-gray-200 flex justify-center items-center">
 
   <div class="max-w-sm bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
      <div id="header" class="flex items-center mb-4"> 
         <img alt="avatar" class="w-20 rounded-full border-2 border-gray-300" src={Tejaswini} />
         <div id="header-text" class="leading-5 ml-6 sm">
            <h4 id="name" class="text-xl font-semibold">Tejaswini</h4>
            <h5 id="job" class="font-semibold text-blue-600">Developer</h5>
         </div>
      </div>
      <div id="quote">
         <q class="italic text-gray-600">Final Year undergrad student at National Institute of Technology Warangal</q>
      </div>
      <div class="text-center my-3">
                <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="https://github.com/tejaswini22199">View Profile</a>
            </div>
      {/* <button class="py-2 px-4 shadow-md no-underline rounded-full bg-blue text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2">Primary</button>
  <button class="py-2 px-4 shadow-md no-underline rounded-full bg-orange text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2">Alert</button> */}
   </div>
        </div>
    )
}

export default Team
