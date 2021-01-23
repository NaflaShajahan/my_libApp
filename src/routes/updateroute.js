const express = require('express');
const update = express.Router();

// requiring model -mongodb schema of bookmodel
const bookdata = require("../model/bookmodel");


update.get('/' ,(req,res)=>{
    const id = req.query.upid;
    //console.log(id)
    bookdata.findOne({_id : id})
            .then(function(book){
                res.render('updatebook',
                {
                    book
                });
                
            })
           
})
update.post('/:id' ,(req,res)=>{
    // saving image 
  var file = req.files.image;
  var filename = file.name;
  file.mv('./public/images/'+ filename,(err)=>{
    res.send(err);
  });
  console.log(req.params.id)
  var id =req.params.id;
  var item={
        title : req.body.title,
        author: req.body.author,
        genre : req.body.genre,
        img : filename

          }
      bookdata.updateMany({_id : id},item ,(err,res)=>{
        if(err){
          console.log(err);
        }
        else{
         console.log('updated')
 
        }
      
      })
res.redirect("http://localhost:5000/books");          
});
module.exports = update;