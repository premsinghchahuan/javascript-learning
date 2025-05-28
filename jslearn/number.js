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
console.log(parseFloat("19.0119"));
console.log(parseFloat("37"));
console.log(parseFloat("2938.4ldjf"));
                         //parseInt()                                                  	Converts the numeric string to an integer.
                         const stringDate = "1996";

                         // parse the string to decimal
                         let intDate = parseInt(stringDate,10);
                         console.log(intDate);
                         
                         //ex2
                         const stringDats = "1996";

                         // parse the string to decimal
                         let intDats = parseInt(stringDats,16);
                         console.log(intDats);
                         


                      // toExponential()                                               	Returns a string value for a number in exponential notation.
                  ///    num.toExponential(fractionDigits) //syntax of toExponential()
console.log((12434).toExponential(1));// same to exponential there if we give there out theyput number

console.log(1.24e4);

                       //toFixed()	                                                    Returns a string value for a number in fixed-point notation.
console.log((12.74).toFixed(0));
console.log((199.7686).toFixed(2))
console.log((195e4).toFixed(4));
console.log(typeof(1.23443).toFixed(3));
                    //toPrecision()	                                                    Returns a string value for a number to a specified precision.
                    let topre = 123.456;
                    console.log(topre.toPrecision(5)); // "123.46" (5 digits total)

                    let bigNum = 1234.567;
                     console.log(bigNum.toPrecision(3)); // "1.23e+3" (scientific notation)

                     let smallNum = 7.89;
console.log(smallNum.toPrecision(5)); // "7.8900" (padded with zeros)
                    //toString()                                                     	Returns a string value in a specified radix (base).
//toString() is a fundamental method in JavaScript that converts a value to its string representation.
console.log((43).toString());//number to string.
console.log((true).toString());  // boolean to string 
console.log(["pravin","purohit"].toString());//array to string
console.log({name: "pravin", age :"21"}.toString()); //object to string

console.log((10).toString(2));  // "1010" (binary)
console.log((10).toString(8));  // "12" (octal)
console.log((10).toString(16)); // "a" (hexadecimal)

                    //toLocaleString()	                                                Returns a string with a language-sensitive representation of a number.
                    let LO = 1234567.89;

                    console.log(LO.toLocaleString()); 
                    // US: "1,234,567.89"
                    let date = new Date();

console.log(date.toLocaleString('en-US'));
// DATE and time acondingh to us

console.log(date.toLocaleString('in-IN'));
// date AND TIME ADDODING TO INDIA



                     //More on JavaScript Numbers
                     //+ Operator With Numbers
                     console.log(typeof("5"+3));
                     console.log(typeof(5+3));


                    // Numeric Operations on Numeric Strings   // when we use number string operations on numeric java stript is auto converted to a number 
                    console.log(typeof("0"-10));
                    console.log(typeof("10"-0));
                    console.log(typeof("10"*3));
                    console.log(typeof("10"/4));


                     //JavaScript Precision Problems     //In JavaScript, numbers (especially decimals) aren't always stored accurately, leading to precision problems
       let preci = 0.1 + 0.2;
      console.log(preci.toFixed(2)); // 0.30     sulution of the problem is use toFixed() method
                     //JavaScript Number() Function
                     console.log(Number("23"));
                     let tru = false;
                     let N=Number(tru);
                     console.log(N);

                     //Number Objects             //In JavaScript, numbers can be represented either as primitive values or as instances of the Number object. we can conveted number to object usig new 

                     console.log(new Number(10));   //object type