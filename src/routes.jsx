import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import SobreMim from './pages/SobreMim';
import Inicio from './pages/Inicio';

function AppRoutes() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/sobremim' element={<SobreMim/>}/>
        <Route path='*' element={<div>Página não encontrada... :c</div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
