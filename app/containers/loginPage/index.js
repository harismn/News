
import { Button, Checkbox, Form } from 'semantic-ui-react'
import React, { Component } from 'react';
import api from '../../api/user';
import './Login.css'
import styled from 'styled-components'



class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    }
  }

  handleInputChange(stateFieldName, event) {
    let newState = {}
    newState[stateFieldName] = event.target.value

    this.setState(newState)
  }

  handleClick(e) {
    e.preventDefault()
    api.signin(this.state.email, this.state.password)
      .then(result => {
        console.log('SUCCESS!')
        this.props.history.push("/") // Redirect to the home page
      })
      .catch(err => {
        console.log('ERROR')
      })
  }

  

  render() {
    return (
      <AppWrapper>
      <div className="Login">
        <h2>Login</h2>
        <Form>

          <Form.Field>
            <label>Email </label> <br />
             <input type="text" placeholder='Email' value={this.state.email} onChange={(e) => { this.handleInputChange("email", e) }} /> <br />
          </Form.Field>
          <Form.Field>
            <label>Password</label> <br />
            <input type="password" placeholder='password' value={this.state.password} onChange={(e) => { this.handleInputChange("password", e) }} /> <br />
          </Form.Field>

          <Button type='submit' onClick={(e) => this.handleClick(e)}>Login</Button>
        </Form>
          {/* <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form> */}

      </div>
      </AppWrapper>
    );
  }
}

const AppWrapper = styled.div
`max-width: 90%;
 margin:;
 display: flex;
 min-height: 40%;
 padding: 1000;
 flex-direction: column;
 `;

export default Login;
