var express = require("express");
var bodyParser = require("body-parser");

var {
  mongoose
} = require("../server/db/mongoose");
var {
  userModel
} = require("../server/models/users");
var {
  todoModel
} = require("../server/models/todo");


var app = express();
app.use(bodyParser.json());
app.post("/todos", (req, res) => {

  var todos = new todoModel({
    text: req.body.text
  });

  todos.save().then((results) => {
    res.send(results);
  }, (err) => {
    res.status(400).send(err);
  });

});

app.get("/todos", (req, res)=>{
  todoModel.find().then((results)=>{
    res.send(results);
  }, (err)=>{
    res.status(400).send();
  });
});


app.listen(3000, () => {
  console.log("App started in port 3000");
})


//mongoose.connection.close();
