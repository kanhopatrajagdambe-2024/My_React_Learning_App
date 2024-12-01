import React, { Component } from 'react'

export default class RegisterComponent extends Component {
    constructor(props){
       super(props);
       this.state={
        users: [
            {username:'soni'},
            {username:'soni123'},
            {username:'Soni Jagdambe'}
        ],
        userErrorMsg:'',
        passwordErrorMsg:'',
        regExp:/(?=.*[A-Z])\w{4,15}/

       }
    }

    VerifyUsername(e){
        debugger;
      for(var user of this.state.users){
            if(user.username === e.target.value){
                this.setState({
                    userErrorMsg:`${e.target.value} is taken try another_`
                })
                return;
            }
            this.setState({
                userErrorMsg:''
            })
      }
    }
    VerifyPassword(e){
        if(e.target.value.match(this.state.regExp)){
            this.setState({
                passwordErrorMsg:'Strong password'
            })
        }
        else {
            if(e.target.value.length < 4){
                this.setState({
                    passwordErrorMsg:'Poor Password'
                })
            }
            else {
                this.setState({
                    passwordErrorMsg:'weak Password'

                })
            }
        }

    }
  render() {
    return (
        <>
    <div className='m-5'>
    <div className='input-group w-50 m-5'>
    <label htmlFor="">username</label>
    <input type="text" className='form-control' id='txtName' onKeyUp={this.VerifyUsername.bind(this)} />
    <div>{this.state.userErrorMsg}</div>
    </div>
    <div className='input-group w-50 m-5'>
    <label htmlFor="">password</label>
    <input type="text" className='form-control' id='txtName' onKeyUp={this.VerifyPassword.bind(this)} />
   <div>{this.state.passwordErrorMsg}</div>
    </div>
   </div>
   

        </>
    )
  }
}
