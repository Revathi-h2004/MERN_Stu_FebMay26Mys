const items = {
    item1: "Laptop",
    item2: "server",
    item3: "cloudAPI"
};
for(const [items,itemName] of Object.entries(items)){
    console.log(`${items}:${itemName}`);
}