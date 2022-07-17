import React from 'react'
import './Header.css'

function  Header({titulo,subtitulo}){
    return (
        <>
           <Header>
           <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
           </Header>
        </>
    )
}

export default Header