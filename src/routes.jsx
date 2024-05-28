import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import SobreMim from './pages/SobreMim';
import Inicio from './pages/Inicio';
import Menu from './components/Menu/index';
import Rodape from './components/Rodape/index';

function AppRoutes() {


  return (
    <BrowserRouter>
      <Menu/>

      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/sobremim' element={<SobreMim/>}/>
        <Route path='*' element={<div>Página não encontrada... :c</div>}/>
      </Routes>

      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes
