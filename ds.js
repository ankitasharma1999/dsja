//STRING
/*The JavaScript string is an object that represents a sequence of characters.
There are 2 ways to create string in JavaScript:*/
console.log("1)By string literal: ");
var a="cloudeq";
console.log(a);

console.log("2)By string object (using new keyword): ");
var str=new String("hello");
console.log(str);

//string methods
var text = 'Hello World!';
console.log(text.length); // 13
console.log(text.charAt(0));         // Output: "H"
console.log(text.slice(7, 12));      // Output: "World"
console.log(text.indexOf('o'));      // Output: 4
console.log(text.toUpperCase());     // Output: "HELLO, WORLD!"
console.log(text.toLowerCase());     // Output: "hello, world!"
console.log(text.concat(" ",text));  // Hello World! Hello World!
console.log(text.replace('World', 'Universe')); // Output: "Hello, Universe!"
