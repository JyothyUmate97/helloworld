import React from  "react"
import "./style.css"
import Button from "./Button"

const Apple =() =>{
  return(
    <div>
      <h1 style= {{textAlign : "center", fontSize:"50px", color:"#fff"}}>Welcome to React App</h1>
      <div className="middletext">
      <h1 style={{ fontSize:"50px", color:"#fff"}}>Hello Youtubers</h1>
      <br></br>
      <br></br>
      <Button buttontext = "Apple" />
      <Button buttontext = "Orange"/>
      <Button buttontext = "Mango"/>
      </div>
    </div>
  )
}

export default Apple