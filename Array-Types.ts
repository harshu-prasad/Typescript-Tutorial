// Array types are Typescript types to define array and types of items it has
// Array types look like string[] and more
// This means that element in that array should be string
// If you add type any[] then you can add element of all types in an array

let arrayName: string[];
arrayName = ['a', 'b', 'c'];

const anyArrayName: any[] = ['a', 23, true];

console.log(arrayName);

console.log(anyArrayName);
