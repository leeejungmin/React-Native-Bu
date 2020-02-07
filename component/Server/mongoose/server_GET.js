  const path = require('path')
  const express = require('express')
  const app = express()
  const fs = require('fs')
  const proxy = require('http-proxy-middleware');
 
  //const apiProxy = proxy('/api', { target: 'http://www.example.org' });
  const PORT = process.argv[2] || 3000;
  var JSONformData = [{"jsonrpc":"2.0","name":"MIN","location":"Very Top","method":"LMT_split_into_sentences","params":{"texts":["Text"],"lang":
 					 {"lang_user_selected":"auto","user_preferred_langs":["EN","ES"]}},"id":8},
 					 {"jsonrpc":"2.0","name":"JUNG","location":"Very Top","method":"LMT_split_into_sentences","params":{"texts":["Text"],"lang":
 					 {"lang_user_selected":"auto","user_preferred_langs":["EN","ES"]}},"id":9},
 					 {"jsonrpc":"2.0","name":"LEE","location":"Very Top","method":"LMT_split_into_sentences","params":{"texts":["Text"],"lang":
 					 {"lang_user_selected":"auto","user_preferred_langs":["EN","ES"]}},"id":10},
 						];
  
  app.get('/jsons', function(req, res){
      res.json(JSONformData);
  })

  app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))