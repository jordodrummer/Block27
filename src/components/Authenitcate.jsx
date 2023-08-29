import { useState } from "react";

export default function Authenticate({token}) {
    const [authSuccesData, setAuthSuccesData] = useState(null);
    const handleClick = async ()=>{

    try {
           const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', 
    { 
      method: "GET", 
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` 
      }
    })  
    const result = await response.json();
    setAuthSuccesData(result.data)
    
} catch (error) {
        console.log(error)
    }  
    }
    
    return <div><button
    type='submit'
  onClick={handleClick}
        >
  Authenticate Token!
</button><p>{authSuccesData && authSuccesData.username}</p></div>

  }