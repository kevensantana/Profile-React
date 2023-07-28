import './App.css'
import Experiencia from './components/Experiencias.tsx'
import Home from './components/Home.tsx'
import Menu from './components/Menu.tsx'
import Sobre from './components/Sobre.tsx'
import Educacao from './components/Educacao.tsx'

function App() {
  return (
    <>
      <Menu />
      <Home />
      <Sobre />
      <Experiencia />
      <Educacao />
    </>
  )
}

export default App
