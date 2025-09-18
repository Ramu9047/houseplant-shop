// /// FILE: src/main.jsx
// import React from 'react'
// import { createRoot } from 'react-dom/client'
// import { Provider } from 'react-redux'
// import { BrowserRouter } from 'react-router-dom'
// import App from './App'
// import store from './store'
// import './styles/tailwind.css'


// createRoot(document.getElementById('root')).render(
// <React.StrictMode>
// <Provider store={store}>
// <BrowserRouter>
// <App />
// </BrowserRouter>
// </Provider>
// </React.StrictMode>
// )

import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import store from './store'
import './styles/tailwind.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/houseplant-shop">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
