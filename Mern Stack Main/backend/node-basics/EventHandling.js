var EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("Place Order",function(data){
    console.log("Order Placed =",data);
});

eventEmitter.on("Order Delivered",function(data){
    console.log("Order Delivered at",data);
});
eventEmitter.emit("Place Order","Price:200");
eventEmitter.emit("Order Delivered","Hyd");