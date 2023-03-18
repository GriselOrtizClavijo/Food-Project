import { useState } from 'react'
import './App.css'
import ClassComponent from './component/ClassComponent'
import FunctionComponent from './component/FunctionComponent'
import RandomDog from './component/RandomDog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <RandomDog/>
    </div>
  )
}

export default App
