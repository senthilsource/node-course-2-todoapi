

const _ = require("lodash");
var express = require("express");
var bodyParser = require("body-parser");
var { ObjectID } = require("mongodb");
var { mongoose } = require("../server/db/mongoose");
var { userModel } = require("../server/models/users");
var { todoModel } = require("../server/models/todo");
var config = require("../server/config/config.js");
var authenticate = require("../server/middleware/authenticate.js");


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

app.get("/users/me", authenticate, (req, res) => {
  res.send(req.user);
});

app.post("/users", (req, res) => {
  var body = _.pick(req.body, ["email", "password"]);
  var user = new userModel(body);
  user.save().then(() => {
    return user.generateAuthToken();
    //res.status(200).send(results);
  }).then((token) => {
    res.header("x-auth", token).send(user);
  }).catch((e) => {
    res.status(400).send(e);
  });
});

app.get("/todos", (req, res) => {
  todoModel.find().then((results) => {
    res.send(results);
  }, (err) => {
    res.status(400).send();
  });
});

app.get("/todos/:id", (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    console.log("Id is not valid");
    return res.status(404).send("Id is not valid");
  }

  todoModel.findById(id).then((todos) => {
    if (!todos) {
      return res.status(400).send();
    } else {
      res.send(todos);
    }
  }, (err) => {
    if (err) {
      res.status(500).send("Error finding records");
    }
  }).catch((e) => {
    res.status(500).send("Error finding records");
  });

});

app.delete("/todos/:id", (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    console.log("Id is not valid");
    return res.status(404).send("Id is not valid");
  }

  todoModel.findByIdAndRemove(id).then((todos) => {
    if (!todos) {
      return res.status(400).send();
    } else {
      res.send(todos);
    }
  }, (err) => {
    if (err) {
      res.status(500).send("Error finding records");
    }
  }).catch((e) => {
    res.status(500).send("Error finding records");
  });

});


app.patch("/todos/:id", (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ["text", "completed"]);

  if (!ObjectID.isValid(id)) {
    console.log("Id is not valid");
    return res.status(404).send("Id is not valid");
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completedAt = null;
    body.completed = false;
  }

  todoModel.findByIdAndUpdate(id, { $set: body }, { new: true }).then((todos) => {
    if (!todos) {
      return res.status(404).send("Id is not valid");
    }
    return res.send(todos);
  }).catch((e) => {
    return res.status(404).send();
  });
});

app.listen(port, () => {
  console.log(`App started in port ${port}`);
})


//mongoose.connection.close();
