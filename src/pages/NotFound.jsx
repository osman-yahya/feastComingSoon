import { useState } from "react"
import "./pages.css"
function NotFound() {

  const text = "Sayfa Bulunamadı!"


  return (
    <div className="notfound-container">
     
      <p className="home-title">{text}</p>
      
    </div>
  )
}

export default NotFound