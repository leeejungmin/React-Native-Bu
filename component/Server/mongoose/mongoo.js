'use strict';
 

const express = require('express')
const bodyParser= require('body-parser')
const app = express()
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
app.use(bodyParser.urlencoded({extended: true}))

var url = 'mongodb://localhost:27017';
var db;
var collection;



MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function (err, client ,database, docs) {
   if (err) {
      console.error('MongoDB 연결 실패', err);
      return;
   }
    var db = client.db("admin");
    var collection = db.collection("user");
    var query = {"position": 'busan'};
    /*
    
    var cursor = collection.find(query);
    console.log(cursor)*/

    // 전체 목록 
    collection.find().toArray(function (err, docs) {
       console.log('== Find ALL, toArray');
       console.log(docs);
    });

    //부분 검색
    collection.find(query).toArray(function (err, docs) {
           console.log('== Find by query');
           console.log(docs);
        });

    //수정하기 
    collection.updateOne({ name: 'chung' }, { $set: { name: 'JungJung' } }, function (err, result) {
      if (err) {
         console.error('UpdateOne Error ', err);
         return;
      }
      console.log('UpdateOne 성공 ', result);
   });

    //넣기

     collection.insert({ name:'ChungChung', age:28}).then(function(results) {
     // console.log('== Resolved\n', results);
     console.log('Promise Based Insert Result : ', results);
  }, function(err) {
     console.log('== Rejected\n', err);      
  });

   });




    /*collection.insert({name:'chung', position:'busan'}).then(function(results){
	console.log('your insert is sucess jung!');
	},function(err){
	console.log(err);
		})*/
   /* cursor.forEach(
        function(doc) {
            console.log(doc);
        }, 
        function(err) {
            client.close();
        }
    );*/


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

  