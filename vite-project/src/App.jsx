
import './App.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom"
import Products from './Components/Products.jsx'
import Rooms from './Components/Rooms.jsx'
import AboutUs from './Components/AboutUs.jsx'
import ContactUs from './Components/ContactUs.jsx'
import Home from './Components/Home.jsx'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/Product",
      element:<Products/>
    },
    {
      path:"/Rooms",
      element:<Rooms/>
    },
    {
      path:"/AboutUs",
      element:<AboutUs/>
    },
    {
      path:"/ContactUs",
      element:<ContactUs/>
    }
  ])

  return (
    <div className='all'>
    <RouterProvider router={router}/>
    
    </div>
  
    
  )
}

export default App
