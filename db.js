'use strict';

var React = require('react-native');
var {
    StyleSheet,
    View,
    AsyncStorage,
} = React;

const express = require('express')
const bodyParser= require('body-parser')
const app = express()
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
app.use(bodyParser.urlencoded({extended: true}))

var url = 'mongodb://localhost:27017';
var db;
var collection;

MongoClient.connect(url, function (err, client ,database, docs) {
   if (err) {
      console.error('MongoDB 연결 실패', err);
      return;
   }
    var db = client.db("admin");
    var collection = db.collection("user");

    var query = {"position": 'busan'};

    var cursor = collection.find(query);


    /*collection.insert({name:'chung', position:'busan'}).then(function(results){
	console.log('your insert is sucess jung!');
	},function(err){
	console.log(err);
		})*/
    cursor.forEach(
        function(doc) {
            console.log(doc);
        },
        function(err) {
            client.close();
        }
    );
});


/*
var list = db.Collection('test');
/*
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// [CONFIGURE SERVER PORT]
var port = process.env.PORT || 8080;

// [CONFIGURE ROUTER]
var router = require('routes')(app)

// [RUN SERVER]
var server = app.listen(port, function(){
 console.log("Express server has started on port " + port)
});
*/

  
