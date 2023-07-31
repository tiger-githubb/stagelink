import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut,getAuth } from "firebase/auth";
import NavBar from '../Components/NavBarSection/NavBar';
import Search from '../Components/SearchSection/Search';
import Footer from '../Components/FooterSection/Footer';
import Value from '../Components/ValueSection/Value';
import Stage from '../Components/StageSection/Stage';


const Home = () => {
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
      < NavBar />
      < Search />
      < Stage />
      < Value />
      < Footer />
      <button onClick={handlelogout} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">deconnexion</button>
    </div>
  )
}

export default Home