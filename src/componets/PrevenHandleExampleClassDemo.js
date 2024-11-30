import React, { Component } from 'react'

export default class PrevenHandleExampleClassDemo extends Component {
    constructor(props){
        super(props);
        this.state={
            msg:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        debugger;
        e.preventDefault();
        this.setState({
            msg:'form submitted successfully...'
        })
    }
  render() {
    return (
        <>
        <h1>{this.state.msg}</h1>
        <form action="" onSubmit={this.handleSubmit}>
            <input type="text" />
            <button>Click me</button>
        </form>
        </>
    )
  }
}
