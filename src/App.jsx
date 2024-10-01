import { useState } from 'react'
import MyFirstComponent from './components/MyFirstComponent'
import SecondCompoment from './components/SecondComponent'
import Child from './components/Child'
import MyThirthComponent from './components/MyThirthComponent'
import FourthComponent from './components/FourthComponent'

import './App.css'

function App() {

  const [name, setName] = useState("Wendy Katherinne Gomez Villa");

  return (
    <div className="App">
      <header className="App-header">
        <hr className='white-hr'/>
        <FourthComponent />
        <hr className='white-hr'/>
        <Child
          name={name}
          setName={setName}
        />
        <hr className='white-hr'/>
      </header>
    </div>
  )
};

export default App

MyThirthComponent.prototype