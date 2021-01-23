const express = require('express');
const login = express.Router();


login.get('/' ,(req,res)=>{
    res.render('login');
    res.end();
});


module.exports = login;