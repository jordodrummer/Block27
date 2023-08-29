import {useState} from "react";  


export default function SignUpForm ({setToken}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const handleSubmit = async (e) => {e.preventDefault()
    try {
        const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', 
        { 
          method: "POST", 
          headers: { 
            "Content-Type": "application/json" 
          }, 
          body: JSON.stringify({ 
            username: username, 
            password: password 
          }) 
        })
        const result = await response.json();
setToken(result.token)
    } catch (error) {
        console.log(error)
    }
    
    
    }
console.log(username, password)



    return (
        <form onSubmit={handleSubmit}>
    
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

          <button type="submit">Submit</button>
        </form>
      ); 
}