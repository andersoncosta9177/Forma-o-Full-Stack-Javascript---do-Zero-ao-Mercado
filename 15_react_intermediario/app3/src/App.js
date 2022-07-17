import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Users from './pages/Users';
import Home from './pages/Home';
import News from './pages/News';
import Sobre from './pages/Sobre';

function App() {
  return (

    <Router>
      <Routes>

        <Route path="/users" element={<Users />} />
        <Route path="/news" element={<News/>} />
        <Route path="/about" element={<Sobre/>} />
        <Route path="/" element={<Home />} />


      </Routes>
    </Router>

  );
}

export default App;
