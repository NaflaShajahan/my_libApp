const express = require('express');
const bookhandler = express.Router();
const bookdata = require("../model/bookmodel")



// var books = [
//     {
//         title: 'Tom and Jerry',
//         author: 'Joseph Barbera',
//         genre: 'Cartoon',
//         img: 'tom.jpg'
//     },
//     {
//         title: 'Lord of Rings',
//         author: 'J.R.R Tolkien',
//         genre: 'Fantacy',
//         img: 'lord.jpg'
//     },
//     {
//         title: 'War and Peace',
//         author: 'Leo Tolstoy',
//         genre: 'War',
//         img: 'image.jpg'
//     }
// ];
function router(nav) {
    // handling books link
    bookhandler
        .route('/')
        .get((req, res) => {
            bookdata.find()
                .then(function (books) {
                    // console.log(books)
                    res.render('books',
                        {
                            nav,
                            books
                        }
                    );
                    

                })
        


        })
    // handling url when id comes after /books ie,/books/id
    bookhandler
        .route('/:id')
        .get((req, res) => {
            const id = req.params.id;
            bookdata.findOne({_id : id})
            .then(function(book){
                res.render('book',
                {
                    nav,
                    book
                });
            res.end();

            })

        })
    bookhandler
        .route('/delete')
        .post((req, res) => {
            const id = req.query.bookid;
            bookdata.findOneAndRemove({_id : id},(err) => {
                     if(err){
                        res.send({
                            msg:err
                        })
                     }
                     else {
                        //  res.send({
                        //      msg:'success deleted'
                        //  })
                     }
                    
                    
                 });
        });

    return bookhandler;

}


module.exports = router;