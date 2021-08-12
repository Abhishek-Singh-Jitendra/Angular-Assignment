var orders = {
    Order: {
        oid: "O14935",
        order_items: [{
                OrderItem: { item_id: "I1001", product: { pid: "p1001", pname: "Tomato", unit_price: 30.00 }, quantity: 6, discount: 0.05 }
            },
            {
                OrderItem: { item_id: "I1002", product: { pid: "p1002", pname: "Potato", unit_price: 30.00 }, quantity: 6, discount: 0.05 }
            },
            {
                OrderItem: { item_id: "I1002", product: { pid: "p1003", pname: "Meat", unit_price: 30.00 }, quantity: 6, discount: 0.05 }

            }
        ]
    }
};
module.exports = { orders: orders }