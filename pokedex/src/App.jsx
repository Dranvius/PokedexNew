//import { useState } from 'react'
import {ListPokedex} from './pages/ListPokedex.jsx'

import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { Pokedex } from "./pages/Pokedex.jsx"; //!Especificar que se mostrara

import './style/estilos.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>

   
    <BrowserRouter>
        
        <Routes>
       
          <Route path="/" element={<ListPokedex />} />
          <Route path="/profile/:index" element={<Pokedex />} />
      
        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
