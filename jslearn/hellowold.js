console.log(h);
var h='10';
// this was the hello world
console.log("hello world");

//example of variable declaration
function he() {
    var a = 9;
    console.log(a);
}
he();
// let example 
function h2() {
    let h = 10;
    console.log(h + 10);
}
h2();
// there was the let block-scoped 
function binod() {
    let a = "praveen";
    if (a == "praveen") {
        let b = "sir";
        console.log(a + b);

    }
    // console.log(a+b);
}
binod();
// example of the var 
function varexample() {
    var a = 'vinod';
    if (a == 'vinod') {
        var b = 'kumal';
        console.log(a + b);
    }
    console.log(a + 'ramesh' + b);
}
varexample();
// in var we can re-declare the variable
var a = 3;

var a = 4;
console.log(a);
//but there in let we don't redeclare the variable
// let b=3;
let b = 5;
console.log(b);

// console.log()
let example = "console.log";
console.log(example);

// we can store string and variables combine in the this method of console.log
let variables = "method";
console.log('this was the strings and those was the variables', variables);


// this was the anthore methode
//       let count= 2;
//         console.log("there was the %d methode ",count); //%d is a placeholder for a decimal or integer number.

// this the example of the templete literals
let count = 5;
let message = `there was the ${count} example of the templete literals.`; // on this keybord we hav this(')but in this example we need this symbel(`)
console.log(message);

// string enclosed within single quotes
let singlequotes = 'single quotes';
console.log(singlequotes);
// string enclosed within double quotes
let doublequotes = "bouble quotes";
console.log(doublequotes);
// string enclosed within backticks
let backticks = `back ticks`;
console.log(backticks);         //Backticks are generally used when you need to insert variables or expressions into a string. This is done by wrapping variables or expressions with ${variable or expression}.

// type of the accasse string charactars
// there are the two way to access 
//first one is the using indexes
let indexes = "string characters";
console.log(indexes[2]);     //there out put its r becouse of there starting from 0,1,2(0 is s, 1 is t,2 is r this was the out put)                        


// secound one is the using charAt method
let charAt = "secound way";
console.log(charAt.charAt(0)); //there out put is the s becouse of there 0 is starting s = 0



//feature of the JS string Immutable
let feature = "feature";
feature = "FeatuRe";       // that is in JS we not change the string one charaters using the code feature[0]="F"    
console.log(feature);  // this was the example of the in JS we can assing the new value to strings variables

// JS Strings was the case-sensitive
let uppercase = "A";
let lowercase = "a";
console.log(uppercase == lowercase);  // in the JS string upper case and lowercase was the treated different values as we can see "A" and "a" treated different values.


//JavaScript String Methods
// Method	                                                                                                          Description

//charAt()	                                                                            // Returns the character at the specified index.
// example
let chet = "charAt";
console.log(chet.charAt(1).toUpperCase());


//concat()	                                                                            // Joins two or more strings.
// example
let stringjoin = "make from";
let joinstring = stringjoin.concat(" this line ", "help", "of the concat");
console.log(joinstring);


//replace()                                                                          //   Replace a string with another string.
// example
const message1 = "yah ho";
let see = message1.replace("ho", "replace");
console.log(see);


//split()	                                                                        // Converts the string to an array of strings.
// example
const sprit = "split krta hai";
let space = sprit.split("hai");
console.log(space);                        // yah split("") ke andar ke kisi jis number string speca or symber ko speit (ghayab) krta hai


//substr()	                                                      //Returns a part of a string by taking the starting position and length of the substring.
//exampe his not use on basic js uses



//substring()	                                                  //Returns a part of the string from the specified start index (inclusive) to the end index (exclusive).
let substringexample = " how the use substring";
let output = substringexample.substring(4, 28);
console.log(output);

//slice()	                                                        //Returns a part of the string from the specified start index (inclusive) to the end index (exclusive).
const slice1 = "slice example";
let sliceoutput = slice1.slice(0, 5);
console.log(sliceoutput);


//toLowerCase()	                                                            //Returns the passed string in lowercase.
const tolower = "LOWERCASE-EXAMPLE";
let lowercase1 = tolower.toLowerCase();
console.log(lowercase1);


//toUpperCase()	                                                               //Returns the passed string in uppercase.
const touppercase = "uppercase-example";
let touppercase1 = touppercase.toUpperCase();
console.log(touppercase1);


//trim()                                                                          //Removes whitespace from the strings.
const trimex = "        trim example            ";
let trimop = trimex.trim();
console.log(trimop);     // there trim() remove all the whitespace from the beginning and end of the string.


