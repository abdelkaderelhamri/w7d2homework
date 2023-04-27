//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
function favoriteFoods(person) {
    
    
    console.log("\nPerson's favorite Tacos");
    console.log(person.tacos);
    console.log("\nPerson's favoriteBurgers");
    console.log(person.burgers);
    console.log("Person's favorite Pizza is :");
    console.log(person.pizza.join(", "));
    console.log("\nPerson's favorite Ice Cream");
    console.log(person.ice_cream.join(", "));
    console.log("\nPerson's favorite Shakes");
    Object.keys(person.shakes[0]).forEach((key) => {
      console.log(`${key}: ${person.shakes[0][key]}`);
    });
  }
  
  favoriteFoods(person3);

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
function stringLength(str) {
    return new Promise((resolve, reject) => {
      if (str.length > 10) {
        resolve("Big word");
      } else {
        reject("Small Number");
      }
    });
  }
  
  stringLength("hello world")
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
  
  stringLength("hello")
    .then((result) => console.log(result))
    .catch((error) => console.log(error));


    // codewars problem 1 :
    // Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

    function countSheep(num) {
        let murmur = "";
        for (let i = 1; i <= num; i++) {
          murmur += `${i} sheep...`;
        }
        return murmur;
      }
      
      console.log(countSheep(3)); // "1 sheep...2 sheep...3 sheep..."
      console.log(countSheep(5)); // "1 sheep...2 sheep...3 sheep...4 sheep...5 sheep..."