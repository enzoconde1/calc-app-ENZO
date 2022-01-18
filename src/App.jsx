/* eslint no-eval: 0 */
import words from "lodash.words";
import React, { useState } from "react";
import './App.css';
import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations";
import Numbers from "./components/Numbers";
import Result from "./components/Result";

const App = () => {

    const [display, setDisplay] = useState('')

    const items = words(display, /[^-^+^*^/]+/g)
    const result = items.length > 0 ? items[items.length-1] : "0"
    
    return (
        <main className='react-calculator'>
            <Result value={result}/>
            <Numbers 
                onClickNumber={number => {
                    setDisplay(`${display}${number}`)
                }}
            />
            <Functions 
                onContentClear={borradoCompleto => {
                    setDisplay('')
                }}
                onDelete={borrar => {
                    if (display.length > 0 ) {
                        const newDisplay = display.substring(0, display.length - 1)
                        setDisplay(newDisplay)
                    }
                }}
            />
            <MathOperations 
                onClickOperation={operation => {
                    setDisplay(`${display}${operation}`)
                }}
                onClickEqual={igual => {
                    setDisplay(eval(display).toString())
                }}
            /> 
        </main>)
}

export default App;