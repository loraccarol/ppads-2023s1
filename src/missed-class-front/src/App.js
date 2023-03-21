import './App.css'
import Login from './pages/Login.js'
import Turmas from './pages/Turmas.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gerenciamento from './pages/Gerenciamento';

function App() {
  return (
    <Router basename='/'>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/turmas' element={<Turmas />} />
          <Route path='/gerenciamento' element={<Gerenciamento />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App
