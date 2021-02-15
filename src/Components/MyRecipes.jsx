import React, { Component } from 'react'
import { withRouter, Link } from "react-router-dom";
import { Card, Navbar, Nav, Jumbotron, Container } from 'react-bootstrap';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '../css/Recipes.css';
import '../css/recipeBox.css';
import logo from '../img/logo.png';
import jumb from '../img/jumb.png';



class MyRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      back: '',
      font: '',
      body: ''
    };

  }

  del = (index) => { // מחיקת מתכון מהדף
    let lodin1 = JSON.parse(sessionStorage.getItem('user:')) // הכנסת היוזר שמחובר למשתנה 
    let allUsers = JSON.parse(localStorage.getItem('users')) // הנכסת כל מהערך היוזרים למשתנה
    let i = allUsers.findIndex(em => em.email === lodin1.email) // מציאת האינדקס שהיוזר המחובר נמצא במערך השלם
    let lodin = allUsers[i].notes // הכנסת כל התככונים של אותו יוזר למשתנה
    lodin.splice(index, 1) // ביצוע המחיקה

    let NewUserNote = { email: lodin1.email, pass: lodin1.pass, userName: lodin1.userName, notes: lodin } // יצירת יוזר חדש עם הפרטים המעודכנים
    allUsers[i] = NewUserNote // עדכון היוזר החדש במערך 
    localStorage.setItem('users', JSON.stringify(allUsers)) // עדכון המערך השלם בחזרה
    this.props.history.push({ // חזרה לדף הקיים 
      pathname: '/MyRecipes'
    })
  }
  setTheme = () => { // פונקציה לערכת נושא
    var r = sessionStorage.getItem('color') // שמירת צבע הרקע
    var f = sessionStorage.getItem('font') // שמירת צבע הכתב
    var b = sessionStorage.getItem('body') // שמירת צבע הנאב והפוטר

    this.setState({ back: r }) // עדכון הצבעים בסטייט
    this.setState({ font: f })
    this.setState({ body: b })
  }
  clearSeassion = () => { // בעת התנתקות הוא מנקה את היסטורית הצבעים מהסטייא
    sessionStorage.setItem('color', "")
    sessionStorage.setItem('font', "")
    sessionStorage.setItem('body', "")
  }




  render(
    lodin1 = JSON.parse(sessionStorage.getItem('user:')), // קבלת הנתונים לצורך הצגתם על הדף
    allUsers = JSON.parse(localStorage.getItem('users')),
    i = allUsers.findIndex(em => em.email === lodin1.email),
    lodin = allUsers[i].notes
  ) {
    return (
      <div onLoad={this.setTheme} style={{ backgroundColor: this.state.body }} >
        <>
          <Navbar style={{ backgroundColor: this.state.back }} variant="light" className="nav">
            <Navbar.Brand href="#home" style={{ color: "black" }}><img className="logo" src={logo} alt="" /></Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link className="navB" style={{ color: this.state.font }} onClick={this.clearSeassion}><Link className="navB" style={{ color: this.state.font }} to="/">log out /</Link></Nav.Link>
              <Nav.Link className="navB" style={{ color: this.state.font }}><Link className="navB" style={{ color: this.state.font }} to="/Recipes">Recipes /</Link></Nav.Link>
              <Nav.Link className="navB" style={{ color: this.state.font }}><Link className="navB" style={{ color: this.state.font }} to="/Theme">Theme /</Link></Nav.Link>
            </Nav>
          </Navbar>
        </>
        <Jumbotron className="section" fluid>
          <Container>
            <img src={jumb} className="jumb" />
            <p>
            On this site every little person can be a big chef !
            </p>
          </Container>
        </Jumbotron>
        <Jumbotron fluid>
          <h1>My Saved Recipes</h1>
        </Jumbotron>
        <div className="ron">
          {lodin !== undefined && lodin.map((e, index) =>
            <Card key={index} className="ron1">
              <Card.Img variant="top" src={e.imag} className="imga" />
              <Card.Body>
                <Card.Text style={{ textAlign: "left" }}>
                  <Card.Title>{e.title}</Card.Title>
                  <p>Calories: {e.cal}</p>
                  {e.ing.map(ingredients => (
                    <li>{ingredients}</li>
                  ))}
                </Card.Text>
                <button style={{ backgroundColor: this.state.back, color: this.state.font }} onClick={() => this.del(index)} className="btnt">Delete this recipe</button>
              </Card.Body>
            </Card>)}
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
    )
  }
}
export default withRouter(MyRecipes);
