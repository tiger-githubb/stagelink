import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut,getAuth } from "firebase/auth";
import NavBar from '../Components/NavBarSection/NavBar';
import Stage from '../Components/StageSection/Stage';
import Search from '../Components/SearchSection/Search';
import Footer from '../Components/FooterSection/Footer';
import Value from '../Components/ValueSection/Value';


const Home = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  
  return (
    <div>
      < NavBar />
      < Search />
      <Stage/>
      < Value />
      < Footer />
    </div>
  )
}

export default Home