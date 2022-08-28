//Functions

//1st. Defining a function
const sayHello = function(){
    console.log("Hello World!");
};

//Call a function
sayHello();

//Example with parameters
const eatFood = function(fruits){
    console.log("I am eating " + fruits);
};

eatFood("banana");

//Example with paramters, 3 parameters
const fightDemon = function(demonName, heroName, attackPower){
    console.log(heroName + " with attack power of " + attackPower + " attacks the demon " + demonName);
    //Template Literal
    console.log(`${demonName} got hit by ${heroName} with ${attackPower} power` );
    console.log(`${attackPower * 2} critical hit!`);
};
fightDemon("Ifrit", "Raphael", "50")

//Example with return
const battleDemon = function(demon, hero){
    let winner;
    if (demon.hp > hero.hp){
        wommer = demon;
    } else {
        winner = hero;
    }
    return winner;
};

//Making objects
const demon = {
    "Name": "Beowulf",
    "hp" : 200
}
const hero = {
    "Name": "Lucas",
    "hp" : 210
}

const winnerOfBattle = battleDemon(demon, hero);
console.log(`${winnerOfBattle.Name} is the winner of the battle.`);