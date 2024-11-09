/* eslint-disable react/prop-types */
import { useState } from 'react'
import './App.css'

const App = () => {
  // useState hook
  const [value, setValue] = useState(false)

  const handleClick = () => {
    setValue(!value)
  }

  return (
    <>
      <h3>The button bellow works with <i>useState</i> hook</h3>
      <button onClick={handleClick}>{value ? 'Hidden content' : 'Show content'}</button>
      {/* variable text receiving a string as value  */}
      {value ? <Props text = {"This text is passed as prop"}/> : null}
    </>
  )
}
// component receiving prop value called text
const Props = ({text}) => {
  return (
    <h3>{text}</h3>
  )
}

export default App
