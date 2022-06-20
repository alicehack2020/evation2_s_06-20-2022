import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
`;

const Wrapper1 = styled.section`
  border: 1px solid black;
`;


const ProductItem = ({e}) => 
{
  // id: 9, name: 'Product 9', description: 'Product 9 Description'

  const addHanddle=()=>
  {
    const data=e
    fetch('http://localhost:8080/cartItems', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data); 
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }


  const removeHanddle=()=>
  {
    const data=e
    fetch(`http://localhost:8080/cartItems/${data.id}`, {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data); 
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  
  return <Wrapper1>{
    <>
      <div key={e.id}>
          <h1>{e.name}</h1>
          <p>{e.description}</p>
          <button onClick={addHanddle}>add</button>
          <Wrapper>
            <button>inc</button>
            <p>count</p>
            <button>dec</button>
          </Wrapper>
          <button onClick={removeHanddle} >remove</button>
      </div>
    </>
  }</Wrapper1>;
};

export default ProductItem;
