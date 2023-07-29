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
    <Value/>
    <Footer/>
 


    
   </div>
  )
}

export default App
