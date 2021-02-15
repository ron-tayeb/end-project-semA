import React from 'react';
import '../css/recipeBox.css';
import { Button, Card } from 'react-bootstrap';


const AddNotes = () => {
    let notes = {Title: this.state.title, Calories: this.state.Calories ,ingredients:[this.state.ingredients] , img: this.state.img}
    this.props.CheakNotes(notes)
}



const Recipe = ({ Title, Calories, ingredients, img }) => { 
    
    // קבלת הנתונים מהאבא והצגתם

    
    return (
        <div className="cards">
            <Card className="card">
                <Card.Img variant="top" src={img} className="img" />
                <Card.Body>
                    
                    <Card.Text style={{textAlign:"left"}}>
                    <Card.Title>{Title}</Card.Title>
                        <p>Calories: {Calories.toFixed(2)}</p>
                        
                            {ingredients.map(ingredients => (
                                <li>{ingredients}</li>
                            ))}
                        
                    </Card.Text>
                    <Button variant="a" onClick={AddNotes} className="search-button">add to my recipes</Button>
                </Card.Body>
            </Card>     
        </div>
    )
}
export default Recipe;