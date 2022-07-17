import { Link } from 'react-router-dom'
import React from 'react'



const News = () => {
    return (
        <>
            <h1>news</h1>
            <ul>
                <li>
                    <Link to="/">home</Link>
                </li>
            </ul>
        </>
    )
}

export default News