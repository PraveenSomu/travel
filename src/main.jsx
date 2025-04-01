
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Scroll } from './Components/Scroll.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Scroll/>
    <App />
  </BrowserRouter>,
)
