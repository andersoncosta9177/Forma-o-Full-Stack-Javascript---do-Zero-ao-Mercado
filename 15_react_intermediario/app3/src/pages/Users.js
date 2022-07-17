import {Link}  from 'react-router-dom'
import React from 'react'



const Users=()=>{
    return(
        <>
       <h1>PAGINA INICIAL</h1>
       <ul>
        <li>
            <Link to="/">home</Link>
        </li>
       </ul>
        </>
    )
}

export default  Users