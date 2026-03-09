// Employee payroll records
let employees = [
 {name:"Asha", basePay:30000, bonus:2000, taxRate:0.1},
 {name:"Ravi", basePay:25000, bonus:1500, taxRate:0.08},
 {name:"Kiran", basePay:-2000, bonus:1000, taxRate:0.1}, // invalid
 {name:"Meena", basePay:28000, bonus:0, taxRate:0.12},
 {name:"Arun", basePay:32000, bonus:3000, taxRate:1.5} // invalid
];


//  Filter valid records
let validRecords = employees.filter(emp =>
 emp.basePay > 0 && emp.bonus >= 0 && emp.taxRate >= 0 && emp.taxRate <= 1
);


//  Create netPayReport
let netPayReport = validRecords.map(emp => {

 let gross = emp.basePay + emp.bonus;   // total salary
 let netPay = gross - (gross * emp.taxRate); // salary after tax

 return { name: emp.name, netPay: netPay };
});


//  Calculate total net payout
let totalNetPayout = netPayReport.reduce((sum, emp) => sum + emp.netPay, 0);


//  Print results
console.log("Valid Records:", validRecords);
console.log("Net Pay Report:", netPayReport);
console.log("Total Net Payout:", totalNetPayout);