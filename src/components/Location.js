import React, { useState } from 'react'
import { useParams} from "react-router-dom"

const Location = () => {

    const {id} = useParams()
 
   
    const [location , setaddress] = useState("")
    const [ans , setans]  = useState("")
    console.log(location)

    const hanleLocationSubmit = async (event) => {
        event.preventDefault();
     
        const response = await fetch(`http://localhost:8003/location/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({location}),
        });
        const result = await response.json();
        console.log(result)
        setans(result.location)
   
      };
  return (
    <div>
    <h1 style={{display :"flex", justifyContent : "center"}}>add location of user</h1>
    <form onSubmit={hanleLocationSubmit}>
    <label  style={{display :"flex", justifyContent : "center"}}>
         
          <input type="text" value={location} onChange={(e) => setaddress(e.target.value)} />
          <button type="submit" className="submit-button">Submit</button>
         
        </label>
       
      
    </form>
    <h2 style={{display :"flex", justifyContent : "center"}}>your location is {ans}</h2>
    </div>
  )
}

export default Location
