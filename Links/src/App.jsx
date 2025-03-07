import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Dashboard } from './pages/Dashboard'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Perfil } from './pages/Perfil'
import { Layout } from './pages/Layout';
import { NBA } from './pages/NBA';
import { MLB } from './pages/MLB';
import { NFL } from './pages/NFL';
import { UFC } from './pages/UFC';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Routes</h1>
        <Layout></Layout>
      
        <Routes>

            <Route path="/Login" element={ <Login/> }></Route>
            <Route path="NBA" element={ <NBA/> }></Route>
            <Route path="NFL" element={ <NFL/> }></Route>
            <Route path="MLB" element={ <MLB/> }></Route>
            <Route path="UFC" element={ <UFC/> }></Route>
            <Route path="*" element={ <Home/> }></Route>
        </Routes>
       
      </div>
      
    </>
  )
}

export default App
