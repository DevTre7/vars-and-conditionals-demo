/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/
let backpack = [];

//let add sword, shield, food

backpack.push("sword", "shield", "food");
console.log(backpack);

//let sword =  backpack.splice(0,1);
let sword = backpack.slice(0, 1);

//sword.push(backpack.shift());

//backpack.shift();
//console.log(sword);
console.log(backpack);

let furCoat = "fur Coat";
backpack.push(furCoat);

backpack.pop();

console.log(backpack);

let itemCount = backpack.length;

backpack.push("flint");
backpack.push("blanket");
backpack.push("knife");
backpack.push("toothbrush");

let backpack2 = backpack.splice(2, 4);
console.log(`Backpack count ${itemCount}`);
console.log(`Backpack: ${backpack}`);
console.log(`Backpack2: ${backpack2}`);
