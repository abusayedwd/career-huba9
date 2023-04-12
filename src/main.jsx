import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Appyed from './Components/AppyedJob/Appyed';
import Blog from './Components/Blogs/Blog';
import Jobdetail from './Components/Jobdetails/Jobdetail';
 
const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path: 'statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'detail/:id',
        element: <Jobdetail></Jobdetail>,
        loader: ({params}) => fetch("/jobfeature.json")
        
      },
      {
        path:'appyed',
        element:<Appyed></Appyed>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
