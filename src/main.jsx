import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles/App.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { Store } from './Store/Store.jsx'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
