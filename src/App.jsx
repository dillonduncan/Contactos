import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usuario from './componets/usuario/Usuario'

function App() {
  return (
    <>
      <div>
        <Usuario nombre="Messi" apodo="Lio" edad={7} />
      </div>
    </>
  )
}

export default App
