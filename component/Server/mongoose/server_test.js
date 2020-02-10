  const path = require('path')
  const express = require('express')
  const app = express()
  const fs = require('fs')
  var bodyParser = require('body-parser')
  //const proxy = require('http-proxy-middleware');
 
 app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
 app.use(bodyParser.json())
  //const apiProxy = proxy('/api', { target: 'http://www.example.org' });
  const PORT = process.argv[2] || 3000;
  var JSONformData = [{"jsonrpc":"2.0","name":"MIN","location":"Very Top","method":"LMT_split_into_sentences","params":{"texts":["Text"],"lang":
 					 {"lang_user_selected":"auto","user_preferred_langs":["EN","ES"]}},"id":8},
 					 {"jsonrpc":"2.0","name":"JUNG","location":"Very Top","method":"LMT_split_into_sentences","params":{"texts":["Text"],"lang":
 					 {"lang_user_selected":"auto","user_preferred_langs":["EN","ES"]}},"id":9},
 					 {"jsonrpc":"2.0","name":"LEE","location":"Very Top","method":"LMT_split_into_sentences","params":{"texts":["Text"],"lang":
 					 {"lang_user_selected":"auto","user_preferred_langs":["EN","ES"]}},"id":10},
 						];
  
  app.post('/jsonss', function(req, res, next) {
    console.log('jungmin!!!');
  	console.log(req);
    var name = req.body.name;
    var email = req.body.email;
    console.log("## post request"); 
    var JSONData=[{"name is ???":name,"email": email,'id':0},{"name is ???":'name',"email": 'email','id':1}]
    res.json(JSONData);
    //res.send(req);
    //res.render('result_page', { title: 'Express', name: name, age: age, method: "post" });
});

  app.get('/jsons', function(req, res){
      res.json(JSONformData);
  })

  app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))