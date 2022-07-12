import React from "react";
import { useState, useEffect } from "react";
import './Counter.css'


function Counter() {
    const [cont, setCont] = useState(0)
    const [teste,setTeste] = useEffect('teste')

    useEffect(() => {
        console.log('ok,alterou o valor')
    }, [teste])


    const handleClick = (operador) => {
        const newValue = operador === "+" ? cont + 1 : cont - 1
        setCont(newValue)
    }


    return (
        <div className="counter">
            <span>{cont}</span>
            <button onClick={() => handleClick('-')}>-</button>
            <button onClick={() => handleClick('+')}>+</button>
            <button onClick={ ()=>setTeste('outro valor')}>teste</button>

        </div>
    )
}


export default Counter