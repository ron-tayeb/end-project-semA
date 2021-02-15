import React, { Component, useEffect, useState } from 'react';
import { withRouter, Link } from "react-router-dom";
import { Button, Form, Navbar, Nav, Jumbotron, Container, Modal, Fade } from 'react-bootstrap';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Recipe from "./Recipe";
import '../css/Recipes.css';
import logo from '../img/logo.png';
import jumb from '../img/jumb.png';
import NotCosher from '../img/NotCosher.png';




const Recipes = () => {
  const APP_ID = '94a00e94'; // api id const
  const APP_KEY = '3240406a2f5833abbb77783f3c07123f'; // api key const
  const r = JSON.parse(sessionStorage.getItem('user:')) 


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('')
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();

    console.log(data, 5855)
    if (data.more == false && data.q != '') { // במידה והרך לא קיים 
      document.getElementById("alert").style.display = 'block';
      document.getElementById("alert").innerHTML = "<strong>Error!</strong> this recipe was not found <br/>Try again";
    }
    setRecipes(data.hits) // עדכון המתכונים בסטיט
  };

  useEffect(() => {
    getRecipes();
  }, [query]);

  const updateSearch = (e) => { // מכניס לסטייט את הערך בשורת חיפוש
    setSearch(e.target.value)
    console.log(search)

  }

  const getSearch = e => {
    debugger
    if (search == "") { //הצגת הודעה עם הערך בחיפוש ריק
      document.getElementById("alert").style.display = 'block';
      document.getElementById("alert").innerHTML = "<strong>Error!</strong> please enter data <br/> and Try again";
      e.preventDefault();
    }
    else { // אם הוא הכניס ערך כלשהו הוא ממשיך 
      document.getElementById("alert").style.display = 'none';
      console.log(search, 55555555)
      e.preventDefault();
      setQuery(search)
      setSearch('')
    }
  }
  const clearSeassion = () => {
    sessionStorage.setItem('color', "")// עדכון היסטורית ערכת נושא
    sessionStorage.setItem('font', "")// עדכון היסטורית ערכת נושא
    sessionStorage.setItem('body', "")// עדכון היסטורית ערכת נושא
  }
  const [back, setBack] = useState()// עדכון ערכת נושא
  const [font, setFont] = useState()// עדכון ערכת נושא
  const [body, setbody] = useState()// עדכון ערכת נושא

  const setTheme = () => {// עדכון ערכת נושא
    var r = sessionStorage.getItem('color')// עדכון ערכת נושא
    var f = sessionStorage.getItem('font')// עדכון ערכת נושא
    var b = sessionStorage.getItem('body')// עדכון ערכת נושא
    setbody(b)// עדכון ערכת נושא
    setFont(f)// עדכון ערכת נושא
    setBack(r)// עדכון ערכת נושא
  }


  return (
    <div onLoad={setTheme} style={{ backgroundColor: body }}>

      <>
        <Modal className="modal1" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>מידע בנושא כשרות</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal1">תוכן מתכוני האתר נלקח מבסיס נתונים לא מפוקח מבחינת כשרות ולכן כל מתכוני האתר בחזקת לא כשרים</Modal.Body>
          <Modal.Footer>
            <img className="cosher" src={NotCosher} alt="" />
            <button style={{ backgroundColor: back }} onClick={handleClose} className="btnt">Close</button>
          </Modal.Footer>
        </Modal>
        <Navbar style={{ backgroundColor: back }} variant="light" className="nav">
          <Navbar.Brand href="#home" style={{ color: "font" }}><img className="logo" src={logo} alt="" /></Navbar.Brand>
          <Nav style={{ color: font }} className="mr-auto">
            <Nav.Link className="navB" style={{ color: font }} onClick={clearSeassion}><Link className="navB"  style={{ color: font }} to="/">log out /</Link></Nav.Link>
            <Nav.Link className="navB"  style={{ color: font }}><Link className="navB" style={{ color: font }} to="/MyRecipes">My Recipes /</Link></Nav.Link>
            <Nav.Link className="navB" style={{ color: font }}><Link className="navB"  style={{ color: font }} to="/Theme">Theme /</Link></Nav.Link>
            <Nav.Link className="navImportent"  style={{ color: font }} onClick={handleShow} href="">!importent! /</Nav.Link>
          </Nav>
        </Navbar>
      </>
      <Jumbotron className="section" fluid>
        <Container>
          <img src={jumb} className="jumb" />
          <h1>hello {r.userName}</h1>
          <h2>
            On this site every little person can be a big chef !
                    </h2>
        </Container>
      </Jumbotron>


      <div className="Recipes">
        <form onSubmit={getSearch} className="search-form">

          <Form.Control className="search-bar" type="text" value={search} onChange={updateSearch} />
          <button style={{ backgroundColor: back, color: font }} type="submit" className="btnt">Search</button>
          <h1 className="search-button"></h1>
        </form>
        <div id="alert" class="alert alert-danger" style={{ display: 'none' }}>
          <a href="#" class="close" data-dismiss="alert"></a>

        </div>

        <div className="recipes1">
          {recipes.map(recipe => (
            <Recipe key={recipe.recipe.label} Title={recipe.recipe.label} Calories={recipe.recipe.calories} ingredients={recipe.recipe.ingredientLines} img={recipe.recipe.image} />
          ))}
        </div>
      </div>
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
export default withRouter(Recipes);



