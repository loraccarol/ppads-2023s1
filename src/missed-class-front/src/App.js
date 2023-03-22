import './App.css'
import Login from './pages/Login.js'
import Turmas from './pages/Turmas.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gerenciamento from './pages/Gerenciamento';
import NaoDisponivel from './pages/NaoDisponivel';

function App() {
  return (
    <Router basename='/'>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/turmas' element={<NaoDisponivel />} />
          <Route path='/gerenciamento' element={<Gerenciamento />} />
          <Route path='/*' element={<NaoDisponivel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
