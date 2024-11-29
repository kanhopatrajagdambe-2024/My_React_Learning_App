import React, { Component } from 'react'

export default class ProductComponent4 extends Component {
  render() {
    const {data}= this.props

    return (
      <>
      <div className='m-5'>
       {
        data.map((item) =>{
            return(
                <div className='card'>
                    <div className='card-header'>
                       {item.productName}
                    </div>
                    <div className='card-body'>
                     <img src={item.Photo} width={100} height={100} />
                    </div>
                    <div className='card-footer'>
                     ${item.price}
                    </div>
                </div> 
            )
        })
       }
      </div>
      </>
    )
  }
}
