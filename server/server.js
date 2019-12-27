const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;

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
*/

app.get('/api/hello', (req, res) => {
  //res.send({ message: 'Hello Express!' });
/*
Movie.findOne({title:'인터스텔라'}).exec(function(err, docs) {
     console.log(docs);
  }); */

  res.send([
{
'id': 1,
'image': 'https://placeimg.com/64/64/1',
'name': '홍길동',
'birthday': '961222',
'gender': '남자',
'job': '대학생',
//'con' : cursor
},
{
'id': 2,
'image': 'https://placeimg.com/64/64/2',
'name': '나동빈',
'birthday': '960508',
'gender': '남자',
'job': '프로그래머'
},
{
'id': 3,
'image': 'https://placeimg.com/64/64/3',
'name': '이순신',
'birthday': '961127',
'gender': '남자',
'job': '디자이너'
}
]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));


