import React, { useState } from 'react'

import Counter from './Counter'
import Albuns from './Albuns';
import Users from './Users'

const pages = {
  albuns: {
    text: 'Álbuns',
    component: Albuns,
  },
  counter: {
    text: 'Contador',
    component: Counter,
  },
  users: {
    text: 'Usuarios',
    component: Users,
  }

}
function App() {
  const [page, setPage] = useState('Álbuns')



  const handleChangePage = page => {
    setPage(page)
  }
  const Page = pages[page].component


  const pageNames = Object.keys(pages)
  return (
    <>
          
          {
            pageNames.map( page => <button onClick={ () => handleChangePage(page)}>{pages[page].text}</button>)
          }

      {Page && <Page />}
    </>



  );
}

export default App;
