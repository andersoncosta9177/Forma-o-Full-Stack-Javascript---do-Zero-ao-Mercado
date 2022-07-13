import React from "react";
import Header from '../Headerr'
import Nav from '../Navv'

const Template = ({ children, pages, activePage,onChangePage }) => {
    const title = pages[activePage].text
    return (
        <>
            <Header title={title} />
            <Nav pages={pages} onChangePage={onChangePage}/>
            {children}
        </>

    )
}


export default Template