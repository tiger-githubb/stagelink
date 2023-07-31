import { Outlet } from 'react-router-dom'
import { getAuth } from "firebase/auth";

function App() {
  return (
    <div className='w-[85%] m-auto bg-[#FFFFFF]'>
      <Outlet />
    </div>
  )
}

export default App
