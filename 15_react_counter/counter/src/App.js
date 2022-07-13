import './App.css';
import Template from './templates/Template';
import React, { useState } from 'react';
import Counter from './pages/Counter';
import Albuns from './pages/Albuns'
import Users from './pages/Users';

pages




const pages = {
    albuns: {
        text: 'Albuns',
        component: Albuns
    },
    counter: {
        text: 'Contador',
        component: Counter
    },
    users: {
        text: 'Usuarios',
        component: Users
    }

}
function App() {
    const [page, setPage] = useState('albuns')

    const handleChangePage = page => {
        setPage(page)
    }

    const Page = pages[page].component

    return (

        <>
           <Template activePage={page} pages={pages} onChangePage={handleChangePage}>
           {Page && <Page />}
           </Template>
        </>

    )
}

export default App;
