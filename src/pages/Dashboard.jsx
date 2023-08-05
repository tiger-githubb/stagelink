import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut,getAuth } from "firebase/auth";
import NavBar from '../Components/NavBarSection/NavBar';
import Sidebar from '../Components/SideBarSection/SideBar';

const Dashboard = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  
  return (
    <div>
      < NavBar />
    <Sidebar/>
    </div>
  )
}

export default Dashboard;