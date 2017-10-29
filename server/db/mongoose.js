var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

 mongoose.connect("mongodb://senthil:senthil@ds139585.mlab.com:39585/nodejsdb" || "mongodb://localhost:27017/TodoApp");

//mongoose.connect("mongodb://localhost:27017/Users");

module.exports = {mongoose};
