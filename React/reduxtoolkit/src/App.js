import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux'
import Login from './components/Login'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import Info from './components/Info'
import CartPage from './components/CartPage'
const App = () => {
const {isLogin}=useSelector((state)=>state.user)
  return (

    <>
    <Router>

{isLogin==="false" && <Routes><Route path="/" element={<Login/>}/> 
<Route path='*' element={<p>page not found</p>}/></Routes>
}

{isLogin==="true" && <Routes><Route path="/" element={<Homepage/>}/> 
<Route path='/cart' element={<CartPage/>}/>
<Route path="/info:id" element={<Info/>}/>
<Route path='*' element={<p>page not found</p>}/></Routes>
}
    </Router>
  </>
  )
}

export default App