// const http = require('http');
// http.createServer(function(req,res){
//     res.writeHead(200, { 'Content-Type':'text/html' });
//     res.end('hello world!')
// }).listen(3000);
 
const express = require('express');
var exphbs = require('express-handlebars');
 
// port
const PORT = 3000;

// initialize app method
const app = express();
 
 
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main'}) );
app.set('view engine', 'handlebars');
app.set('views', './views');
 
// set up app.use()
 
app.use((req, res, next) => {
    console.log(`URL: ${req.url}`);
    req.myName = "Yashvi";
    next();
})
 
// make the index route
app.get('/' ,(req,res) => {
    const titleText = "Home INFT2202 Node101 with handlebars"
    res.render('home', {
        title: titleText
    });
});
 
// add the about route
app.get('/about' ,(req,res) => {
    res.render('about', {
        aboutTitle: 'This is my about page!!!'
    });
});
 
 
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
 
 
 
