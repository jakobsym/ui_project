import { useState, useEffect } from 'react'
import * as jwtd from 'jwt-decode';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState({})

  //TODO: add React Context to create a 'global state' for created user object
  function handleCallbackResponse(response) {
    console.log("encoded jwt id token: " + response.credential)

    // access user data behind jwt
    var userObj = jwtd.jwtDecode(response.credential)
    console.log(userObj)
    setUser(userObj)
    document.getElementById("signinDiv").hidden = true
  }

  function handleSignOut(event) {
    // TODO: Fix to use 'global state'
    setUser({})
    document.getElementById("signinDiv").hidden = false;    
  }
  
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "1090300539037-cdh1ug430oi6gsealeg7hp2vrrras9l3.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signinDiv"),
      { theme: "outline", size: "large"}
    ) 
    // use `google.accounts.id.prompt()`, or a button for login
  }, []);
  return (
    <>
      {/* Tailwind example on <h1> */}
      <h1 className='text-4xl italic rotate-180'>Vite + React</h1>

      {user &&
        <div>
          <img src={user.picture}></img>
          <h3>{user.name}</h3>
        </div>
      }

      <div id="signinDiv"></div>

      {/* user logged in,*/}
      { Object.keys(user).length != 0 &&
        <button onClick={(e) => handleSignOut()}>Sign out</button>
      }
    </>
  )
}

export default App
