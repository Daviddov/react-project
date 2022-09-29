import React from "react"
function FuncButtons(props) {
   return (
    <>
<button style={props.style} onClick={(e)=>props.onClick(e)}>{props.name}</button>
   </>
   )
}

export default FuncButtons