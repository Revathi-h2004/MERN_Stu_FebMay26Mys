//logging

console.log("console logging");

console.warn("warning message");

console.error("Error message");

let users = [
    {id:1,name:"shanvi"},
    {id:2,name:"MS"},
];
// console.log(users);
console.table(users);

//Group related logs
console.group("Group logs");
console.log("Log 1");
console.log("Log 2");
console.log("Log 3");
console.groupEnd();

// Measure execution time
console.time("LoopTimer");
for(let i=0;i<100;i++){
}
console.timeEnd("LoopTimer");