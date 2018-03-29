const {MongoClient,ObjectID} = require('mongodb');

var user={name:'Snehal',age:25};
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err) {
  return   console.log('Unable to Connect to Mongodb Server');
  }
console.log('Connected to mongodb server');

// db.collection('Todos').find({
//   _id:new ObjectID('5abb9517a6f434682b5ae1fc')
// }).toArray().then((docs)=>{
//   console.log('Todos');
//   console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//   console.log('unable to fetch todos',err);
// });

db.collection('Users').find({name:"Snehal"}).count().then((count)=>{
  console.log(`Todos count: ${count}`);

},(err)=>{
  console.log('unable to fetch todos',err);
});

  // db.close();
});
