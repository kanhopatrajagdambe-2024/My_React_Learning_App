import React, { useState } from 'react'

export default function StateExampleWithFunctionComponent() {
    const[name, setName]=useState('soni');

     function UpdateName(e){
      setName(e.target.value)
     }

  return (
    <>
    <div className='container-fluid'>
     <h1> {name}</h1>
    <div className='input-group w-25'>
        <input type='text' className='form-control' onChange={UpdateName}  />
        <button className='btn btn-primary' >ChangeName</button>
    </div>
    </div>
    </>
  )
}
