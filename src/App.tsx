import { appendFile } from 'fs';
import React from 'react';
import './App.css';

const name : string = "Sevin";
let name2  : string = "Xiao Yun";

name2 = "Little Apple";
name2 = "Big Apple";

let number = 9; // integer
let isDeleted = false; //boolean
let colors = ["red","yellow","blue"]; //square brackets is used for arrays
let person = { // This is an ojbect, to call it, type .
  height: "Tall",
  language: "Spanish",
  food: "Burrito"
};

//Spread operator
let person2 = {
  ...person,
  shoes: "Addidas"
};

//Destructuring
let { language } = person;
let [red, yellow, blue] = colors;
let { food } = person;

//Conditionals
language = "Spanish";
let show = "";
if (language == "Spanish"){
  show = "Hola Seniorita";
} 
else if ( language == "English"){
  show = "Hello Ladies and Gents";
} 
else {
  show = "Hello Ladies";
}

//Looping
let numbers = [1, 2, 3]; // array of numbers
console.log([numbers[0]]);
for (let i = 0; i < numbers.length; i++){ //numbers.length shows how big the array is
   // console.log(numbers[i]);
}

numbers.forEach(item => {
  console.log("For Each");
  console.log(item);
})

const restaurant = ["704", "Mr.Tokyo", "QC Tea Bar"];

function App() {
  return (
    <div className="App">
      {colors}
      <br/>
      {numbers}
      <br/>
      {person.height}
      <br/>
      {person2.shoes}
      <br/>
      {language}
      <br/>
      {red}
      <br/>
      {food}
      <br/>
      {language == "Spanish" ? show : ""}
      {
        numbers.map(number => {
          return <h2>{number}</h2>
        })
      }
      <br/>
      {
        restaurant.map(show => {
          return <h3>{show}</h3>
        })
      }
    </div>
  );
}

export default App;
