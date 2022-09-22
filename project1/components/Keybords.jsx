import Buttons from "./Buttons";

const HeKeybord = [
        [ 
     ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ],
     ['/', "'", 'ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ', ],
     ['ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף', ],
     ['ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ', '.', ],
     [' ']
        ],
        [ 
     ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ],
     ['q', "w", 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', ],
     ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', ],
     ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', ],
        [' ']
        ],
        
     ];

function Keybords(props) {
    let Language = props.Language || 0 ;
     
 return HeKeybord[Language].map((row, i)=> 
 <div key={i}>
    { row.map((char, i)=>
 <Buttons key={i}  value={ char }
 clickHandel={(e)=>props.clickHandel(e)} 
 />)} 
 </div>
 )
}

export default Keybords