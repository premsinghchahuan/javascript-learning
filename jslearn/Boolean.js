 // Boolean 
 // In JavaScript, booleans are the primitive data types that can either be true or false
 // they are often used in conditional statements and loops to control the flow of the program.
 const a= true;
 const b= false;
 const c="true";
 console.log(a);
 console.log(typeof(b));
 console.log(typeof(c)); // using ""make boolean into the string
  //The boolean values are mostly used for Comparison and Logical Operators. //Equal to operator == returns true if the operands are equal.
  console.log(5 == 6); // false
  //Not equal to operator != returns true if all the operands are not equal.
  console.log(5 != 6); // true
  // Logical AND && returns true if both the operand values are true, else evaluates to false

  console.log(true && false); // false
  //The boolean values are used in if...else statements and for loops as well.//Here's a list of values that gets converted to specific boolean values
 //                          Data type	    Boolean Value
//                          undefined	         false
//                             null            	false
//                             NaN	            false
//                             ''	            false
//                             0            	false
//                            20              	true
//                            -20           	true
//                          'hello'	            true

               //JavaScript Boolean Methods
   //Here is a list of built-in boolean methods in JavaScript.
   //    Method      	Description
//    toString()	    returns a boolean value by converting boolean to a string
//    valueOf()	         returns the primitive value of a boolean
      let string=true;
        let booleanvalue=string.toString();
        console.log(typeof(booleanvalue));
        console.log(booleanvalue);

        // using valueof() method
        let string1="false";
        let value=string1.valueOf();
        console.log(string1);
        console.log(typeof(value));
         //JavaScript  Boolean() Funtion
 //The Boolean() function is used to convert various data types to boolean values
  console.log(Boolean(true));
  console.log(Boolean(20));
  //Everything with a value returns true. For example,
  console.log(Boolean(-20));
  console.log(Boolean('hello'));
  console.log(Boolean({a:1}));
  console.log(Boolean(20));

  //In JavaScript, undefined, null, 0, NaN, '' converts to false.
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));


    // Boolean Objects  //we can also create a boolean value using the new keyword. 

console.log(typeof(new Boolean(true)));
console.log(new Boolean(true));

       