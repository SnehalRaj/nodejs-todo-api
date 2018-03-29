// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err) {
  return   console.log('Unable to Connect to Mongodb Server');
  }
console.log('Connected to mongodb server');

db.collection('Todos').insertOne({
text:'Something do',
completed: false
},(err,result)=>{
  if(err){
    return console.log("Unable to insert Todo",err);
  }

  console.log(JSON.stringify(result.ops,undefined,2));
});

// db.collection('Users').insertOne({
// name:'Snehal'
//   , age:18
//   , location:"Kanpur"
// },(err,result)=>{
//   if(err){
//     return console.log("Unable to insert Users",err);
//   }
//   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
//
// });



  db.close();
});//AWS url or heroku url
