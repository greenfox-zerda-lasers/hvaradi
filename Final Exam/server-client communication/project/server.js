'use strict';

//require-oljuk a szükséges eszközöket, plusz a függvényt tartalmazó fájlt
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var sum = require('./sum');
var app = express();

app.use(bodyParser.json());
app.use(express.static('client'));

//behívja a függvényt, elvégzi a műveletet, kiírja bashben az eredményt
app.post('/sum', function (req, res) {
  var first = parseInt(req.body.first);
  var second = parseInt(req.body.second);
  var result = sum(first, second);
  console.log(result);


  connection.query('INSERT INTO addition (No1, No2, Result) VALUES(?,?,?)', [first, second, result],
  function(err) {
    if (err) throw err;
  });

//ha 200as választ kap, akkor elküldi a resultot a clinet oldalnak
  res.status(200).send(JSON.stringify(result));
})

//connect to database
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '21birds',
  database : 'weekend-sum'
});

// connection.connect();

app.use(bodyParser.json());
app.use(express.static('client'));

//checking if the connection is all right
connection.connect(function(err){
   if(err){
     console.log("Error connecting to Db");
     return;
   }
   console.log("Connection established");
 });

//get request indítása

app.get('/getall', function(req, res) {
   connection.query('SELECT * FROM addition', function(err, data) {
     if (err) {
       res.status(500).json({error: err.message})
     }
     res.status(200).send(JSON.stringify(data))
   })
})

 // app.get('/getall', function b(req, res){
 //   con.query('SELECT * from addition', function c(err, rows){ ///req.body htp keres belso tartalma, most json volt
 //     if(err){                                                                        ///req.params a kettospont utani parameter
 //       console.log('a pink unikornis leszállt');
 //       return;
 //     }
 //     res.send(rows);
 //   });
 // });


app.listen(3000);
