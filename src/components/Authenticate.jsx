import {useState} from "react";

export default function Authenticate({ token }) {
    
    const[error, setError] = useState(null)
    const[successMessage, setSuccessMessage] = useState(null)
    const[loggedInUser, setLoggedInUser] = useState(null)

    async function handleClick(){
        try {
            const response  = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate',
            {
                method: 'GET',
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization' : `Bearer ${token}`
                }
            })
            const result = await response.json()
            setSuccessMessage(result.message)
            setLoggedInUser(result.data.username)
            console.log(result.data)
        } catch(error) {
            setError(error.message)
        }
    }


    return (
        <>
        <h2>Authenticate</h2>
        {successMessage && <p>{successMessage}</p>}
        {loggedInUser && <p>Logged in as: {loggedInUser}</p>}
        {error && <p>{error}</p>}
        <button onClick={handleClick}>Click</button>
        </>
    )
}