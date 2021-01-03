import { useState } from "react";

import picture from "../images/picture.jpg"

export default function Profile () {

  const [loaded, setLoaded] = useState(false);


  return (
    
    <div className="overflow-hidden shadow-lg rounded-lg relative w-64 mb-5">
        <img 
          alt="profile" 
          src={picture} 
          className="rounded-lg transition-all fade-in" 
          style={loaded ? {} : {display: 'none'}}
          onLoad={() => setLoaded(true)}
          />
        <div className="absolute bg-gradient-to-b bg-opacity-60 from-transparent to-black w-full p-4 bottom-0">
            <p className="text-white text-2xl nb-4">
                Étienne LC
            </p>
            <div className="flex justify-between">
              <p className="text-sm text-gray-300 flex items-center">
                Montréal
              </p>
            </div>
        </div>
    </div>

  )
}