import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CallbackHooks } from './06-memos/CallbackHooks'
import { Padre } from './07-tarea-memo/Padre'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Padre />
  </StrictMode>
)
