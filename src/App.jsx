import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import Sobre from './pages/Sobre'
import './App.css'
import './tema.css'
import AppTarefas from './pages/Tarefas/AppTarefas'
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext'
import ThemeToggleButton from './components/ThemeToggleButton'
import { useContext } from 'react'
import Usuarios from './pages/usuarios'

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className='escuro'>
          <nav>
            <ul>
              <li> <Link to="/">Home</Link> </li>
              <li> <Link to="/sobre">Sobre</Link> </li>
              <li> <Link to="/tarefas" > Tarefas </Link> </li>
              <li> <Link to="/usuarios" > Usuários </Link> </li>
            </ul>

            <ThemeToggleButton></ThemeToggleButton>
          </nav>
        </div>

        {/* Define as rotas */}
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="usuarios"  element={ <Usuarios/> } /> 
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/tarefas" element={ <AppTarefas/> } />
          </Routes>
        </div>
      </BrowserRouter>
    </ ThemeProvider>
  )
}

export default App;