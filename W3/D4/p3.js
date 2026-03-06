//array map
let numbers = [1,2,3,];
let squared = numbers.map(num => num * num);
console.log(squared);

//array map
let prices = [100,200,300,400];

let priceWithGST = prices.map(price => price + price*0.18);
console.log("Price w/o tax: ",prices);
console.log("Price with tax: ",priceWithGST);

//Using the map to extract files
let users = [
    {name:"Anu", age: 24},
    {name:"Ani", age: 28}
];

let names = users.map(user => user.name);
console.log(" ",names);