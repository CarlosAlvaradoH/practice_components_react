import { useState } from 'react'
import MyFirstComponent from './components/MyFirstComponent'
import SecondCompoment from './components/SecondComponent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <h1>Fundamentos de React!</h1>
    <MyFirstComponent />
    <SecondCompoment />
  </div>
  </>
  )
}

export default App
