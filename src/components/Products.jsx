import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
const Products = () => {

  const [pdata,setPdata]=useState([])

  useEffect(()=>{
    fetch('http://localhost:8080/products')
    .then(response => response.json())
    .then(data => setPdata(data)); 
  },[])
  
  return <div>
{pdata.map((e)=>{
  return(<>
    <ProductItem e={e}/>
  </>)
})}

 
  </div>;
};

export default Products;
