import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut,getAuth } from "firebase/auth";

const Home = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const auth = getAuth();
  const handlelogout = async() => {
    await signOut(auth);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate("/login");
  }
  return (
    <div>
      <h1>home page</h1>
      <h2>{user && user.email}</h2>
      <button onClick={handlelogout} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
 >deconnexion</button>
    </div>
  )
}

export default Home