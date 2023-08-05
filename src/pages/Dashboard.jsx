import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut,getAuth } from "firebase/auth";
import NavBar from '../Components/NavBarSection/NavBar';

const Dashboard = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  
  return (
    <div>
      < NavBar />

    </div>
  )
}

export default Dashboard;