const {MongoClient,ObjectID} = require('mongodb');

var user={name:'Snehal',age:25};
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err) {
  return   console.log('Unable to Connect to Mongodb Server');
  }
console.log('Connected to mongodb server');

db.collection('Users').findOneAndUpdate({
  _id:new ObjectID('5abb9766bed94d6924b34312')
},{
  $set:{
    name:"Sneh"
  },
  $inc:{
    age:1
  }
},{
  returnOriginal:false
}).then((result)=>{
  console.log(result);
});

  // db.close();
});
