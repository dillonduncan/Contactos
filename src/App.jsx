import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usuario from './componets/pruebas/usuario/Usuario'
import Counter from './componets/pruebas/counter/Counter'
import Text from './componets/pruebas/text/Text'
import ItemListContainer from './componets/pruebas/consumirJson/ItemListContainer'
import Pokemon from './componets/pruebas/pokeApi/Pokemon'

function App() {
  return (
    <>
      <div>
        {/* <Usuario nombre="Messi" apodo="Lio" edad={7} /> */}
        {/* <Counter /> */}
        {/* <Text/> */}
        {/* <ItemListContainer/> */}
        <Pokemon/>
      </div>
    </>
  )
}

export default App
