import './App.css'
import Login from './pages/Login.js'
import Turmas from './pages/Turmas.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gerenciamento from './pages/Gerenciamento';
import NaoDisponivel from './pages/NaoDisponivel';
import ListaProfs from './pages/ListaProfs';
import Chamada from './pages/Chamada';

function App() {
  return (
    <Router basename='/'>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/lista' element={<ListaProfs />} />
          <Route path='/turmas' element={<Turmas />} />
          <Route path='/gerenciamento' element={<Gerenciamento />} />
          <Route path='/chamada/:turmaId' element={<Chamada />} />
          <Route path='/*' element={<NaoDisponivel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
