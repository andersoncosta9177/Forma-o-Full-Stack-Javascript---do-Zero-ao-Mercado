import {Link}  from 'react-router-dom'
import React from 'react'



const Home=()=>{
    return(
        <>
       <h1>PAGINA INICIAL</h1>
       <ul>
        <li>
            <Link to="/users">Usuarios</Link>
        </li>
        <li>
        <Link to="/news">News</Link>
        </li>
        <li>
        <Link to="/about">Sobre</Link>
        </li>
       </ul>
        </>
    )
}

export default  Home