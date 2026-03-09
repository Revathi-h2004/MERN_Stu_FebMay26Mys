// Permission rules
let rules = [
 {role:"admin", action:"READ", allowed:true},
 {role:"admin", action:"WRITE", allowed:true},
 {role:"student", action:"READ", allowed:true},
 {role:"student", action:"WRITE", allowed:false},
 {role:"guest", action:"READ", allowed:false}
];

//  Keep only allowed rules
let allowedRules = rules.filter(r => r.allowed);

//  Create role:action pairs
let allowedPairs = allowedRules.map(r => r.role + ":" + r.action);

//  Count allowed rules for each role
let summary = allowedRules.reduce((count, r) => {
 count[r.role] = (count[r.role] || 0) + 1;
 return count;
}, {});

// Print results
console.log("Allowed Rules:", allowedRules);
console.log("Allowed Pairs:", allowedPairs);
console.log("Summary:", summary);