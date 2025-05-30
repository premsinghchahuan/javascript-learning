// symbol
// symbol is a primitive data type introduced in ES6
// that represents a unique and immutable value. Symbols are often used to create unique identitfiers for object properties, ensureing that property names do not clash with others in the codebase.
//two symbols with the same description

const value1 = Symbol('hello');
const value2 = Symbol('hello');

console.log(value1 === value2); // false
// creating a symbol 
let x=Symbol();
console.log(x);
let v=Symbol("hy");
    console.log(v);
    
    //Access Symbol Dicription    problem
   // const a =Symbol('hy');
  //  console.log(a.this was the praveen);


  //Add Symbol as an Object Key  // we can add symbols as keys to objects, using square brackets []
  let obj =Symbol("obj");
    let key ={
        funtion: "Object" ,
        [obj]:"this was the object key"
       };
       console.log(key);

       //Symbols are not included in for...in Loop
//The for...in loop does not iterate over Symbolic properties. 
let id = Symbol('id');
let person ={
    name: 'praveen',
    age: 25,
    [id]: 5409
};
for(let key in person){
    console.log(key);
};


                         //Benefit of Using Symbols in Object
 // If the same code snippet is used in various programs, then it is better to use Symbols in the object key. It's because you can use the same key name in different codes and avoid duplication issues
 let per = {
    name: "Jack"
};

// creating Symbol
let di = Symbol("id");

// adding symbol as a key
per[id] = 12;
console.log(per);
//In the above program, if the person object is also used by another program, then you wouldn't want to add a property that can be accessed or changed by another program. Hence by using Symbol, you create a unique property that you can use.Now, if the other program also needs to use a property named id, just add a Symbol named id and there won't be duplication issues
//let per = {
    name: "Jack"
  //};

//let di = Symbol("id");

// per[id] = "Another value"
// console.log(per);

                                            // Symbol Methods
                                           // There are various methods available with Symbol.

                  //Method	                                       Description
             //     for()	                              Searches for existing symbols
//                 keyFor()	                    Returns a shared symbol key from the global symbol registry.
//                toSource()	                Returns a string containing the source of the Symbol object
//                toString()                    Returns a string containing the description of the Symbol
//                valueOf()                  	Returns the primitive value of the Symbol object.

// get symbol by name
let sym = Symbol.for('hello');
let sym1 = Symbol.for('id');

// get name by symbol
console.log( Symbol.keyFor(sym) ); // hello
console.log( Symbol.keyFor(sym1) ); // id
//console.log( Symbol.toSource(sym1));
console.log(toString(sym1));

let vale= true;
let value4 = vale.valueOf(false);
console.log(value4);


//Properties	                             Description
//asyncIterator	                       Returns the default AsyncIterator for an object

//hasInstance	                       Determines if a constructor object recognizes an object as its instance
//isConcatSpreadable	Indicates if an object should be flattened to its array elements
//iterator	Returns the default iterator for an object
//match	Matches against a string
//matchAll	Returns an iterator that yields matches of the regular expression against a string
//replace	Replaces matched substrings of a string
//search	Returns the index within a string that matches the regular expression
//split	Splits a string at the indices that match a regular expression
//species	Creates derived objects
//toPrimitive	Converts an object to a primitive value
//toStringTag	Gives the default description of an object
//description	Returns a string containing the description of the symbol
