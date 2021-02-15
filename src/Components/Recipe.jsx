import React, { Component, useEffect, useState, useRef } from 'react';
import '../css/recipeBox.css';
import { Button, Card, Modal, Tooltip, Overlay } from 'react-bootstrap';
import { Link } from "react-router-dom";






const Recipe = ({ Title, Calories, ingredients, img }) => {  // קבלת הנתונים מהאבא והצגתם
  const [show, setShow] = useState(false); // להצגת המודאל 
  const [showTR, setShowTR] = useState(false);// להצגת המודאל
  const target = useRef(null);// להצגת המודאל

  const AddNotes = () => { // הוספת המתכון לרשימה הפרטית
    let lodin1 = JSON.parse(sessionStorage.getItem('notes:')) // לקיחחת המתכונים השמורים בסיישן 
    let notes = { title: Title, cal: Calories, ing: ingredients, imag: img } // לקיחת המתכון הקיים
    let myRecipe = [notes, ...lodin1] //חיבור בין השניים
    sessionStorage.setItem('notes:', JSON.stringify(myRecipe)) // עדכון הסיישן במערך מתכונים החדש
    // הוספה לסיישן הקיים רק מה שהוא לחץ כרגע



    // הוספה ללוקל 
    let lodin = JSON.parse(sessionStorage.getItem('user:'))
    let allUsers = JSON.parse(localStorage.getItem('users'))
    let i = allUsers.findIndex(em => em.email === lodin.email)
    if (allUsers[i].notes === undefined) {
      setShowTR(!show)
      let NewUserNote = { email: lodin.email, pass: lodin.pass, userName: allUsers[i].userName, notes: myRecipe }
      allUsers[i] = NewUserNote
      localStorage.setItem('users', JSON.stringify(allUsers))
    }
    else {
      let userN = allUsers[i].notes;
      for (let index = 0; index < userN.length; index++) { //בדיקה אם ערך קיים 
        if (allUsers[i].notes[index].title === notes.title) {
          setShow(true)
          return
        }

      }
      setShowTR(!show) // הצגת באנר הוספה הושלמה
      let t = [notes, ...allUsers[i].notes]
      let NewUserNote = { email: lodin.email, pass: lodin.pass, userName: allUsers[i].userName, notes: t }
      allUsers[i] = NewUserNote
      localStorage.setItem('users', JSON.stringify(allUsers))
    }
  }
  const handleClose = () => setShow(false); //עדכונו 



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

      <Modal show={show} onHide={AddNotes} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Oops</Modal.Title>
        </Modal.Header>
        <Modal.Body> this recipe is already on the page " my recipes "</Modal.Body>
        <Modal.Footer>
          <button style={{ backgroundColor: back, color: font }} onClick={handleClose} className="btnt">Close</button>
        </Modal.Footer>
      </Modal>





      <Card className="card">
        <Card.Img variant="top" src={img} className="img" />
        <Card.Body>
          <Card.Text style={{ textAlign: "left" }}>
            <Card.Title>{Title}</Card.Title>
            <p>Calories: {Calories.toFixed(2)}</p>

            {ingredients.map(ingredients => (
              <li>{ingredients}</li>
            ))}

          </Card.Text>
          <button style={{ backgroundColor: back, color: font }} ref={target} onClick={AddNotes} className="btnt">ADD TO MY RECIPE</button>

          <Overlay target={target.current} show={showTR} placement="right">
            {(props) => (
              <Tooltip id="overlay-example" {...props}>
                Add recipe successfully
              </Tooltip>
            )}
          </Overlay>
        </Card.Body>
      </Card>
    </div>


  );
};


export default Recipe;
