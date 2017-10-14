const {MongoClient, ObjectID} = require("mongodb");
var infoLog = console.info;
var errLog = console.error;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
     if(err){
       return errLog(`Unable to connect to mondo db server @ mongodb://localhost:27017/TodoApp ${err}`);
     }
     infoLog(`Connected to database successfully!!!`);

db.collection("Users").find({_id:new ObjectID("59e210d95a94b50668f3e39c")}).toArray().then((docs)=>{
  infoLog(docs);
}, (err)=>{
  errLog(err);
});

db.collection("Users").find({name:'kumar1'}).toArray().then((docs)=>{
  infoLog(docs);
}, (err)=>{
  errLog(err);
});

db.collection("Users").find().count().then((count)=>{
  infoLog(`No of records found in the collections are : ${count}`);
}, (err)=>{
  errLog(err);
});

db.close();

});
