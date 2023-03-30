const Bank= require("./bank")

class City extends Bank{
    processPayment(){
        console.log('payment processed by City')
    }
}

exports.module= City