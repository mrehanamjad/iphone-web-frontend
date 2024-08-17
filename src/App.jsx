import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      {/* <Highlight /> */}
      <h1>ahishihaosohohohohoho</h1>
    </>
  )
}

export default App
