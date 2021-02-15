import React, { Component } from 'react'
import { withRouter, Link } from "react-router-dom";
import { Form, Table, Navbar, Nav, Jumbotron, Container, CardGroup } from 'react-bootstrap';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '../css/Recipes.css';
import '../css/recipeBox.css';
import logo from '../img/logo.png';
import jumb from '../img/jumb.png';


class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      back: '',
      font: '',
      body: ''
    };
  }

  Del = (index) => {
    let allUsers = JSON.parse(localStorage.getItem('users'))
    console.log(allUsers, "before")
    allUsers.splice(index, 1)
    console.log(allUsers, "after")
    localStorage.setItem('users', JSON.stringify(allUsers))

    this.props.history.push({
      pathname: '/Admin'
    })

  }

  clearSeassion = () => {
    sessionStorage.setItem('color', "")
    sessionStorage.setItem('font', "")
    sessionStorage.setItem('body', "")
  }


  chgEmail1 = (e) => { // קליטת הערך בתייבת איימל
    this.setState({ email: e.target.value })
  }
  chguser = (e) => {
    this.setState({ userName: e.target.value })
  }

  chgPass = (e) => { // קליטת הערך בתיבת סיסמא
    this.setState({ pass: e.target.value })
    console.log(this.state.pass)
  }

  chgPass1 = (e) => { //קליטת הערך בתיבת אימות סיסמא
    this.setState({ pass1: e.target.value })
    console.log(this.state.pass1)
  }

  btnRegister = () => { // ביצוע פעולות נדרשות בעת לחיצה על כפתור התחברות
    var user = { email: this.state.email, pass: this.state.pass, pass1: this.state.pass1, userName: this.state.userName } // הכנסת הערכים שהוכנסו למערך 
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; // שימוש בריגיקס
    var pasRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
    if (!(regex.test(user.email))) {
      alert("enter an email address in the correct format , like name@example.com")
      return
    }
    if (!(pasRegex.test(user.pass))) {
      alert("enter an password in the correct format => at least 8 characters, at least 1 numeric character, at least 1 lowercase letter, at least 1 uppercase letter at least 1 special character, like ==> Pa$$w0rd")
      return
    }
    if (user.pass === undefined) { //בדיקה שהוא לא פספס תיבה 
      alert("Please enter data")
      return
    }
    if (user.email === undefined) {  //בדיקה שהוא לא פספס תיבה  
      alert("Please enter data")
      return
    }
    if (user.pass === undefined) { //בדיקה שהוא לא פספס תיבה 
      alert("Please enter data")
      return
    }
    else { // שליחת המערך דרך פרופס 
      this.props.CheakRegister1(user)
    }
  }




  render() {
    return (
      <div onLoad={this.setTheme} style={{ backgroundColor: this.state.body }}  >
        <Navbar style={{ backgroundColor: this.state.back }} className="nav" id="teststyle" variant="light" >
          <Navbar.Brand href="#home" style={{ color: "black" }}><img className="logo" src={logo} alt="" /></Navbar.Brand>
          <Nav className="mr-auto" >
            <Nav.Link className="navB"><Link className="navB" to="/">login /</Link></Nav.Link>
            <Nav.Link className="navB"><Link className="navB" to="/About">about us /</Link></Nav.Link>
          </Nav>
        </Navbar>
        <Jumbotron className="section" fluid>
          <Container>
            <img src={jumb} className="jumb" />
            <p>
              This is a modified jumbotron that occupies the entire horizontal space of
              its parent.
                        </p>
          </Container>
        </Jumbotron>
        <Jumbotron fluid>

          <h1>delete users</h1>

        </Jumbotron>
        <Table striped bordered hover className="adminTable">
          <thead>
            <tr>
              <th>#</th>
              <th>user name</th>
              <th>email</th>
              <th>Password</th>
              <th>delete user</th>
            </tr>
          </thead>
          <tbody>
            {JSON.parse(localStorage.getItem('users')).map((e, index) =>
              <tr>
                <td>{index + 1}</td>
                <th>{e.userName}</th>
                <td>{e.email}</td>
                <td>{e.pass}</td>
                <td><button style={{ backgroundColor: this.state.back, color: this.state.font }} onClick={() => this.Del(index)} type="submit" className="btnt" >delete</button></td>
              </tr>
            )}
          </tbody>
        </Table>
        <Jumbotron fluid>

          <h1>add users</h1>

        </Jumbotron>
        <div className="adminAdd">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control style={{ width: 550, margin: 'auto', textAlign: "center" }} type="email" placeholder="Enter email" onChange={this.chgEmail1} />
            <Form.Label>user name</Form.Label>
            <Form.Control style={{ width: 550, margin: 'auto', textAlign: "center" }} type="text" placeholder="Enter username" onChange={this.chguser} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control style={{ width: 550, margin: 'auto', textAlign: "center" }} type="password" placeholder="Password" onChange={this.chgPass} />
            <Form.Label>confirm password</Form.Label>
            <Form.Control style={{ width: 550, margin: 'auto', textAlign: "center" }} type="password" placeholder="Password" onChange={this.chgPass1} />
          </Form.Group>
          <button style={{ backgroundColor: this.state.back, width: 400 }} onClick={this.btnRegister} className="btnt">Add user</button>
        </div>
        <div style={{ backgroundColor: this.state.back }} id="teststyle1" className="footer">
          <MDBFooter className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
              <MDBRow>
                <MDBCol className="fotercolor" md="6">
                  <h5 className="title" style={{ color: this.state.font }}>check recipes</h5>
                  <p style={{ color: this.state.font }}>
                    On this site every little person can be a big chef !
                                   </p>
                </MDBCol>

              </MDBRow>
            </MDBContainer>
            <div className="copyritght">
              <MDBContainer fluid style={{ color: this.state.font }}>
                &copy; {new Date().getFullYear()} Copyright: ron tayeb
                            </MDBContainer>
            </div>
          </MDBFooter>
        </div>

      </div>


    );
  }
}
export default withRouter(Admin);
