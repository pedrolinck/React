/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import './App.css'

function App() {


  const [toggle, setToggle] = useState()

  const handleToggle = () => {
    setToggle(!toggle);
  }
  
  return <Toggler toggle={toggle} onToggle={handleToggle} />
}

const Toggler = ({toggle, onToggle}) => {

  //useEffect
  useEffect(() => {
    console.log('I run on every mount')
  })

  return (
    <>
      <button type='button' onClick={onToggle}>
        Toggle
      </button>

      {toggle && <div>Hello World</div>}
    </>
  )
}

export default App
