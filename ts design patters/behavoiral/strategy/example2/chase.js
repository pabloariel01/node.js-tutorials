const Bank= require("./bank")

class Chase extends Bank{
    processPayment(){
        console.log('payment processed by chase')
    }
}

exports.module= Chase