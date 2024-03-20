import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import {Home,About} from "./components";


const route = createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    children: [
      {
        path: '',
        element:<Home/>
      },
      {
        path: 'about',
        element:<About/>
      }
    ]

  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
