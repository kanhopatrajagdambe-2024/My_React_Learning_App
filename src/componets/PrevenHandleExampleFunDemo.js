import React, { useState } from 'react'

export default function PrevenHandleExampleFunDemo() {
    const [name, setName] = useState('')
    function handleSubmit(e){
        debugger;
        e.preventDefault()
          setName('form submitted successfully')
    }
  return (
    <div className='container-fluid m-3'>
       <div>{name}</div>    
        <form onSubmit={handleSubmit}>   
        <input type="text" id='txtName'  />
        <button>Click me </button>
    </form>
    </div>
  )
}
