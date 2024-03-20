import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import { Home, About, Contact,Github, User, Mayur } from "./components";
import {gitHubdataLoader} from "./components/Github/Github";

// Routing Methods :1
// const route = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />,
//       }
//     ]

//   }
// ])


// Routung Methods :2
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />} />
      <Route path='user/:id' element={<User />} />
      <Route loader={gitHubdataLoader} path='github' element={<Github />} />
    </Route>
  ));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
