// let backpack = [];

// //adds these items
// backpack.push('pokeball');
// backpack.push('potion');
// backpack.push('pokedollars');


// // //removes first item
// // backpack.shift();

// //removes specified item (index spot is 0, 1 element is removed)
// backpack.splice(0, 1);


// //finds waterstone, adds the variable
// let foundItem = 'water stone';
// backpack.push(foundItem);


// //eevee wants to evolve, remove waterstone
// backpack.pop();


// //ash wants to know how much stuff he has
// let itemCount = backpack.length;
// // console.log(`ash has ${itemCount} items`, backpack);


// //adds items
// backpack.push('great ball', 'antidote', 'revive');


// //removes from backpack, puts in sachel (if commented out, put them back)
// let sachel = backpack.splice(2, 3);
// // console.log(backpack, sachel);

// // console.log(`backpack contains ${backpack}`, ` sachel contains ${sachel}`);


// if (backpack.length > 3) {
//     for (let i = 0; i < 3; i++) {
//         console.log(backpack[i],);
//     }
// } else {
//     for (let i = 0; i < backpack.length; i++){
//         console.log(backpack[i]);
//     }
// }



// // console.log(`backpack contains ${backpack}`, ` sachel contains ${sachel}`);

// ---------------------------------------------------------------------------------------------------------
//more code flow


let guessMe = 54;
console.log("guessMe starts at 54")

while (guessMe < 100) {
    console.log('--------', guessMe);
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        guessMe += 25;
        console.log('guessMe is divisible by 4 or 5, added 25')
    } else if (guessMe % 3 === 0) {
        guessMe -= 27;
        console.log('guessMe is divisible by 3, subtracted 27')
    } else {
        guessMe += 3;
        console.log('"if else if" conditionals not met, added 3')
    }
    guessMe += 22;
    console.log(`End loop: added 22, guessMe is now ${guessMe}`)
}

console.log('Final Value', guessMe);

