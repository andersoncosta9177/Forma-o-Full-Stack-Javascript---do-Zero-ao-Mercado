import React, {useState, useEffect } from 'react'

const Albuns = () => {

const [albuns,setAlbuns] =  useState()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(responde => responde.json())
        .then(data =>{
            console.log(data)
        })
        
    },[])

    return (
        <>
            <h1>Albuns</h1>
            {
                albuns.map(album => {
                    return (
                        <div>
                         <span>{album.title} -  {album.id}</span>
                        </div>
                    )
                })
            }

        </>

    )
}


export default Albuns