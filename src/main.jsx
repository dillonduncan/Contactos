import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
  //strictmode react lo usa para montar, desmontar y volver a montar para verificar si hay errores o
  //si algun bucle infinito que no debe ser(solo se usa en desarrollo, se quita cuando la app esta en produccion)
)
