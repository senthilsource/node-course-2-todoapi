const MongoClient = require("mongodb").MongoClient;
var infoLog = console.info;
var errLog = console.error;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
     if(err){
       return errLog(`Unable to connect to mondo db server @ mongodb://localhost:27017/TodoApp ${err}`);
     }
     infoLog(`Connected to database successfully!!!`);

  /*   db.collection('Todos').insertOne({
       text : 'Something',
       completed : false
     }, (err, result)=>{
       if(err){
         return errLog("Error inserting records");
       }
       infoLog("Inserted successfully", JSON.stringify(result.ops, undefined, 2));
     });*/

     db.collection('Users').insertOne({
       name : 'Senthil Kumar',
       age : 30,
       location : 'Glasgow'
     }, (err, result)=>{
       if(err){
         return errLog("Error inserting records");
       }
       infoLog("Inserted successfully", JSON.stringify(result.ops, undefined, 2));
     });



     db.close();
});
