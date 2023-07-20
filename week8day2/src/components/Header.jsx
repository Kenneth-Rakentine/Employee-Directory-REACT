import React from "react"

function Header(props) {
  return (
    <div className="empDir">
    {props.container === "left" ? 
    <h3> Employee Directory </h3> : <h3> Employee </h3>}
    </div>
    
    )
}

export default Header