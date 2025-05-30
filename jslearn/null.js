//null
// null is represented "no value" or "nothing".
console.log(null);
//False Values  //In JavaScript, undefined and null are treated as false values.
if (null || undefined) {
    console.log('null is true');
} else {
    console.log('null is false');
}
 //JavaScript typeof: null and undefined
 const d = null;
console.log(typeof d); // object
let b;
console.log(typeof b); // undefined

//Comparing null and undefined
console.log(null == undefined); // true
//In JavaScript, == compares values by performing type conversion. Both null and undefined return false. Hence, null and undefined are considered equal.However, when comparing null and undefined with strict equal to operator ===, the result is false. For example,
console.log(null === undefined); // false