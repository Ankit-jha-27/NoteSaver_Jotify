import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Pastes from './components/Pastes';
import Error from './components/Error';


const router = createBrowserRouter(
  [
    {
      path:"/",
      element: (
        <div>
        <Navbar />
        <Home />
      </div>
      )      
    },
    {
      path:"/pastes",
      element: (
        <div>
        <Navbar />
        <Pastes />
      </div>
      )
     
    },

    {
      path:"*",
      element:(
        <div>
          <Error />
        </div>
      )
    }
  ]


  
);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <RouterProvider router={router} />
      
    </>
  )
}

export default App
