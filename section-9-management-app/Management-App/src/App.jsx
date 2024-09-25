// import { useState } from 'react'
import InitialView from "./components/InitialView"
import Sidebar from "./components/Sidebar"

function App() {
  return(
    <div className="flex h-screen gap-8">
      <Sidebar />
      <InitialView />
    </div>
  )
}

export default App
