import React, { useState } from 'react'

export default function DataBindingExample() {
    const [productDetails, setProductDetails]=useState({Name:'', Price:0})

    function handleName(e){
      setProductDetails({
        Name:e.target.value,
        Price:productDetails.Price
      })
    }
    function handlePrice(e){
        setProductDetails({
          Name:productDetails.Name,
          Price:e.target.value
        })
      }
  return (
    <>
    <h2>Enter Product Details</h2>
    <dl className='row'>
        <dt className='col-3'>Name</dt>
        <dd className='col-9'>
            <input type="text" onChange={handleName} />
        </dd>
        <dt className='col-3'>Price</dt>
        <dd className='col-9'>
            <input type="text" onChange={handlePrice} />
        </dd>
    </dl>
    <h2>Product Details</h2>
    <dl className='row'>
     <dt className='col-3'>Name</dt>
     <dd className='col-9'>
        {productDetails.Name}
     </dd>
     <dt className='col-3'>Price</dt>
     <dd className='col-9'>
        {productDetails.Price}
     </dd>
    </dl>
   
    </>
  )
}
