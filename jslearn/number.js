// [2]Java Script number  there are 2 type 

 //(i).Integer nuber without decimal point 3,19
 // example
 let integar=10;
 console.log(integar);

 //(ii).Decimal number with decimal pont 2.4,3.6,19.5;
    //example
    let decimal=3.4;
    console.log(decimal);

    //[B.]javascript number can also represent specil numeric value
    //Infinity, -Infinity, and NaN (Not-a-Number). 
    //example
   function number() { let number1=3/0;
    console.log(number1);
    //(i)INfinity
    let number2=-3/0;
    console.log(number2);
    //(ii)-Infinity
    let number3="hello"/4;
    console.log(number3);
    //(iii)NaN
   }
   number();

   //[C.]NUMBER NaN
   // NaN is a special value in JavaScript that stands for the "Not-a-Number" value. It is used to represent a value that is not a vaild number.
   //exmplan
   let nan=4-"Hello";
   console.log(nan);


   //NaN is Number     JavaScript isNaN() Method The built-in isNaN() function can be used to find if a value is a number.
   //[D.] JavaScript Infinity
   //Infinity is a special value that signifies an amount larger than any finite number.
   let int=-1/0;
   console.log(int);  //Here, dividing a positive number by 0 yields Infinity, while dividing a negative number by 0 results in -Infinity.
             

   //[E.]JavaScript Number Methods
   //Here is a list of built-in number methods in JavaScript.
   
                          //  Method	                                                                                     Description
                            // isNaN()	                                                  Determines whether the passed value is NaN.
let isNanex=NaN;// NaN is a special value in JavaScript that stands for "Not-a-Number". It is used to represent a value that is not a valid number 
let Nan=isNaN(isNanex);
console.log(Nan);


                           //isFinite()	                                                  Determines whether the passed value is a finite number.
console.log(isFinite(198));
console.log(isFinite(NaN));


                           //isInteger()                                                  Determines whether the passed value is an integer.
console.log(Number.isInteger(256));
console.log(Number.isInteger(3.0));
console.log(Number.isInteger(3.1));
console.log(Number.isInteger("254"));
console.log(Number.isInteger([58]));

                          //isSafeInteger()	                                              Determines whether the passed value is a safe integer.
console.log(Number.isSafeInteger(89));
console.log(Number.isSafeInteger("-451"));
console.log(Number.isSafeInteger(0.6969));
console.log(Number.isSafeInteger(Math.pow(2, 53)));
console.log(Number.isSafeInteger(Math.pow(2, 53) - 1));
console.log(Number.isSafeInteger(Infinity));
console.log(Number.isSafeInteger(3.0));

                         //parseFloat()	                                                  Converts the numeric floating string to a floating-point number.



                         //parseInt()                                                  	Converts the numeric string to an integer.



                      // toExponential()                                               	Returns a string value for a number in exponential notation.



                       //toFixed()	                                                    Returns a string value for a number in fixed-point notation.



                    //toPrecision()	                                                    Returns a string value for a number to a specified precision.



                    //toString()                                                     	Returns a string value in a specified radix (base).



                     //valueOf()	                                                    Returns the number's value.



                    //toLocaleString()	                                                Returns a string with a language-sensitive representation of a number.


   