import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import router from './routes';
import './global.css'
import { Menu } from './components/Menu.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <Menu isHome={router.state.location.pathname === "/"}>
      <App />
    </Menu>
  </React.StrictMode>,
)
