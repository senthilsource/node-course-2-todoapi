const {SHA256} = require("crypto-js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

var password = "Password!";

// bcrypt.genSalt(10, (err, salt)=>{
//     console.log(salt);
//     bcrypt.hash(password, salt, (err, hash)=>{
//         console.log(hash);
//     });
// })

var hashedPassword = '$2a$10$HAgRYtoHob1PEu3L/K1bpOOn2akHqpA3XWhxU0bV6qWnDClGwb.sC';


bcrypt.compare(password, hashedPassword, (error, res)=>{
    console.log(res);
})

// var message = "I am user number 1";
// var hash = SHA256(message).toString();

// console.log(`User message ${message}`);
// console.log(`User message digest ${hash}`);

// var data = {
//     id:10
// };

// var token = jwt.sign(data, "secret");

// console.log(token);

// var encoded = jwt.verify(token, "secret");

// console.log(encoded);