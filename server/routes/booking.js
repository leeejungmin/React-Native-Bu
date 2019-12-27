const express = require('express');
const bodyParser= require('body-parser')
const app = express()
var mongoose = require('mongoose');


router.get("/", function(req, res, next){
	res.send("BOOKING ROUTE");
})