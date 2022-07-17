import React from "react";
import { Link } from "react-router-dom";

const Home=()=>{
    return(
        <>
        <h1>HOME</h1>
        <ul>
            <li>
              <Link to="/users"></Link>
            </li>
        </ul>
        </>
    )
}


export default Home