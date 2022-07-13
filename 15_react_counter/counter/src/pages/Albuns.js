import React, { useEffect, useState } from "react";
import Template from "../templates/Template";
import Loading from "../components/Loading";
const Albuns = () => {

    const [albuns, setAlbuns] = useState([])
    const [loading, setLoading] = useState()

    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(data => {
                setAlbuns(data)
                setLoading(false)
            })
    }, [])



    return (
        <Template title="Albuns">
         
            <Loading visible={loading}/>
            
            
            {
                albuns.map(album => {
                    return (
                        <div>
                            <h3>{album.title} -  id: {album.id}</h3>
                        </div>

                    )
                })
            }

        </Template>
    )
}

export default Albuns