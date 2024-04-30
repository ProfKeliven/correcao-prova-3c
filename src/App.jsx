import './App.css'
import Evento from './components/Evento'
import Galeria from './components/Galeria'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'

function App() {

  return (
    <>
      <Cabecalho />
      <Evento 
        titulo={"Evento do senai"}
        descricao={"Descrição do evento"}
        horario={"29/04/2024 as 11 horas"}
        local={"Senai São José"}
      />
      <Galeria />
      <Rodape />
    </>
  )
}

export default App
