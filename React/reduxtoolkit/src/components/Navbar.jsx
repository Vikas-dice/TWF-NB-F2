import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../features/userSlice';
import { useSelector } from 'react-redux';
const NavbarComp = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {cart}=useSelector((state)=>state.cart)
  return (
    <div>
 <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={()=> {navigate("/")}}>Shopper stop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=> {navigate("/cart")}}>Cart {cart.length}</Nav.Link>
            <Nav.Link onClick={()=>{dispatch(logout()); navigate("/")}}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
    </div>
  )
}

export default NavbarComp