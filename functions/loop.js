const demons = ["Ifrit", "Beowulf","Cerberus","Thanatos"];

//For-loops w/ variables
for (let i = 0; i < demons.length; i++){
    console.log(`${demons[i]} is in the ${i} position`); 
}

//for loops, enhanced for loop
for (let name of demons){
    console.log("Enhanced for "  + name);
}

//Example 2 w/ variable
for (let i = 0; i < 10; i++){
    console.log(i);
    console.log("hello there!")
}

//ECMA Script 6, forEach, filter, map, reduce functions to loop through array
const colors = ["red", "blue", "white","yellow"];

//For each loop
colors.forEach( color => {
    console.log(color);
    console.log("");
})

//Filter, return array of filtered item
const filterColor = colors.filter(color => color === "yellow"); //comparison is 3 equals
console.log("Filter color: " + filterColor);

//Looping to push heros into array
const heros = [];
for (let i = 0; i < 7; i++){
    heros.push({
        hp: 200 + i,
        damage: 25 + i,
        name: "hero" + i
    })
}

// console.log(heros);

const herosGreaterThan202 = heros.filter(hero => hero.hp > 202);
console.log(herosGreaterThan202);

// Defining functions part 2
const sayHello = function (){

};
// Anonymous function
const sayHello2 = () => {

}

const mapOfHeroes = herosGreaterThan202.map(hero =>{
    return {
        hp: hero.hp,
        name: hero.name,
        version: 2
    };

})

console.log(mapOfHeroes);