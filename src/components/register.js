import React, { Component } from "react";
const axios = require('axios');




export default class SignUp extends Component {

    constructor() {
        super();
        this.state = {
          fName: '',
          lName: '',
          email: '',
          password: '',
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
    const { fName, lName, email, password } = this.state;

    /*

    axios.post('/', { fName, lName, email, password })
      .then((result) => {
        //access the results here....

        console.log("Info retrieved: "+fName +" "+ lName +" "+ email +" "+ password);

      });

      */

     console.log("Info retrieved: "+fName +" "+ lName +" "+ email +" "+ password);
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

        const { fName, lName, email, password} = this.state;

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

                <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}


   

