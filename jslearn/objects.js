                                 // JavaScript Objects
            //JavaScript object is a variable that can store multiple data in key-value pairs
            // student object 
            const student = {
                name: "ramesh kumar",
                RollNo:12345,
            };
            console.log(student);
            
            
            //Create JavaScript Objects
           // the syntax for create an object is as follows.
        //    const objectName = {
         //     key1: value1,
       //     key2: value2,
        //    ...,
      //      keyN: valueN
   //     };
     //objectName - Name of the object.
    //key1: value1 - The first key-value pair.
   //key2: value2 - The second key-value pair.
 //keyN: valueN - The Nth key-value pair.
  //Each key-value pair has a colon : between them and is separated by a comma ,.
    
  //Note: You can also create objects in a single line. For example,

  const person = { name: "single line", age: 20 };
  console.log(person);
   //However, it's preferable to break down objects into multiple lines for better readability.
   //Using Dot Notation
   const pice =  {
    name : "ramesh",
    age: 56
   };
   console.log(pice.name);
   console.log(pice["age"]);
        
       //JavaScript Object Operations
       //In JavaScript, we can perform various operations on object properties like modifying, adding, deleting, and so on. Let's discuss some of them.
       //1. Modify Object Properties
    //   We can modify object properties by assigning a new value to an existing key. For example,
    const preson = {
        name: "mahesh",
        age: 38
    };
    preson.age = 49;
    console.log(preson);

                              //2. Add Object Properties
                            const student1 ={
                                name: "ganesh",
                                age: 25
                            };
                            student1.RollNo=456;
                            student1.subject ="maths";
                            console.log(student1);


                        //3. Delete Object Properties
                        let student2= {
                            name:"kamesh",
                            age:30,
                            subject:"science",
                            
                        };
                        delete student2.age;
                        console.log(student2);

                        //JavaScript Object Methods
                        let method ={
                           mathod: "function()",

                        
                        sulesh:function() {
                            console.log("this was the method add function in the object"); 
                        }
                    };
                   method.sulesh();
                   //What is a nested object?
                   //A nested object contains another object as a property. 
                   let student5= {
                    name:"kamesh",
                    age:30,
                    subject:"science",
                    address:{
                        city:"pune",
                        contry:"indina",

                    }
                    
                };
                
                console.log(student5);

                //Access Properties of Nested Objects
console.log(student5.address.city);
console.log(student5["address"]["city"]);

