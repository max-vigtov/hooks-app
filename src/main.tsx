import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import { MainApp } from './09-useContext/MainApp'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
)
