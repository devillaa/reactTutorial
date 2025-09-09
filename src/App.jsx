import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import Sobre from './pages/Sobre'
import './App.css'
import AppTarefas from './pages/Tarefas/AppTarefas'
import { ThemeProvider } from './contexts/ThemeContext'
import ThemeToggleButton from './components/ThemeToggleButton'

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <nav>
          <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/sobre">Sobre</Link> </li>
            <li> <Link to="/tarefas" > Tarefas </Link> </li>
          </ul>

          <ThemeToggleButton></ThemeToggleButton>
        </nav>
        
        {/* Define as rotas */}
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/tarefas" element={ <AppTarefas/> } />
          </Routes>
        </div>
      </BrowserRouter>
    </ ThemeProvider>
  )
}

export default App;