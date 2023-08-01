import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import { getAuth } from "firebase/auth";

function App() {

  return (
    <div>
          <Outlet />

    </div>
      
      
    
  )
}

export default App







