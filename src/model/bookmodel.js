var mongoose = require('mongoose');
mongoose.connect("mongodb+srv://user799:user799@database.qnbne.mongodb.net/library?retryWrites=true&w=majority");

mongoose.set('useFindAndModify', false);
const Schema = mongoose.Schema;
// requiring mongoose
// connecting to server mongod
// creating a schema to map to mongodb collection


const bookschema = new Schema({
    title : String,
    author : String,
    genre : String,
    img : String,

});
// convert to model 
// 1st parameter as collection name->"book"
var bookdata = mongoose.model(" book",bookschema);

module.exports = bookdata;