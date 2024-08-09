import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'

import './index.css'

//páginas
import Home from './routes/Home.jsx';
import Empresa from './routes/Empresa.jsx'
import Produtos from './routes/Produtos.jsx'
import Contato from './routes/Contato.jsx'
import Revendedor from './routes/Revendedor.jsx'


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/empresa",
        element: <Empresa />
      },
      {
        path: "/produtos",
        element: <Produtos />
      },
      {
        path: "/contato",
        element: <Contato />
      },
      {
        path: "/revendedor",
        element: <Revendedor />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
