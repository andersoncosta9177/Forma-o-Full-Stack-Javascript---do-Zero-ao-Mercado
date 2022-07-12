import React from "react";
// import style  from './style.css'

const Content =({titulo,children})=>{
    return(
        <article className="content">
            <h2>{titulo}</h2>
            {children}

        </article>
    )
}

export default Content