import React, { Component } from 'react'

export default class ProductComponent3 extends Component {

  render() {
    return (
      <>
      <div className='container-fluid'>
        <div className='card'>
             <div  className='card-header'>
               {this.props.Name}
             </div>
             <div className='card-body'>
                {this.props.Photo}
             </div>
             <div className='card-footer'>
               ${this.props.Price}
             </div>
        </div>
        </div>
      </>
    )
  }
}
