import { useState } from 'react'

import NavBar from './Components/NavBarSection/NavBar'
import Footer from './Components/FooterSection/Footer'
import Search from './Components/SearchSection/Search'
import Stage from './Components/StageSection/Stage'
import Value from './Components/ValueSection/Value'


function App() {
  return (
   <div className='w-[85%] m-auto bg-[#FFFFFF]'>

    <NavBar/>
    <Search/>
    <Stage/>
    <Footer/>
    <Value/>


    
   </div>
  )
}

export default App
