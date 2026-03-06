// Filter method
let marks = [75,49,56,70,82,51,68];
let passed = marks.filter(mark => mark =>70);
    console.log(marks);
    console.log(passed);
    let students = [
    {name:"Bhavya", score: 75},
    {name:"Anu", score: 49},
    {name:"Appu", score: 56},
    {name:"Abhi", score: 82},
    {name:"Arun", score: 70},
    {name:"Anusha", score: 51},
    {name:"Anish", score: 68},
];
let result = students.filter(s => s.score > 70).map(s => s.name);
console.log(result);