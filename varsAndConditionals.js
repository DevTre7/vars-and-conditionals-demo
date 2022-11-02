/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25;
let jamieLanniesterAttack = 35;

if(jonSnowAttack > jamieLanniesterAttack)
{
    console.log("Jon Snow has a  better attack than Jamie Lannister");
}
else if (jamieLanniesterAttack > jonSnowAttack)
{
    console.log("Jamie Lannister has a better attack than Jon Snow");
} 
else
{
    console.log("It's a tie");
}


let jonSnowHealth = 100;
let jonSnowDefense = 0;

if(jonSnowHealth < jamieLanniesterAttack)
{
    console.log("Jon Snow has been slain!!!");
}else
{
    jonSnowHealth = jonSnowHealth - jamieLanniesterAttack;
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`);
}

let healthkit = 50;

if(jonSnowHealth > 50)
{
    jonSnowHealth = 100;
}else{
    jonSnowHealth += 50;
}
//This following line of code is just a test:
console.log("Hello World");