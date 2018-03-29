var mongoose  = require('mongoose');

mongoose.Promise  = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};

// var newTodo = new Todo({
//   text:"Cook Dinner"
// });
//
// newTodo.save().then((doc)=>{
//   console.log('Saved todo',doc);
// },(e)=>{
//   console.log('Unable to save todo')
// });
//
// var otherTodo = new Todo({
//   text:"Feed me!",
//   completed:true,
//   completedAt:123
// });
//
// otherTodo.save().then((doc)=>{
//   console.log(JSON.stringify(doc,undefined,2))
// },(e)=>{
//   console.log("Oops");
// });
