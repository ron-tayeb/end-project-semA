import React, { Component } from 'react'
import { Switch, Route, withRouter } from "react-router-dom";
import Register from './Register';
import Login from './Login';
import Recipes from './Recipes';
import MyRecipes from './MyRecipes';

import logo from '../img/logo.png';
import '../css/Recipes.css';
import Theme from './Theme';
import Admin from "./Admin";
import About from "./About";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      back: ''
    };


  }
  Cheaklogin = (user) => { //קבלת היוזר שהוכנס בדף לוגין וטיפול בפרטים שהוכנסו
    this.setState({
      Notes: []
    })
    if (localStorage.getItem('users')) { // אם יש מערך של יוזרים בלוקל סטורג אז מבצע את הפעולות הבאות
      let storedU = JSON.parse(localStorage.getItem('users')) //מושך למשתנה את כל היוזרים מהלוקל סטורג
      let chekUser = storedU.find(users => users.email === user.email && users.pass === user.pass); //בודק אם האייל שהלקוח הכניס קיים ברשימת האימלים בלוקל
      if (chekUser !== undefined) { //במידה וקיים אימל כזה אז מתבצעות הפעולות הבאות
        let users = JSON.parse(localStorage.getItem('users'))// לוקח את מערך היוזרים מהלוקל
        let lodin1 = JSON.parse(sessionStorage.getItem('user:')) // לוקח את היוזר שמחובר מהסיישן 
        let i1 = users.findIndex(em => em.email === lodin1.email) // משתנה שבודק באיזה מקום במערך בלוקל נמצא המשתנה שהתחבר כעת
        let u = users[i1]; // משתנה שמושך אליו רק את אותו יוזר שהתחבר
        var user = { email: users[i1].email , pass: users[i1].pass , userName: users[i1].userName }
        sessionStorage.setItem('user:', JSON.stringify(user))
        let Lnotes = u.notes
        this.setState({
          Notes: Lnotes
        })
        this.props.history.push({ //עובר לדף מתכונים
          pathname: '/Recipes'
        });
      }
      else { alert("Details are incorrect, please try again or register") } //טיפול במידה והאימל שהוכנס בלוגין לא קיים במערך בלוקל סטורג
    }
    else { // טיפול במידה ולא קיים אף מערך בלוקל סטורג
      alert("please Register")
    }
  }

  CheakRegister1 = (user) => { // קבלת המערך שהוכנס בדך התחברות

   
    if (localStorage.getItem('users')) { //בדיקה אם קיים בלוקל מערך של יוזרים
      let storedU = JSON.parse(localStorage.getItem('users'))// במידה וקיים אז הוא מושך מהלוקל את כל היוזרים למשתנה זה
      let chekUser = storedU.find(users => users.email === user.email); // בודק אם קיים איימל כזה בלוקל 
      if (chekUser === undefined) { // במידה ולא קיים איימל שהוא הכניס בלוקל סטורג מתבצעות הפעולות הבאות
        if (user.pass === user.pass1) { // בדיקה אם הסיסמא תואמת לאימות סיסמה 
          var newUser = { email: user.email, pass: user.pass , userName: user.userName } //במידה וכן הפרטים שלו נכנסים ליוזר חדש
          storedU = [...storedU, newUser] // אותו יוזר נוסך למערך הקודם פלוס אותו יוזר
          localStorage.setItem('users', JSON.stringify(storedU)) //עדכון המערך החדש בלוקל סטורג
          this.props.history.push({//מערב לדף לוגין
            pathname: '/Admin'
          });
        }
        else { // טיפול במקרה שהסיסמאות לא זהות 
          if (user.pass === undefined || user.pass1 === undefined || user.email === undefined) { // בדיקה שכלום לא ריק בטעות
            alert("Please enter data")
          }
          else { alert("Passwords do not match Try again") } // טיפול בסיסמאות לא תואמות
        }
      }
      else { // טיפול במידה והאיימל קיים במערך שבלוקל סטורג
        alert("Unfortunately, this email exists in the system")
      }
    }
    else { // במידה ולא קיים שום מערך בלוקל סטורג
      var newUser = { email: user.email, pass: user.pass , userName: user.userName } // הכנסת הנותנים לתוך מערך
      if (user.pass === user.pass1 && user.email !== undefined) { //  בדיקה שהאימל לא ריק ושהסיסמאות זהות
        if (user.pass !== undefined || user.pass1 !== undefined) { // בדיקה ואף תיבה לא ריקה
          localStorage.setItem('users', JSON.stringify([newUser])) //הכנסת הפרטים ללוקל סטורג
          this.props.history.push({//חזרה לדף התחברות
            pathname: '/Admin'
          })
        }
      }
      else {
        if (user.pass === undefined || user.pass1 === undefined || user.email === undefined) {//במידה והאיימל ריק או הסיסמאות ריקות
          alert("Please enter data")
        }
        alert("Passwords do not match Try again ")//במידה והסיסמאות פשוט לא זהות 
      }
    }
  }

  CheakRegister = (user) => { // קבלת המערך שהוכנס בדך התחברות

    if (localStorage.getItem('users')) { //בדיקה אם קיים בלוקל מערך של יוזרים
      let storedU = JSON.parse(localStorage.getItem('users'))// במידה וקיים אז הוא מושך מהלוקל את כל היוזרים למשתנה זה
      let chekUser = storedU.find(users => users.email === user.email); // בודק אם קיים איימל כזה בלוקל 
      if (chekUser === undefined) { // במידה ולא קיים איימל שהוא הכניס בלוקל סטורג מתבצעות הפעולות הבאות
        if (user.pass === user.pass1) { // בדיקה אם הסיסמא תואמת לאימות סיסמה 
          var newUser = { email: user.email, pass: user.pass , userName: user.userName } //במידה וכן הפרטים שלו נכנסים ליוזר חדש
          storedU = [...storedU, newUser] // אותו יוזר נוסך למערך הקודם פלוס אותו יוזר
          localStorage.setItem('users', JSON.stringify(storedU)) //עדכון המערך החדש בלוקל סטורג
          this.props.history.push({//מערב לדף לוגין
            pathname: '/'
          });
        }
        else { // טיפול במקרה שהסיסמאות לא זהות 
          if (user.pass === undefined || user.pass1 === undefined || user.email === undefined) { // בדיקה שכלום לא ריק בטעות
            alert("Please enter data")
          }
          else { alert("Passwords do not match Try again") } // טיפול בסיסמאות לא תואמות
        }
      }
      else { // טיפול במידה והאיימל קיים במערך שבלוקל סטורג
        alert("Unfortunately, this email exists in the system")
      }
    }
    else { // במידה ולא קיים שום מערך בלוקל סטורג
      var newUser = { email: user.email, pass: user.pass , userName: user.userName } // הכנסת הנותנים לתוך מערך
      if (user.pass === user.pass1 && user.email !== undefined) { //  בדיקה שהאימל לא ריק ושהסיסמאות זהות
        if (user.pass !== undefined || user.pass1 !== undefined) { // בדיקה ואף תיבה לא ריקה
          localStorage.setItem('users', JSON.stringify([newUser])) //הכנסת הפרטים ללוקל סטורג
          this.props.history.push({//חזרה לדף התחברות
            pathname: '/'
          })
        }
      }
      else {
        if (user.pass === undefined || user.pass1 === undefined || user.email === undefined) {//במידה והאיימל ריק או הסיסמאות ריקות
          alert("Please enter data")
        }
        alert("Passwords do not match Try again ")//במידה והסיסמאות פשוט לא זהות 
      }
    }
  }


  setTheme = () => {// פונקציה להחלת רקע הדף
    var r = sessionStorage.getItem('color')
    this.setState({ back: r })
  }

  render() {
    return (
      <div onLoad={this.setTheme}>
        <Switch>
          <Route exact path="/" render={() => <Login Cheaklogin={this.Cheaklogin} />} />
          <Route path="/Recipes" render={() => <Recipes CheakNotes={this.CheakNotes}  />} />
          <Route path="/register" render={() => <Register CheakRegister={this.CheakRegister} />}></Route>
          <Route path="/MyRecipes" render={() => <MyRecipes z={this.state.Notes} deleteEvint={this.deleteEvint} local={this.local} />} />
          <Route path="/Theme" component={Theme} />
          <Route path="/About" component={About} />
          <Route path="/Admin" render={() => <Admin CheakRegister1={this.CheakRegister1} />}></Route>
        </Switch>
      </div>
    )
  }
}

export default withRouter(Main);