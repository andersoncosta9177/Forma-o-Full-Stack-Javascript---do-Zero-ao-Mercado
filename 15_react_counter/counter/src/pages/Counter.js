import React from "react";
import { useState, useEffect } from "react";
import './Counter.css'
// import Template from "./Template";


function Counter() {
    const [cont, setCont] = useState(0)
    const [teste, setTeste] = useState(123)

    useEffect(() => {
        console.log('ok,alterou o valor')
    }, [teste])


    const handleClick = (operador) => {
        const newValue = operador === "+" ? cont + 1 : cont - 1
        setCont(newValue)
    }


    return (
        <>
            <div className="counter">
                <span>{cont}</span>
                <button onClick={() => handleClick('-')}>-</button>
                <button onClick={() => handleClick('+')}>+</button>
                <button onClick={() => setTeste(321)}>teste</button>

            </div>
        </>
    )
}


export default Counter