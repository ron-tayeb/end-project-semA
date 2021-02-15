import React, { Component } from 'react'
import { withRouter, Link } from "react-router-dom";
import { Button, Form, Navbar, Nav, Jumbotron, Container } from 'react-bootstrap';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import '../css/Recipes.css';
import logo from '../img/logo.png';
import jumb from '../img/jumb.png';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      back: ''
    };
  }


  chgEmail = (e) => { //פונקציה שלוקחת את הערך שבתיבת איימל
    this.setState({ email: e.target.value })
  }
  chgPass = (e) => { //פונקציה שלוקחת את הערך שבתיבת סיסמא
    this.setState({ pass: e.target.value })
  }
  btnlogin = () => { //פונקציה ששולחת את הערכים שהוכנסו באימל וסיסמא ושולחת אותם דרך פרופס
    if (this.state.email === "admin" && this.state.pass === "admin") {
      this.props.history.push({
        pathname: '/Admin'
      })
      return
    }
    var user = { email: this.state.email, pass: this.state.pass }//יצירת משתמש  
    sessionStorage.setItem('user:', JSON.stringify(user)) // העלתו לסיישן
    sessionStorage.setItem('notes:', JSON.stringify(''))
    JSON.parse(sessionStorage.getItem('user'))
    this.props.Cheaklogin(user)//שליחתו למיין דרך הפרופס
  }



  setTheme = () => { // פונקציה להחלת הצבע רקע של האתר
    var r = sessionStorage.getItem('color')
    this.setState({ back: r })
  }

  render() {
    return (
      <div onLoad={this.setTheme}>
        <>
          <Navbar style={{ backgroundColor: this.state.back }} className="nav" id="teststyle" variant="light" >
            <Navbar.Brand href="#home" style={{ color: "black" }}><img className="logo" src={logo} alt="" /></Navbar.Brand>
            <Nav className="mr-auto" >
              <Nav.Link className="navB"><Link className="navB" to="/Register">sign up /</Link></Nav.Link>
              <Nav.Link className="navB"><Link className="navB" to="/About">about us /</Link></Nav.Link>
            </Nav>
          </Navbar>
        </>
        <Jumbotron className="section" fluid>
          <Container>
            <img src={jumb} className="jumb" />
            <h2>
              Log in
              And learn how to be a great chef with the help of a variety of recipes
                        </h2>
          </Container>
        </Jumbotron>
        <div className="login">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control style={{ width: 250, margin: 'auto' }} type="email" placeholder="Enter email" onChange={this.chgEmail} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control style={{ width: 250, margin: 'auto' }} type="password" placeholder="Password" onChange={this.chgPass} />
          </Form.Group>
          <button style={{ backgroundColor: this.state.back }} onClick={this.btnlogin} className="btnt">Login</button>
        </div>

        <div style={{ backgroundColor: this.state.back }} id="teststyle1" className="footer">
          <MDBFooter className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
              <MDBRow>
                <MDBCol md="6">
                  <h5 className="title" style={{ color: "black" }}>check recipes</h5>
                  <p style={{ color: "black" }}>
                    On this site every little person can be a big chef !
                               </p>
                </MDBCol>

              </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
              <MDBContainer fluid style={{ color: "black" }}>
                &copy; {new Date().getFullYear()} Copyright: ron tayeb
                        </MDBContainer>
            </div>
          </MDBFooter>
        </div>

      </div>

    )
  }
}
export default withRouter(Login);