// includes()                                                              //	Searches for a string and returns a boolean value.
let includesex = "includes example";
let includes1 = includesex.includes("includes");
console.log(includes1);
// search()                                                                  // Searches for a string and returns the position of a match.
let searchex = "search example";
let search1 = searchex.search("example");
console.log(search1);     // yah search() method string ke andar ke kisi jis number string speca or symber ko search krta hai aur uska index number return krta hai




 // this function write for the  first capiter character of the string 
 let firstcap=(name)=>name.toLowerCase().replace(/\b/g,(c)=>c.toUpperCase());
 console.log(firstcap("pRem singh")); 
 
 
 // let example
 let replace2=10;
 replace2=15;
 console.log(replace2);
// const example
 const ravar=16;
// ravar=20;
 console.log(ravar);
 
 // let example
 //let a=10;
 let y = 3;
 console.log(y);
 
 //var example
 var g=40;
 var g=50;
 console.log(g);
                  
         //string length
         let length1="this was the length";
         console.log(length1.length);

         //quote inside of the quote
         let quote1 ="this was the 'qutesh' the";
console.log(quote1);
         let quote2 = 'this way was \'not\' \\now the right way\/ right way'; // if we want this we use in douber quotes("") single qoutes('') but in this single quote('') we use the douber quote("") if we want to use we use \"
console.log(quote2);


      //Convert to String       We use the String() function to convert various data types to strings. For example, is ka use km hi krte hai kyu ki is me agar()to agr string to object ki jarurt hongi to auto converd kr deta is liye objct ka use nhi krna



let value1 = 225;  // number
let value2 = true;  // boolean

//convert to string
let result1 = String(value1);
let result2 = String(value2);

console.log(result1);  // 225
console.log(result2);  // true

// JavaScript Escape Characters            //In JavaScript, you use escape characters to insert characters that are difficult or impossible to represent directly in a string.You can use the backslash escape character \ to include special characters in your string. For example,
                                           //In the above program, each \" inserts a double quote inside the string without causing syntax errors.
                                           // insert double quotes inside string
let name = "My name is \"Peter\".";
console.log(name);

// Here are other ways that you can use escape character \:
//      Code	Character
//        \"	Double Quote
//        \\	Backslash
//        \n	New Line
//        \r	Carriage Return
//        \v	Vertical Tab
//        \t	Horizontal Tab
//        \b	Backspace
//        \f	Form feed

// JS multiline STRING 
//1. Multiline in code but not in the output.
// use the + operator
let message3 = "This is a long message " +
    "that spans across multiple lines " + 
    "in the code.";

// use the \ operator
let message5 = "This is a long message \
that spans across multiple lines \
in the code.";

console.log(message3);
console.log(message5);

//2. Multiline in both code and output.
// use template literal
let message6 = `This is a long message
that spans across multiple lines
in the code.`;

// use escape character \n
// each \n inserts a new line into the string
let message7 = "This is a long message\nthat spans across multiple lines\nin the code.";

console.log(message6);

// print an empty line
console.log();

console.log(message7);
 
 
 // Java Script number  there are 2 type 

 //1.Integer nuber without decimal point 3,19
 // example
 let integar=10;
 console.log(integar);

 //2.Decimal number with decimal pont 2.4,3.6,19.5;
    //example
    let decimal=3.4;
    console.log(decimal);

    //javascript number can also represent specil numeric value
    //Infinity, -Infinity, and NaN (Not-a-Number). 
    //example
   function number() { let number1=3/0;
    console.log(number1);
    //INfinity
    let number2=-3/0;
    console.log(number2);
    //-Infinity
    let number3="hello"/4;
    console.log(number3);
    //NaN
   }
   number();

   //NUMBER NaN
   // NaN is a special value in JavaScript that stands for the "Not-a-Number" value. It is used to represent a value that is not a vaild number.
   //exmplan
   let nan=4-"Hello";
   console.log(nan);


   //NaN is Number     JavaScript isNaN() Method The built-in isNaN() function can be used to find if a value is a number.
   // JavaScript Infinity
   //Infinity is a special value that signifies an amount larger than any finite number.
   let int=-1/0;
   console.log(int);  //Here, dividing a positive number by 0 yields Infinity, while dividing a negative number by 0 results in -Infinity.
             


      // java script print cepitar character of string
   let pra='praveen';
   console.log(pra.charAt(0).toUpperCase());
   

