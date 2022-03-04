// Tuples are not some kind of a data type of Javascript, Instead it is just a special case of an
// array made for use in Typescript only
// Tuples in Typescript means actually an Array with a fixed length and fixed types of elements
// Tuples types are like tupleName: [type1,type2]

// Here is a working example
const tupleName: [number, string, boolean] = [2, 'string', true];

// If I try to broke rule of tuple like I will be doing below I'll get an error
// tupleName[0] = 'ate'; // This is wrong

console.log(tupleName);
