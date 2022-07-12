import React from "react";
import cards from './cards.css'

function Cards({ children }) {
    return (

        <div className="cards">
            {children}
        </div>
    )
}


export default Cards