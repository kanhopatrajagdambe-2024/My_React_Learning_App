import React, { useState } from 'react'

export default function KeyEventExample() {
    const [msg, setMsg] = useState('')
    const handlePassword = (e) => {
        const isUppercase = e.key === e.key.toUpperCase() && e.key !== e.key.toLowerCase(); // Detect uppercase letters
        const isCapsLockOn = e.getModifierState('CapsLock'); // Check if CapsLock is on

        if (isCapsLockOn) {
            setMsg("CapsLock is ON");
        } else if (isUppercase) {
            setMsg(e.target.value);  // Reset the message if the key is uppercase
        } else {
            setMsg(e.target.value);  // Show typed value for other cases
        }
    };
  return (
    <>
   <div className='m-5'>
    <h1>{msg}</h1>
   <div className='input-group w-50'>
    <label htmlFor="">password</label>
    <input type="text" className='form-control' id='txtName' onKeyUp={handlePassword} />
    </div>
   </div>
    </>
  )
}
