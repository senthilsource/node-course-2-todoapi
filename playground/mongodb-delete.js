const {MongoClient, ObjectID} = require("mongodb");

var infoLog = console.info;
var errLog = console.error;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
     if(err){
       return errLog(`Unable to connect to mondo db server @ mongodb://localhost:27017/TodoApp ${err}`);
     }
     infoLog(`Connected to database successfully!!!`);

db.collection("Users").deleteMany({name:"Senthil"});

//db.collection("Users").deleteOne({name:"Senthil"});

/*db.collection("Users").findOneAndDelete({name:"Senthil"}).then((result)=>{
  infoLog(result);
}, (err)=>{
  errLog(err);
});*/

db.close();

});
