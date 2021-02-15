import React, { Component } from 'react'
import { withRouter, Link } from "react-router-dom";
import { Form, Navbar, Nav, Jumbotron, Container } from 'react-bootstrap';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '../css/Recipes.css';
import logo from '../img/logo.png';
import jumb from '../img/jumb.png';



class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteL: [],
        };
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
            this.props.CheakRegister(user)
        }
    }

    render() {
        return (
            <div>
                <>
                    <Navbar variant="light" className="nav">
                        <Navbar.Brand href="#home" style={{ color: "black" }}><img className="logo" src={logo} alt="" /></Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link className="navB"><Link className="navB"  to="/">login /</Link></Nav.Link>
                            <Nav.Link className="navB"><Link className="navB"  to="/About">about us /</Link></Nav.Link>
                        </Nav>
                    </Navbar>
                </>
                <Jumbotron className="section" fluid>
                    <Container>
                        <img src={jumb} className="jumb" />
                        <h2>
                            Start now!
                            Learn how to be a great chef with a variety of recipes
                        </h2>
                    </Container>
                </Jumbotron>
                <div>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address:</Form.Label>
                        <Form.Control style={{ width: 250, margin: 'auto' }} type="email" placeholder="Enter email" onChange={this.chgEmail1} />
                        <Form.Label>user name:</Form.Label>
                        <Form.Control style={{ width: 250, margin: 'auto' }} type="user" placeholder="Enter username" onChange={this.chguser} />
                        <Form.Label>Password:</Form.Label>
                        <Form.Control style={{ width: 250, margin: 'auto' }} type="password" placeholder="Password" onChange={this.chgPass} />
                        <Form.Label>confirm password:</Form.Label>
                        <Form.Control style={{ width: 250, margin: 'auto' }} type="password" placeholder="Password" onChange={this.chgPass1} />
                    </Form.Group>
                    <button style={{ backgroundColor: this.state.back }} onClick={this.btnRegister} className="btnt">Register</button>
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
export default withRouter(Register)
