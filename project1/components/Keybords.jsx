import React, { useState } from "react";
import Buttons from "./Buttons";
import FuncButtons from "./FuncButtons";
const Keybord = [
   [
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',],
      ['/', "'", 'ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ',],
      ['ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף',],
      ['ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ', '.',],
   ],
   [
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',],
      ['q', "w", 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',],
      ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';',],
      ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/',],
   ],

];



function Keybords(props) {
   const [language, setLanguage] = useState(0)

   function changLung() {
      language === 0 ? setLanguage(1) : setLanguage(0)
   }

  

   let KeybordMaker = Keybord[language].map((row, i) => 
      <div key={i}>
         {row.map((char, i) =>
            <Buttons  key={i} value={char}
               clickHandel={(e) => props.clickHandel(e)}
            />)}
      </div>
   )
   return (
      <React.Fragment>
      {KeybordMaker}
       <FuncButtons onClick={changLung} name={'HE/ENG'} />
      
         </React.Fragment>


   )
}

export default Keybords