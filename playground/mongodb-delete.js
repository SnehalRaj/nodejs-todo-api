const {MongoClient,ObjectID} = require('mongodb');

var user={name:'Snehal',age:25};
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err) {
  return   console.log('Unable to Connect to Mongodb Server');
  }
console.log('Connected to mongodb server');


//delete many
// db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
//   console.log(result);
// });
//delete One
// db.collection('Todos').deleteOne({text:'walk the dog'}).then((result)=>{
//   console.log(result);
// });
//find_one_and_delete
db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
  console.log(result);
});

  // db.close();
});
