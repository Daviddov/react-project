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
   [
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',],
      ['Q', "W", 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',],
      ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', "''",],
      ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/',],
   ],
];



function Keybords(props) {
   const [language, setLanguage] = useState(0)

   function changeLung() {
      language === 0 ? setLanguage(1) : setLanguage(0)
   }
   
   function changeCase() {
      language === 2 ? setLanguage(1) : setLanguage(2)
   }



   let KeybordMaker = Keybord[language].map((row, i) =>
      <div key={i}>
         {row.map((char, i) =>
            <Buttons key={i} value={char}
               clickHandel={(e) => props.clickHandel(e)}
            />)}
      </div>
   )
   return (
      <React.Fragment>
         {KeybordMaker}
         <FuncButtons onClick={changeLung} name={'HE/ENG'} />
         <FuncButtons onClick={changeCase} name={'Upper/Lower'} />
<hr />
      </React.Fragment>


   )
}

export default Keybords