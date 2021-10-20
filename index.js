/*
Print all numbers from 1 to 100. However, if a number is divisible by 3, print "Fizz" instead, if it is divisible by 5, 
print "Buzz", and if it is divisible by both 3 and 5, print "FizzBuzz".

Tips
As always, it's worth thinking about the problem for a while before you start coding. 
Some good questions to explore would be: 
How do I know if a number is divisible by another number? 
How can I check that with code?

Start by writing comments step by step before jumping to the code */


for (let a = 1; a < 101; a++) {
    if (a % 3 === 0) {
        console.log("fizz")
    } else if (a % 5 === 0) {
        console.log ("Buzz")
    } else if (a % 3, a % 5 === 0) {
        console.log ("FizzBuzz")
    } else if (a % 7 === 0) {
        console.log ("fish")
    } else if (a % 8 === 0) {
        console.log ("bus")
    } else {
        console.log(a);
    }
}
