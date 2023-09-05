
import './App.css'
import Header from './components/Header'


import Cubos from './components/Cubos'
import Parte3 from './components/Parte3'
import Parte4 from './components/Parte4'
import { useData } from './Data/useData'

function App() {

   
  return (
    <>
      <Header datos = {useData}/>
      <h1>{useData.autor}</h1>
      <hr />
      <Cubos />
      <Parte3 datos = {useData}/>
      <Parte4 datos = {useData}/>
      
    </>
  )
}

export default App
