import React, { useState } from "react";
import { Link, Router, Routes, Route } from "react-router-dom";
import Status from "./Status";
function Navbar() {
  

  const [isDark, setisDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
    if(isDark){
        document.body.classList.add('dark_mode')
    }
    else{
        document.body.classList.remove('dark_mode')
    }


  return (
    <div>
      <div className=" flex justify-between  bg-gradient-to-r from-green-500 via-blue-500 ">
        <div className="font-extrabold font-lg text-left hover:scale-105  m-3  h-8  ">
          
          <Link className="pl-2 font-large   " to="/">
            {" "}
            Dsa tracker{" "}
          </Link>
          {/* </Route>
       </Routes>
       </Router> */}
        </div>

        <button className="m-3" onClick={()=>{
                    setisDark(!isDark)
                    localStorage.setItem('isDarkMode',!isDark)
                }}>
                <i className={`fa-regular fa-${isDark ? 'sun':'moon'}`} id="moon"></i>&nbsp;&nbsp;<span className="light font-bold">{isDark ? 'Light Mode' : 'Dark Mode'}</span>
       </button>
        
      </div>
     
      
      
      
    </div>
  );
}

export default Navbar;
