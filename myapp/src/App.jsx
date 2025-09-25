import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import founderImg from "./assets/images/founder-4m-subscribers.webp"

function App() {
  let n = 10
  let m = 20

  let cname = "Ws"

  let status = true

  let user = ["ram", "shyam", "hari", "gita", "laxmi", "krishna"]

  let alluser= user.map((value,index)=><div> {index+1} { value}</div>)



  return (
    <>

      {alluser}
      <ul style={{textAlign:"left"}}>
        {
        user.map(
          (value, index) => {
            return (
                <>
                   {index%2==0 && <li> {  value } </li>  }
                      
                </>
               
            )
          }
        )
        
        }
      </ul>


      {user.map((value,index)=> <h3> {index+1}  {value} </h3>)}

      <div style={{ color: "red", fontSize: "25px" }}>
        Welcome
      </div>

      <img src="/vite.svg" alt="" />
      <img src={founderImg} />

      <h1>  Welcome {n + m} {cname}   </h1>

      {
        status ?

          <p>Welcome to ws</p>

          :
          <p>No Data Found</p>
      }


      {status && <p>True Ans</p>}





    </>
  )
}

export default App
