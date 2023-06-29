// for loop ints 1-20
for(let i = 1; i <= 20; i++)
console.log(i)
//evens 0 - 200
for(let i = 0; i <= 200; i++){
    console.log(i);
}

//fizzbuzz 1-100
for(let i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log('FizzBuzz');
    }
    else if (i % 3 == 0){
        console.log('Fizz');
    }
    else if (i % 5 == 0) {
        console.log('Buzz');
    }
    else {
        console.log(i);
    }
}

//wild wild life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

//change plantee age
plantee.splice(2,1,5001);
console.log(plantee);
//change wolfy hometown
wolfy.splice(3,1,'Gotham City');
console.log(wolfy);
//dart add second hometown
dart.push('Hawkins');
console.log(dart);
//wolfy change name
wolfy.splice(0,1,"Gameboy");
console.log(wolfy);