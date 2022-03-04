// Object Types made to define a object and and types of keys that object could have

// object type makes just an empty object and so whatever is written inside it makes no meaning
// This object is just like obj1 = {}
// const obj1: object = {
//   name: 'random',
//   age: 8989,
// };

// // So this will not work
// console.log(obj1.name);

// Object type looks like objName: {
//     key1: type1;
//     key2: type2;
// }

// An example of a working object type is
const objName: {
    name: string;
    age: number;
} = {
  name: 'Random',
  age: 34,
};

// The below code works now
console.log(objName.name);
