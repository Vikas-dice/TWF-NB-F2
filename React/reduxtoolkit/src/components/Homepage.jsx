import React from 'react'
import NavbarComp from './Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect,useState } from 'react'
import { addtocart } from '../features/cartslice'
import { fetchproducts } from '../features/productSlice'
const Homepage = () => {

    const dispatch=useDispatch()
    const {products,error,loading}=useSelector((state)=>state.products)
  useEffect(()=>{
dispatch(fetchproducts())
  },[])
  const addcart=(title,prod)=>{
    dispatch(addtocart(title,prod))
  }
  if (loading) {
    return <p> loading...</p>;
  }
  if(error){
    return <p>error fetching products</p>
  }
  return (
   
    <div>
        <NavbarComp/>
        Homepage
        {(products.length)?<div className='d-flex flex-wrap d-flex justify-content-around' >
            {products?.map((prod)=>{
                return (
                    <div class="card p-5 d-flex justify-content-center align-items-center gap-5" style={{width:"330px",marginBottom:"20px",height:"auto"}}>
  <img class="card-img-top" height="250px" src={prod?.image} alt="Card image cap"/>
  <div class="card-body d-flex flex-column align-items-center justify-content-center">

    <h5 class="card-title"> {prod?.title}</h5>
    <p class="card-text">Rs {prod?.price}</p>
    <a href="#" class="btn btn-primary" onClick={()=>addcart({title:prod.title,price:prod.price})}>Add to Cart</a>
    <a href="#" class="btn btn-secondary mt-3" >Mark Favourite</a>
  </div>
</div>
                )
            })}
        </div>:<p>products not added yet</p>}
        
        </div>
  )
}

export default Homepage