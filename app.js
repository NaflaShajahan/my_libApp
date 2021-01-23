// require express and create an instance
const express = require('express');
const app = new express();
const upload = require('express-fileupload');




// nav bar
const nav = [
    {
        link:'/books',name:'books'
    },
    {
        link:'/authors',name:'authors'
    },
    {
        link:'/admin',name:'add_book'
    }
];
// requiring book handler from bookhandler.js
const bookhandler = require('./src/routes/bookrouter')(nav)
const author = require('./src/routes/author')(nav)
const signin = require('./src/routes/signin')
const login= require('./src/routes/login')
const newbook= require('./src/routes/adminrouter')
const update= require('./src/routes/updateroute')
// const login = require('./src/routes/')(nav)

// setting static files
app.use(express.static('./public'));

// SETTING MIDDLEWARE FOR POST REQ for url
app.use(express.urlencoded({extended:true}));

// middleware for uploads
app.use(upload());

// setting template engine ejs
app.set('view engine','ejs');
app.set('views','./src/views');


// setting route handler
app.use('/books',bookhandler)
app.use('/authors',author)
app.use('/signin',signin)
app.use('/login',login)
app.use('/admin',newbook)
app.use('/update',update)




// routing
app.get('/',(req,res)=>{
    res.render('index',
    {    nav,
        title:'library app'

    }
    );
    res.end();
})
app.get('/home',(req,res)=>{
    res.render('home',
    {    nav,
        title:'library app'

    }
    );
    res.end();
})

app.listen(5000 ,()=>{
    console.log("[info]:listening at port 5000");
});