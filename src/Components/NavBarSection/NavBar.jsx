import React from 'react';
import { signOut, getAuth } from "firebase/auth";
import { useNavigate, Link } from 'react-router-dom';


const NavBar = () => {

  const navigate = useNavigate();
  const auth = getAuth();
  const handlelogout = async () => {
    await signOut(auth);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate("/login");
  }
  return (
    <div className='navBar flex justify-between items-center p-[3rem]'>
      
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-primary">
          <strong>Stage</strong>Link
        </h1>
      </div>

      <div className='menu flex gap-8'>
        <li className='menuList text-[#6f6f6f] hover:text-primary'>Stage</li>
        <li className='menuList text-[#6f6f6f] hover:text-primary'>Entreprise</li>
        <li className='menuList text-[#6f6f6f] hover:text-primary'>A propos</li>
        <li className='menuList text-[#6f6f6f] hover:text-primary'>Contact</li>
        <li className='menuList text-[#6f6f6f] hover:text-primary'>Blog</li>
        <li className="menuList">
          <Link to="/login" className="text-[#6f6f6f] hover:text-primary">
            Connexion
          </Link>
        </li>
        <li className="menuList">
          <Link to="/signup" className="text-[#6f6f6f] hover:text-primary">
            Inscription
          </Link>
        </li>
        <li className='menuList text-[#6f6f6f] hover:text-primary' onClick={handlelogout}>Deconnexion</li>
      </div>
    </div>
  );
};

export default NavBar;
