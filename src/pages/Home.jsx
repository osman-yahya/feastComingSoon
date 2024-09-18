import { useState } from "react"
import "./pages.css"
function home() {

  const text = "feast. - Çok Yakında!"


  return (
    <div className="home-container">
     
      <p className="home-title">{text}</p>
      
    </div>
  )
}

export default home