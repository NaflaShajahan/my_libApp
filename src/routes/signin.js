const express = require('express');
const signin = express.Router();


signin.get('/' ,(req,res)=>{
    res.render('signin');
    res.end();
});


module.exports = signin;