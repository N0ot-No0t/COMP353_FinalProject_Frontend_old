import { FormControl } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';
import { Radio } from '@material-ui/core';
import { RadioGroup } from '@material-ui/core';
import React, { Component } from "react";
import UserDataService from "../services/userService";
const axios = require('axios');





export default class SignUp extends Component {

    constructor() {
        super();
        this.state = {
          userId: null,
          userType: '',
          email: '',
          membership: '',
          password: '',
          accountBalance: '',
          firstName: '',
          lastName: '',
          accountStatus: '',
          isFrozen: false
        };
  }

  onChange = (e) => {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state
    */
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    // const { fName, lName, email, password } = this.state;
    
    var data = {
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.fName,
      lastName: this.state.lName,
      userType: this.state.userType,
      isFrozen: 0,
      accountStatus: "activated",
      accountBalance: 0,
      membership: this.state.membership,
    };

    console.log("New user added: " + data.firstName + " " + data.lastName);

    UserDataService.create(data)
      // .then(response => {
      //   this.setState({
      //     userId: response.data.userId,
      //     userType: response.data.userType,
      //     email: response.data.email,
      //     membership: response.data.membership,
      //     password: response.data.password,
      //     accountBalance: response.data.accountBalance,
      //     firstName: response.data.firstName,
      //     lastName: response.data.lastName,
      //     accountStatus: response.data.accountStatus,
      //     isFrozen: response.data.isFrozen
      //   });
      //   console.log(response.data);
      // })
      .catch(e => {
        console.log(e);
      });
  

    /*

    axios.post('/', { fName, lName, email, password })
      .then((result) => {
        //access the results here....

        console.log("Info retrieved: "+fName +" "+ lName +" "+ email +" "+ password);

      });

      */

    //  console.log("Info retrieved: "+fName +" "+ lName +" "+ email +" "+ password);
  }


  newJob() {
    this.setState({
      id: null,
      fName: "",
      lName: "",
      published: false,

      submitted: false
    });
  }
    
    render() {

        const { fName, lName, email, password, membership, userType} = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input name="fName" type="text" className="form-control" placeholder="First name" onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input name="lName" type="text" className="form-control" placeholder="Last name" onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input name="email" type="email" className="form-control" placeholder="Enter email" onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input name="password" type="password" className="form-control" placeholder="Enter password" onChange={this.onChange}/>
                </div>

                <div className="form-group">
                  <label>Membership</label>
                  <select id="membership" name="membership" className="form-control" onChange={this.onChange}>
                    <option value="none" selected disabled hidden>Please choose a membership</option>
                    <option value="basic">Basic</option>
                    <option value="prime">Prime</option>
                    <option value="gold">Gold</option>
                  </select>
                </div>
                  
                <div className="form-group">
                  <label>Membership</label>
                  <select id="userType" name="userType" className="form-control" onChange={this.onChange}>
                    <option value="none" selected disabled hidden>Choose your account type</option>
                    <option value="employee">Employee</option>
                    <option value="employer">Employer</option>
                    <option value="admin">Administrator</option>
                  </select>
                </div>
                
                {/* <div className="form-group">
                    <label>Membership:</label><br></br>
                    <input type="radio" name="membership" value="basic" className="radioM"></input>
                      <label>Basic</label><br></br>
                    <input type="radio" name="membership" value="prime" className="radioM"></input>
                      <label>Prime</label><br></br>
                    <input type="radio" name="membership" value="gold" className="radioM"></input>
                      <label>Gold</label><br></br>
                </div>

                <div className="form-group">
                    <label>User type:</label><br></br>
                    <input type="radio" name="userType" value="employee" className="radioT"></input>
                      <label>Employee</label><br></br>
                    <input type="radio" name="userType" value="employer" className="radioT"></input>
                      <label>Employer</label><br></br>
                    <input type="radio" name="userType" value="administrator" className="radioT"></input>
                      <label>Administrator</label><br></br>
                </div> */}

                <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}


   

