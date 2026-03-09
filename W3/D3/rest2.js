function invoice(gstRate = 0.18, ...items) {

    let subtotal = 0;

    for (let i = 0; i < items.length; i++) {

        // stop if name is STOP
        if (items[i].name === "STOP") {
            break;
        }

        // skip invalid items
        if (items[i].price <= 0 || items[i].qty <= 0) {
            continue;
        }

        subtotal = subtotal + items[i].price * items[i].qty;
    }

    let gst = subtotal * gstRate;
    let total = subtotal + gst;

    return { subtotal: subtotal, gst: gst, total: total };
}
let result = invoice(
    0.18,
    { name: "Pen", price: 10, qty: 3 }
);

console.log(result);