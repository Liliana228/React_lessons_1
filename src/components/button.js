import React, { useEffect, useState } from "react";
import Header from "./Header";

const Button = (props) => { // const - это функция. В куруглых скобках (props) - в качестве параметра
         const [click, setClick] = useState(0)  /*onClick/onMouseEnter - функция для действия уже встроенная*/
        
        useEffect (() => {
         document.title = `вы нажали ${click} раз`
        }
        )
         
         return (
           <button className="button1"
           onClick={() => setClick(click + 1)}> 
                  {props.text}
                  {click}
           </button> // выше обращаемся к параметру text
           )
         }

         Button.defaultProps = {
                  text: "Тык"
         }

export default Button