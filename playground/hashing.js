const {SHA256} = require("crypto-js");

const jwt = require("jsonwebtoken");

// var message = "I am user number 1";
// var hash = SHA256(message).toString();

// console.log(`User message ${message}`);
// console.log(`User message digest ${hash}`);

var data = {
    id:10
};

var token = jwt.sign(data, "secret");

console.log(token);

var encoded = jwt.verify(token, "secret");

console.log(encoded);