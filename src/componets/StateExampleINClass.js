import React, { Component } from 'react'

export default class StateExampleINClass extends Component {

    constructor(props){
        super(props);
        this.state={
            title:'Categories List',
            categories:['Electronics', "Fashion", "Footwear"],
            products:[
                {ProductName:'Samsung Tv', Price:45000},
                {ProductName:'Shots', Price:6000},
                {ProductName:'Nike Casulas', Price:3400}
            ]


        }
    }
  render() {
    return (
      <>
     <div className='container-fluid'>
     <h1>{this.state.title}</h1>
      <ul>
        {
            this.state.categories.map(category =>{
                return(
                    <li>{category}</li>
                )
            })
        }
      </ul>
      <table>
        <thead>
            <th>Name</th>
            <th>Price</th>
        </thead>
        <tbody>
            {
                this.state.products.map(product=>{
                    return(
                        <tr>
                            <td>{product.ProductName}</td>
                            <td>{product.Price}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
     </div>
      </>
    )
  }
}
