import React from 'react';
import GlobalStyle from './globalStyles';
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import {Navbar} from './components'
import Home from './pages/Homepage/Home';



function App ()  {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home/>} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App