import React from "react";
// import style from './style.css'
import card from './card.css'


const Card =({imagem,titulo,texto})=>{

    return(
        <div className="card">
            <img src={imagem}/>
            <h3>{titulo}</h3>
            <p>{texto}</p>
        </div>
    )
}


export default Card