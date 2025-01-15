import React, { useEffect, useState } from "react";
import axios from "axios";
import { fetchCategory, get } from "../features/categoryslice";
import { useSelector,useDispatch } from "react-redux";

const Category = () => {
  const cat= useSelector((state)=> state.category.category)
  const loading=useSelector((state)=> state.category.loading)
  const error=useSelector((state)=> state.category.error)
  const dispatch=useDispatch()
  useEffect(() => {
    // const categoryfetch = async () => {
    //   try {
    //     const res = await axios.get(
    //       "https://fakestoreapi.com/products/categories"
    //     );
    //     console.log(res);
    //     dispatch(get(res.data))
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // categoryfetch();
    dispatch(fetchCategory())
  }, []);

  if (loading) {
    return <p> loading...</p>;
  }
if(error){
    return <p> error... {error}</p>;
}
  if (cat?.length == 0) {
    return <p> no categpories found</p>;
  }
  return (
    <div>
      <h1> categories :</h1>
      {cat?.map((item) => {
        return <p>{item}</p>;
      })}
    </div>
  );
};

export default Category;
