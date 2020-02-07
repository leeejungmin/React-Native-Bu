  const path = require('path')
  const express = require('express')
  const app = express()
  const fs = require('fs')

  const PORT = process.argv[2] || 3000;

  app.get('/books', function(req, res){
      fs.readFile(process.argv[3], function(err, data){
          if (err) return res.sendStatus(500)
          try {
              books = JSON.parse(data)
          } catch (e) {
              res.sendStatus(500)
          }
          res.json(books);
      })
  })

  app.listen(PORT)