import { Routes, Route } from 'react-router-dom'
import CatalogoSobre from './Pages/CatalagoSobre'
import HomePage from './HomePage'
import Pesquisar from './Pages/Pesquisar'
import FiltroFilmes from './Pages/FiltroFilmes'
import FiltroSerie from './Pages/FiltroSerie'
import FiltroDocumentario from './Pages/FiltroDocumentario'
import Header from './Pages/Header'
import Footer from './Pages/Footer'
import CatalogoSobreSeries from './Pages/CatalogoSobreSeries'
import { useState } from 'react'
import './App.css'

function App() {
  const [pagina, setPagina] = useState('Article')
  return (
    
   <div>
     <Header setPagina={setPagina}/>
  
    <Routes>
      <Route path="/inicio" element={<HomePage />} />
      <Route path="/catalogosobre" element={<CatalogoSobre />} />
    <Route path='/Pesquisa' element={<Pesquisar/>}/>
    <Route path='/CatalogoSobreSeries' element= {<CatalogoSobreSeries/>}/>
    <Route path= '/FiltroFilmes' element= {<FiltroFilmes/>}/>
    <Route path= '/FiltroSerie' element= {<FiltroSerie/>}/>
    <Route path= '/FiltroDocumentario' element= {<FiltroDocumentario/>}/>
    </Routes>
    
     </div>
  )
}

export default App
