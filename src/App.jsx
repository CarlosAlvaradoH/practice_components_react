import { useState } from 'react'
import MyFirstComponent from './components/MyFirstComponent'
import SecondCompoment from './components/SecondComponent'
import Child from './components/Child'
import MyThirthComponent from './components/MyThirthComponent'
import FourthComponent from './components/FourthComponent'

import './App.css'

function App() {
  const [name, setName] = useState("Carlos Alvarado")

  return (
    <>
    <div>
    <h1>Fundamentos de React!</h1>
    <MyThirthComponent 
    name = "Ines"
    last_name="Oliveros"
    age="20"
    />
    <hr />
    <Child 
    name= {name}
    setName={setName}/>
    <hr />
  </div>
  <FourthComponent/>
  </>
  )
}

export default App

MyThirthComponent.prototype