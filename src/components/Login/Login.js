import React, { Component } from 'react';
import Input from '../Input/Input';
import "./Login.css";
import validateForm from './helper';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            users: [
                { id: 0, name: "admin", pass: "admin" },
                { id: 1, name: "usman", pass: "usman" },
                { id: 2, name: "ali", pass: "ali123" }
            ],
            isAuth: false,
            currentUser: null,
            errors : {
                hasError : false,
                errorsObj : {},
                serverError : ''
            },
            name : '',
            pass : ''
         }
    }
    onChange = (event) => {
        const {errors , name , pass} = this.state;
        this.setState({
            [event.target.name] : event.target.value,
            errors : validateForm("each", {name , pass} , event.target.name,errors)
        })
    }
    // validate = () => {
    //     const { name, pass, users, errors } = this.state;
    //     if(name.length < 3){
    //         errors.hasError = true;
    //         errors.errorsObj["name"] ?
    //         errors.errorsObj["name"].message += "Name Cann't less than 3 Characters!":
    //         errors.errorsObj["name"] = {message:"Name Cann't less than 3 Characters!"} 
    //     //   this.setState(() => ({errors}))
    //     } 
    //     return errors.hasError ? errors : {
    //         hasError : false,
    //         errorsObj : {},
    //         serverError : ''
    //     }
    // }
    onSubmit = (ev) => {
      ev.preventDefault();
      const {name, pass,users, errors} = this.state;
      const validate = validateForm("all",{name , pass});
      if(validate.hasError){
          this.setState({
               errors : validate
          })
          return;
      }
      var currentUser = users.filter((user) => user.name === name && user.pass ===pass)
      if(currentUser.length){
          localStorage.setItem("currentUser",JSON.stringify(currentUser[0]))
      }
    else{
      errors.serverError = "Wrong Credentials";
      this.setState({
          errors
      })
    }
    }
    render() { 
        const {name , pass , errors } = this.state;
        return ( 
            <div>
                <div className="login-form-wrapper">
                <form onSubmit={(ev) => this.onSubmit(ev)}>
                <h1>Login</h1>
                {errors.serverError && <strong>
                    <p className="error">{errors.serverError}</p>
                    </strong>}
              <Input
              type="text"
              value={name}
              label="User Name"
              name="name"
              id="name"
              placeholder="Enter your name"
              onChange={(event) => this.onChange(event)}
              errors={errors}
              />
                <Input
                    type="password"
                    value={pass}
                    label="Password"
                    name="pass"
                    id="pass"
                    placeholder="Enter your password"
                    onChange={(event) => this.onChange(event)}
                    errors={errors}
                />
                <Input 
                type="submit"
                value="Login"
                name="btn-login"
                id="btn-login"
                />
                </form>
                </div>
            </div>
         );
    }
}
 
export default Login;