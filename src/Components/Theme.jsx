import React, { Component, useEffect, useState } from 'react';
import { withRouter, Link } from "react-router-dom";
import '../css/recipeBox.css';
import { Button, Form, Navbar, Nav, Jumbotron, Container, Modal, Image, Col, Row } from 'react-bootstrap';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import jumb from '../img/jumb.png';
import logo from '../img/logo.png';
import theme from '../img/theme1.png';
import theme2 from '../img/theme2.png';
import theme3 from '../img/theme3.png';
import theme4 from '../img/theme4.png';
import theme5 from '../img/theme5.png';
import theme6 from '../img/theme6.png';
import theme7 from '../img/theme7.png';
import theme8 from '../img/theme8.png';
import theme9 from '../img/theme9.png';






const Theme = () => {  // קבלת הנתונים מהאבא והצגתם
    const [back, setBack] = useState()
    const [font, setFont] = useState()
    const [body, setbody] = useState()

    const allTheme = () => {
        sessionStorage.setItem('color', "#E3B5A4")
        var r = sessionStorage.getItem('color')
        sessionStorage.setItem('font', "#773344")
        var f = sessionStorage.getItem('font')
        sessionStorage.setItem('body', "#F0DAD1")
        var b = sessionStorage.getItem('body')
        setFont(f)
        setBack(r)
        setbody(b)
    }

    const allTheme1 = () => {
        sessionStorage.setItem('color', "#ffdbb5")
        var r = sessionStorage.getItem('color')
        sessionStorage.setItem('font', "#595959")
        var f = sessionStorage.getItem('font')
        sessionStorage.setItem('body', " #fdfbfb")
        var b = sessionStorage.getItem('body')
        setbody(b)
        setFont(f)
        setBack(r)
    }

    const allTheme2 = () => {  ///מוכן 
        sessionStorage.setItem('color', "#f79d94")
        var r = sessionStorage.getItem('color')
        sessionStorage.setItem('font', "#fff0e0")
        var f = sessionStorage.getItem('font')
        sessionStorage.setItem('body', " #fad0c4")
        var b = sessionStorage.getItem('body')
        setbody(b)
        setFont(f)
        setBack(r)
    }

    const allTheme3 = () => {
        sessionStorage.setItem('color', "#ccf3ff")
        var r = sessionStorage.getItem('color')
        sessionStorage.setItem('font', "#616161")
        var f = sessionStorage.getItem('font')
        sessionStorage.setItem('body', " #fdfcfb")
        var b = sessionStorage.getItem('body')
        setbody(b)
        setFont(f)
        setBack(r)
    }

    const allTheme4 = () => {
        sessionStorage.setItem('color', "#ffe7ab")
        var r = sessionStorage.getItem('color')
        sessionStorage.setItem('font', "#2b2b2b")
        var f = sessionStorage.getItem('font')
        sessionStorage.setItem('body', " #e8e3d5")
        var b = sessionStorage.getItem('body')
        setbody(b)
        setFont(f)
        setBack(r)
    }

    const allTheme5 = () => {
        sessionStorage.setItem('color', "#363636")
        var r = sessionStorage.getItem('color')
        sessionStorage.setItem('font', "#c9c9c9")
        var f = sessionStorage.getItem('font')
        sessionStorage.setItem('body', " #e6e1e1")
        var b = sessionStorage.getItem('body')
        setbody(b)
        setFont(f)
        setBack(r)
    }

    const allTheme6 = () => {
        sessionStorage.setItem('color', "#4d4d4d")
        var r = sessionStorage.getItem('color')
        sessionStorage.setItem('font', "#69cf9e")
        var f = sessionStorage.getItem('font')
        sessionStorage.setItem('body', " #d4ffea")
        var b = sessionStorage.getItem('body')
        setbody(b)
        setFont(f)
        setBack(r)
    }

    const allTheme7 = () => {
        sessionStorage.setItem('color', "#e6c7ff")
        var r = sessionStorage.getItem('color')
        sessionStorage.setItem('font', "#616161")
        var f = sessionStorage.getItem('font')
        sessionStorage.setItem('body', " #f8f0ff")
        var b = sessionStorage.getItem('body')
        setbody(b)
        setFont(f)
        setBack(r)
    }

    const allTheme8 = () => {
        sessionStorage.setItem('color', "#40a3ff")
        var r = sessionStorage.getItem('color')
        sessionStorage.setItem('font', "#3d3d3d")
        var f = sessionStorage.getItem('font')
        sessionStorage.setItem('body', " #5c5c5c")
        var b = sessionStorage.getItem('body')
        setbody(b)
        setFont(f)
        setBack(r)
    }

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
                    <Nav.Link className="navB" style={{ color: font }} onClick={clearSeassion}><Link className="navB" style={{ color: font }} to="/">log out /</Link></Nav.Link>
                    <Nav.Link className="navB" style={{ color: font }}><Link className="navB" style={{ color: font }} to="/MyRecipes">My Recipes /</Link></Nav.Link>
                    <Nav.Link className="navB" style={{ color: font }}><Link className="navB" style={{ color: font }} to="/Recipes">Recipes /</Link></Nav.Link>
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

                <h1>try to change your style of page</h1>

            </Jumbotron>
            <div className="themeDiv">
                <Container style={{ marginTop: "50px" }}>
                    <Row >
                        <Col className="rrr" >
                            <Image className="theme" src={theme2} rounded onClick={allTheme2} />
                        </Col>
                        <Col className="rrr" >
                            <Image className="theme" src={theme3} rounded onClick={allTheme1} />
                        </Col>
                        <Col className="rrr" >
                            <Image className="theme" src={theme4} rounded onClick={allTheme} />
                        </Col>
                    </Row>
                </Container>
                <Container style={{ marginTop: "50px" }}>
                    <Row>
                        <Col className="rrr" >
                            <Image className="theme" src={theme5} rounded onClick={allTheme3} />
                        </Col>
                        <Col className="rrr" >
                            <Image className="theme" src={theme6} rounded onClick={allTheme4} />
                        </Col>
                        <Col className="rrr" >
                            <Image className="theme" src={theme} rounded onClick={allTheme5} />
                        </Col>

                    </Row>
                </Container>
                <Container style={{ marginTop: "50px" }}>
                    <Row>
                        <Col className="rrr" >
                            <Image className="theme" src={theme7} rounded onClick={allTheme6} />
                        </Col>
                        <Col className="rrr" >
                            <Image className="theme" src={theme8} rounded onClick={allTheme7} />
                        </Col>
                        <Col className="rrr" >
                            <Image className="theme" src={theme9} rounded onClick={allTheme8} />
                        </Col>

                    </Row>
                </Container>
            </div>


            <Modal >
                <Modal.Header closeButton>
                    <Modal.Title>Oops</Modal.Title>
                </Modal.Header>
                <Modal.Body> this recipe is already on the page " my recipes "</Modal.Body>
                <Modal.Footer>
                    <button className="btnt">Close</button>
                </Modal.Footer>
            </Modal>
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


export default Theme;
