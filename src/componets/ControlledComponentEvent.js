import React from 'react'

export default class ControlledComponentEvent extends React.Component {

    constructor(props){
        super(props);
        this.state={
            msg:''
        }

        this.databaseoperations = this.databaseoperations.bind(this)

    }

    databaseoperations(e){
       debugger;
        switch(e.target.name){
            case 'insert':
                this.setState({
                    msg:'Record Inserted'
                })
                break;
                case 'delete':
                    this.setState({
                        msg:'Record Deleted'
                    })
                    break;
                    case 'update':
                        this.setState({
                            msg:'Record Updated'
                        })
                        break;
        }
    }

   render(){
    return (
        <>
        <h1>Result : {this.state.msg}</h1>
        <button name='insert' onClick={this.databaseoperations}>Insert</button>
        <button name='update' onClick={this.databaseoperations}>Update</button>
        <button name='delete' onClick={this.databaseoperations}>Delete</button>
        </>
      )
   }
}


// Controlled component handles event using state then it is called controlleed component"