// Conditional statements
let age = 20;
if (age < 13) {
    console.log("Child");
}
else if(age<18){
console.log("Teenager");
 }
 else
{
    console.log("Adult");
}
switch statements
console.log("conditional statements");
let day = "tuesday"
switch (day) {
    case "monday":
        console.log("start of the week");
        break;
    case "Wednesday":
        console.log("Mid of the week");
        break;
    case "friday":
        console.log("end of the work week");
        break;
    default:
        console.log("some day in the week");
        break;
}
// Type conversion
let n = Number("ABC");
console.log("n: ",n," Type of n:",typeof n, "isNaN", isNaN(n));