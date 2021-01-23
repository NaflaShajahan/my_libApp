const express = require('express');
const author = express.Router();



var names= [
    {
        book1: 'Tom and Jerry',
        book2: 'Scooby-Doo',
        author: 'Joseph Barbera',
        genre: 'Cartoon',
        img: 'barbera.jpg'
    },
    {
        book1: 'Lord of Rings',
        book2: 'The Hobbit',
        author: 'J.R.R Tolkien',
        genre: 'Fantacy',
        img: 'jrr.jpg'
    },
    {
        book1: 'War and Peace',
        book2: 'Anna Karenina',
        author: 'Leo Tolstoy',
        genre: 'War',
        img: 'leo.jpg'
    }
];
function router1(nav) {
    // handling books link
    author
        .route('/')
        .get((req, res) => {
            res.render('authors',
                {
                    nav,
                    names
                }
            );
            res.end();
        })
    // handling url when id comes after /books ie,/books/id
    author
        .route('/:id')
        .get((req, res) => {
            const id = req.params.id;
            res.render('author',
                {
                    nav,
                    name: names[id]
                });
            res.end();
        })

    return author;

}


module.exports = router1;