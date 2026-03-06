// Reduce method
let nums = [5,10,15]; 
    let total = nums.reduce((sum, current) => sum + current, 0);
    let average = total / nums.length;
console.log(average);

//REduce to object count by category
let items = ["pen","pencil","pen","eraser"];
let count = items.reduce((a,b)=>{
    a[items] = (a[items] || 0) + 1;
    return a; 
},{});
console.log("Items count: ",count);