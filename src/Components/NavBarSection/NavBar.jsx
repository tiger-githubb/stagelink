import React from 'react';

const NavBar = () => {
  return (
    <div className='navBar flex justify-between items-center p-[3rem]'>
      
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-[#001E65]">
          <strong>Stage</strong>Link
        </h1>
      </div>

      <div className='menu flex gap-8'>
        <li className='menuList text-[#6f6f6f] hover:text-[#004DFF]'>Stage</li>
        <li className='menuList text-[#6f6f6f] hover:text-[#004DFF]'>Entreprise</li>
        <li className='menuList text-[#6f6f6f] hover:text-[#004DFF]'>A propos</li>
        <li className='menuList text-[#6f6f6f] hover:text-[#004DFF]'>Contact</li>
        <li className='menuList text-[#6f6f6f] hover:text-[#004DFF]'>Blog</li>
        <li className='menuList text-[#6f6f6f] hover:text-[#004DFF]'>Connexion</li>
        <li className='menuList text-[#6f6f6f] hover:text-[#004DFF]'>Inscription</li>
      </div>
    </div>
  );
};

export default NavBar;
