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