const Payment = require("./payment");
const Chase = require("./chase");
const City = require("./city");

const payment= new Payment()

payment.pay(new Chase(200, "0125479"))
payment.pay(new City(240, "01254345"))