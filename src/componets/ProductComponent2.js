import React from 'react'

export default function ProductComponent2(props) {
    const {data} = props
  return (
    <div className='container-fluid'>
      {
        data.map((item) =>{
          return  (
               <div className='m-5 d-flex'>
                 <div  className='card'>
                <div className='card-header'>
                  {item.productName}
                </div>
                <div className='card-body'>
                {item.price}
                </div>
                <div className='card-footer'>
               <img width={100} height={100} src={item.photo} />
                </div>
              </div>
               </div>
              )
        })
      }
    </div>
  )
}
