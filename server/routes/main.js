const express = require('express');
const app = express();
var router = express.Router();
var mongoose = require('mongoose');

/*
router.get("/", function(req, res, next, e){
	//res.sendFile(__dirname + '/views/' + 'index.ejs','views');
	//res.send('goood');
	res.render('index', {title:'Express'});
	//console.log(__dirname + '/views/' + 'index.ejs','views');
})

router.get("/good", function(req, res, next){
	res.render("good.ejs");
	console.log(e);
})

module.exports = router;
*/

module.exports = function(app, fs)
{
     app.get('/',function(req,res){
         res.render('good', {
             title: "MY HOMEPAGE"
             //length: 5
         })
     });
}
/*
app.listen(3003, ()=> {
  console.log('The application is running on port 3000')
});*/