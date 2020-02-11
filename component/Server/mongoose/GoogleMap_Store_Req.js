'use strict';
 
//netstat -ano | findstr :8080
//taskkill /F /PID 12017
const express = require('express')
const bodyParser= require('body-parser')
const app = express()
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
app.use(bodyParser.urlencoded({extended: true}))

var url = 'mongodb://localhost:27017';
var db;
var collection;
var JSONData;

//server part
const path = require('path')
const fs = require('fs')
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json())
const PORT = process.argv[2] || 3000;

//Database treating
MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function (err, client ,database, docs) {
   if (err) {
      console.error('MongoDB 연결 실패', err);
      return;
   }
    var db = client.db("admin");
    var collection_cloth = db.collection("clothes");
    var collection_store = db.collection("store");

    var query ={};
    //var query = {"Cloth_n": 'Clothes'};
    
 //부분 검색
   

//treating clothes information
app.post('/jsonss', function(req, res, next) {
    console.log('jungmin!!!clothes');
    console.log(req);
    var Clothes = req.body.Clothes;
    
    var query = {"Cloth_n": Clothes};
    console.log("## post request"); 

     collection_cloth.find(query).toArray(function (err, docs) {
           console.log('== Find by query');
           console.log(docs);
           //JSONData = JSON.stringify(docs);
           JSONData = docs;
        });
     //waiting for a 3 sec
     setTimeout(function (res,JSONData) {
        console.log(JSONData);

        }, 1000);

      res.json(JSONData);

  
   });

//treating store information
app.post('/googlemap', function(req, res, next) {
    console.log('jungmin!!!googlemap');
    //console.log(req);
    var position = req.body.position;
    
    var query = {"position": position};
    console.log("## post request"); 

     collection_store.find(query).toArray(function (err, docs) {
           console.log('== Find by query googlemap');
           console.log(docs);
           JSONData = docs;
        });

     //waiting for a 3 sec
     setTimeout(function () {
        console.log('func2');
        }, 1000);

     res.json(JSONData);
  
   });

    //var JSONData=[{"Store_n":name,"Store_n": email,'id':0},{"name is ???":'name',"email": 'email','id':1}]
    //res.render('result_page', { title: 'Express', name: name, age: age, method: "post" });
});

  app.get('/jsons', function(req, res){
      res.json(JSONformData);
  })

  app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))






  