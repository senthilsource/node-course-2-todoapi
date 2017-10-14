const {MongoClient, ObjectID} = require("mongodb");

var infoLog = console.info;
var errLog = console.error;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
     if(err){
       return errLog(`Unable to connect to mondo db server @ mongodb://localhost:27017/TodoApp ${err}`);
     }
     infoLog(`Connected to database successfully!!!`);

db.collection("Users").findOneAndUpdate({
  _id: new ObjectID("59e23891da085e7dcac4bb13")
}, {
  $set: {
  name : "Senthil"
},
$inc: {
  age :1
}
}, {
  returnOriginal: false
}).then((reults)=>{
  console.log(reults);
});

db.close();

});
