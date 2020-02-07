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
    var collection = db.collection("clothes");
    /*
    var query = {"position": 'busan'};
    
    var cursor = collection.find(query);
    console.log(cursor)*/

    // 전체 목록 
    collection.find().toArray(function (err, docs) {
       console.log('== Find ALL, toArray');
       console.log(docs);
    });

  
    //넣기


     collection.insert({ Store_n:'LeeStore',Cloth_n:'Jacket', size:95, price:20000 , desc: 'this look nice for your fit', url:'https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2017/11/22/st_20171123_msask23_8_3577434.jpg?itok=K40gJ7GB&timestamp=1511364540'}).then(function(results) {
     // console.log('== Resolved\n', results);
     console.log('Promise Based Insert Result : ', results);
  }, function(err) {
     console.log('== Rejected\n', err);      
  });

    collection.insert({ Store_n:'LeeStore',Cloth_n:'Hood', size:95, price:25000 , desc: 'that look nice for your fit', url:'https://shop.r10s.jp/bemagical/cabinet/item16/7505055890162.jpg'}).then(function(results) {
         // console.log('== Resolved\n', results);
         console.log('Promise Based Insert Result : ', results);
      }, function(err) {
         console.log('== Rejected\n', err);      
      });
    collection.insert({ Store_n:'LeeStore',Cloth_n:'Pants', size:30, price:22000 , desc: 'this make you nice for your future', url:'https://cdn.shopify.com/s/files/1/0012/9784/2233/products/the-genuine-jean-the-feel-studio-inc-3_1600x.jpg?v=1558024837'}).then(function(results) {
         // console.log('== Resolved\n', results);
         console.log('Promise Based Insert Result : ', results);
      }, function(err) {
         console.log('== Rejected\n', err);      
      });
     collection.insert({ Store_n:'JungStore',Cloth_n:'Clothes', size:30, price:22000 , desc: 'this make you nice for your future', url:'https://www.cccreationsusa.com/wp-content/uploads/2017/12/clothes-hanging-862x493.jpg'}).then(function(results) {
         // console.log('== Resolved\n', results);
         console.log('Promise Based Insert Result : ', results);
      }, function(err) {
         console.log('== Rejected\n', err);      
      });
      collection.insert({ Store_n:'MinStore',Cloth_n:'Clothes', size:30, price:22000 , desc: 'this make you nice for your future', url:'https://chemicalsinourlife.echa.europa.eu/documents/23718410/23807413/c_shirts-lg.jpg/79808f7c-afad-4311-50ce-8cefd8ba083c?t=1560169203942'}).then(function(results) {
         // console.log('== Resolved\n', results);
         console.log('Promise Based Insert Result : ', results);
      }, function(err) {
         console.log('== Rejected\n', err);      
      });
       collection.insert({ Store_n:'MinStore',Cloth_n:'Jacket', size:30, price:22000 , desc: 'this make you nice for your future', url:'https://www.incimages.com/uploaded_files/image/970x450/getty_505442827_408656.jpg'}).then(function(results) {
         // console.log('== Resolved\n', results);
         console.log('Promise Based Insert Result : ', results);
      }, function(err) {
         console.log('== Rejected\n', err);      
      });
   });


/*
  //store table

     collection.insert({ name:'LeeStore',position:'Busan', latitude:37.79825, longitude: -122.4724}).then(function(results) {
     // console.log('== Resolved\n', results);
     console.log('Promise Based Insert Result : ', results);
  }, function(err) {
     console.log('== Rejected\n', err);      
  });

   });

*/


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

  