import React, { Component, useEffect, useState } from 'react';
import { withRouter, Link } from "react-router-dom";
import '../css/recipeBox.css';
import { Button, Form, Navbar, Nav, Jumbotron, Container, Modal, Image, Col, Row } from 'react-bootstrap';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import jumb from '../img/jumb.png';
import logo from '../img/logo.png';



const About = () => {  // קבלת הנתונים מהאבא והצגתם
    const [back, setBack] = useState()
    const [font, setFont] = useState()
    const [body, setbody] = useState()

    const clearSeassion = () => {
        sessionStorage.setItem('color', "")
        sessionStorage.setItem('font', "")
        sessionStorage.setItem('body', "")
    }

    const thisLoad = () => {
        var r = sessionStorage.getItem('color')
        var f = sessionStorage.getItem('font')
        var b = sessionStorage.getItem('body')
        setbody(b)
        setFont(f)
        setBack(r)
    }




    return (
        <div onLoad={thisLoad} style={{ backgroundColor: body }}  >
            <Navbar style={{ backgroundColor: back }} className="nav" id="teststyle" variant="light" >
                <Navbar.Brand href="#home" style={{ color: "black" }}><img className="logo" src={logo} alt="" /></Navbar.Brand>
                <Nav className="mr-auto" >
                    <Nav.Link className="navB" style={{ color: font }} onClick={clearSeassion}><Link className="navB" style={{ color: font }} to="/">log in /</Link></Nav.Link>
                    <Nav.Link className="navB" style={{ color: font }}><Link className="navB" style={{ color: font }} to="/Register">sign in /</Link></Nav.Link>

                </Nav>
            </Navbar>
            <Jumbotron className="section" fluid>
                <Container>
                    <img src={jumb} className="jumb" />
                    <p>
                        On this site every little person can be a big chef !
                    </p>
                </Container>
            </Jumbotron>
            <Jumbotron fluid>

                <h1>about us</h1>
                <p className="aboutP" >
                    :סיטואציה <br />
                ?האישה ביקשה ממך להכין ארוחת ערב <br />
                "לא ידעת מה להכין וכששאלת את אישתך היא ענתה בקול מיואש "אין לי מושג  <br />
               ? נכנסת לאינטרנט וראית מגוון מתכונים ומרוב התלבטות לא ידעת מה לבחור<br />
                אמרת בליבך שהיום תכין  מתכון אחד שמצאת ויום למחרת את המתכון השני שמצאת <br />
                ? הגיע מחר ולצערך הרב לא מצאת את המתכון שמצאת אתמול <br />
                    <br />
                    <p className="aboutP1">
                        בידיוק בשביל זה אנחנו כאן <br />
               באתר זה תוכל לשמור מגוון רחב של מתכונים בדף פרטי משלך כך שלעולם לא יעלמו לך מתכונים <br />
               תוכל לערוך את הדף שלך כפי רצונך , להוסיף ולהסיר מתכונים לבחירתך<br />
               תוכל למצוא באתר זה מגוון רחב של מתכונים <br />
               ארוחות בוקר , צהרים , ערב , קינוחים , עוגות , שייקים , ארוחות ילדים ועוד<br />
               אז כל שנותר מאיתנו זה לאחל לך גלישה נעימה באתרנו <br/>
               !!! אז תהנוו

                    </p>

                </p>

            </Jumbotron>

            <div style={{ backgroundColor: back }} id="teststyle1" className="footer">
                <MDBFooter className="font-small pt-4 mt-4">
                    <MDBContainer fluid className="text-center text-md-left">
                        <MDBRow>
                            <MDBCol className="fotercolor" md="6">
                                <h5 className="title" style={{ color: font }}>check recipes</h5>
                                <p style={{ color: font }}>
                                    On this site every little person can be a big chef !
                               </p>
                            </MDBCol>

                        </MDBRow>
                    </MDBContainer>
                    <div className="copyritght">
                        <MDBContainer fluid style={{ color: font }}>
                            &copy; {new Date().getFullYear()} Copyright: ron tayeb
                        </MDBContainer>
                    </div>
                </MDBFooter>
            </div>

        </div>


    );
};


export default About;
