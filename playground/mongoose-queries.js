var {mongoose} = require("./../server/db/mongoose");
var {todoModel} = require("./../server/models/todo");
var {ObjectID} = require("mongodb");
var {userModel} = require("../server/models/users");

var id = "59e279ef0d78972d3c63a540";
if(!ObjectID.isValid(id)){
  console.log("Id is not valid");
}
// todoModel.find({_id:id}).then((todos)=>{
//   console.log(`todos `, todos);
// });
//
// todoModel.findOne({_id:id}).then((todo)=>{
//   console.log(`Find one ${todo}`);
// });

// todoModel.findById(id).then((todo)=>{
//   console.log(`findById ${todo}`);
// }).catch((e)=>{
//   console.log(e);
// });

userModel.findById(id).then((users)=>{
  if(!users){
    return console.log("User not found!!");
  }
  console.log("users",users);
}).catch((e)=>{
  console.log(e);
});
