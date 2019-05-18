import React, { Component } from "react";
import Button from "../../Button/Button";
import axios from 'axios';
import { Link } from "react-router-dom";
import "./Signup.css";
import { expression } from "@babel/template";



class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: ''
  }

  handleSubmit = () => {
    axios.post('/users/signup', this.state).then(users => {
      console.log(users);
    }).catch(err => {
      if (err) throw err;
    })
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value }, () => console.log(this.state));
  }

  formInvalid = () => !(this.state.password && this.state.password2 && this.state.email && this.state.name);


  render() {
    return (
      //STYLE IT UP
      <div className="jumbotron" style={{ backgroundColor: "#1b0d0b" }}>
        <h1 className="displayLogin">Winter is Coming</h1>
        <img src="https://www.dailydot.com/wp-content/uploads/2ca/4e/fa303666dcd14120.gif" alt="home2" className="responsive"></img>

        <div className="Signup">
        <Button disabled={this.formInvalid()} callback={this.handleSubmit} name="Login" />
        <h1 className="ribbon">
   <strong class="ribbon-content">Create an account and Name your character!</strong>
</h1>
          {/* <h2 className="create">Create an account and Name your character!</h2> */}
          
          
          
          <div className="form">
            <div className="form-group">
              <input type="text" value={this.state.name} onChange={this.handleChange} name="name" placeholder="Character Name" />
              <input type="text" value={this.state.email} onChange={this.handleChange} name="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="password" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Password" />
              <input type="password" value={this.state.password2} onChange={this.handleChange} name="password2" placeholder="Re-enter password" />
            </div>
            </div>
            <button type="submit" className="btn btn-warning" onClick={this.handleSubmit}>Sign Up</button>
            {/* <Button disabled={this.formInvalid()} callback={this.handleSubmit} name="Signup" /> */}
          </div>
        </div>
     
    )
  }
}

export default Signup;