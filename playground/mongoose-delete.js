var {mongoose} = require("./../server/db/mongoose");
var {todoModel} = require("./../server/models/todo");
var {ObjectID} = require("mongodb");
var {userModel} = require("../server/models/users");

todoModel.findOneAndRemove("_id:59e2747ce7686b2ab8e01e59").then((res)=>{
  console.log(res);
}, (err)=>{
  console.log(err);
});
