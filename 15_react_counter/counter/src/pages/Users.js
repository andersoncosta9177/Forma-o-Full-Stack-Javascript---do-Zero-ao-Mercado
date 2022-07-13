import React, { useEffect, useState } from "react";
// import Template from "./Template";
import Loading from "../Loadingg";
function Users() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState()


    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data)
                setLoading(false)
            })
    }, [])


    return (
        <>

            <Loading visible={loading}/>
            {
                users.map(user => {
                    return (
                        <div style={{ margin: '20px' }}>
                            <b>Nome:</b> {user.name}  <br />
                            <b>Sobrenome: </b>  {user.username}  <br />
                            <b>Email: </b> {user.email}  <br />
                            <b>Telefone: </b> {user.phone}  <br />
                            <hr />
                        </div>

                    )
                })
            }

        </>
    )
}

export default Users