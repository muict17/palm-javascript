// int a = 100;
// char a = 'b';

// var, let, const

let b = 60;
b = 20;
b = "500";

const a = 30;

// dynamic data types
const Integer = 499;
const Floating = 29.29;

// console.log(typeof Integer);
// console.log(typeof Floating);

// array
const arr = [1, 2, 3, 4, "string", true, false, , , ,]; // <-- trailing comma
console.log(arr[0]);
console.log(arr[10]);

// add new element;
arr.push(100);
console.log(arr);

// remove last element
arr.pop();
console.log(arr);

// remove by index (mutate)
arr.splice(3, 1);

console.log("last array", arr);

// remove by index (returing)
const newArr = arr.slice(1, 3);
console.log(newArr);
console.log(arr);

// find index by value

const listString = ["a", "b", "c", "e", "0"];
const indexOfB = listString.indexOf("b");
console.log(indexOfB);

// find Index With remove index
console.log("before: ", listString);
const indexOfE = listString.indexOf("e");
listString.splice(indexOfE, 1);
console.log("after: ", listString);

// object
const userObject = {};
console.log(userObject);
// add new properties
userObject["user_id"] = 107;
userObject["username"] = "Tar";
console.log(userObject);
//access value;
console.log(userObject["username"]);
console.log(userObject.username);

// delete a property;
delete userObject["user_id"];
console.log(userObject);

// array object
const arrObject = [];
arrObject.push({ user_id: 107, username: "tar" });
console.log(arrObject);
