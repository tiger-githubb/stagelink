import React from 'react'
import ReactDOM from 'react-dom/client'
import app from '../src/firebase'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from "react-router-dom";
import { getAuth } from "firebase/auth";
import { extendTheme } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import Singnup from './pages/Singnup.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import { Protected } from './Components/Protected.jsx';




const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}
const theme = extendTheme({ colors })


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
<ChakraProvider theme={theme}>
<RouterProvider router={router}/>
</ChakraProvider>

)








