const express = require('express');
const newbook = express.Router();

// requiring model -mongodb schema of bookmodel
const bookdata = require("../model/bookmodel");

// for handling /admin route
newbook.get('/' ,(req,res)=>{
    res.render('addbook');
    res.end();
});
// for handling /admin/add route
newbook.post('/add',(req,res)=>{
  // saving image 
  var file = req.files.image;
  var filename = file.name;
  file.mv('./public/images/'+ filename,(err)=>{
    res.send(err);
  });

  var item={
        title : req.body.title,
        author: req.body.author,
        genre : req.body.genre,
        img : filename

          }
        // console.log(filename);
        var book = bookdata(item);
        // checks item with the schema /model in bookmodel
        book.save();   
        // saved to db
        res.redirect('/books')
        //location.reload()
 
        
});

module.exports = newbook;