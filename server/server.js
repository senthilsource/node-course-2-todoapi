var express = require("express");
var bodyParser = require("body-parser");
var {ObjectID} = require("mongodb");
var {mongoose} = require("../server/db/mongoose");
var {userModel} = require("../server/models/users");
var {todoModel} = require("../server/models/todo");

var port = process.env.PORT || 3000;
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

app.get("/todos/:id", (req, res)=>{
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    console.log("Id is not valid");
    return res.status(404).send("Id is not valid");
  }

  todoModel.findById(id).then((todos)=>{
    if(!todos){
      return res.status(400).send();
    }else{
      res.send(todos);
    }
  }, (err)=>{
    if(err){
      res.status(500).send("Error finding records");
    }
  }).catch((e)=>{
    res.status(500).send("Error finding records");
  });

});

app.delete("/todos/:id", (req, res)=>{
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    console.log("Id is not valid");
    return res.status(404).send("Id is not valid");
  }

  todoModel.findByIdAndRemove(id).then((todos)=>{
    if(!todos){
      return res.status(400).send();
    }else{
      res.send(todos);
    }
  }, (err)=>{
    if(err){
      res.status(500).send("Error finding records");
    }
  }).catch((e)=>{
    res.status(500).send("Error finding records");
  });

})

app.listen(port, () => {
  console.log(`App started in port ${port}`);
})


//mongoose.connection.close();
