const express = require('express');
const app = express();
var router = express.Router();
var mongoose = require('mongoose');


router.get("/", function(req, res, next){
	res.render("good.html");
})

module.exports = router;