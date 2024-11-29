import React from 'react'

export default function ProductComponent(props) {
  return (
    <>
    <div className='w-25'>
    <div className='card m-2 text-center'>
        <div className='card-header'>
        {props.Name}
        </div>
        <div className='card-body'>
         {props.Photo}
        </div>
        <div className='card-footer'>
            {props.Price}
        </div>

    </div>
    </div>
    </>
  )
}
