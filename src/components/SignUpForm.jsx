import { useState } from "react";

export default function SignUpForm({ setToken }) {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    
    async function handleSubmit(event){
        event.preventDefault();


        try {

            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                })
                
            });
         
            const result = await response.json()
            setToken(result.token)
            console.log(result)
           
        } catch(error) {
            setError(error.message);
    }
}
    
    return(
    <>
    <h2>Sign up!</h2>

  {error && <p>{error}</p>}

    <form onSubmit={handleSubmit}>
        <label>
            Username: <input className='username' value={username} onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
            Password: <input className='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <button>Submit</button>
    </form>
    </>
    
)}
