import React from 'react'
import ReactDOM from 'react-dom/client'
import app from '../src/firebase'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route,} from "react-router-dom";
import { getAuth } from "firebase/auth";
import Singnup from './pages/Singnup.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import { Protected } from './Components/Protected.jsx';


const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='signup'  element={<Singnup/>} />
      <Route path='login'  element={<Login/>} />
      <Route path='/' element={<Protected/>}/>
      <Route path='/' index element={<Home/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>
)
