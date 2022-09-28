import Rew from "./Rew";
import FuncButtons from "./FuncButtons";
import { useState } from "react";
function Context(props) {
    const [context1, setContext] = useState([])
  
    let word = <Rew styles={props.styles} context={props.context}/>
    let context = [word]
    
   function add(){
    context = context1
    context.push(word)
    setContext(context)
    console.log( context );
   }

   return (<div >
     {props.context}
        {/* {context1} */}
        {/* <FuncButtons onClick={add} name={'add'} /> */}
        <FuncButtons onClick={props.onClick} name={'add'} />
    
     
    
    </div>)
    
}

export default Context



