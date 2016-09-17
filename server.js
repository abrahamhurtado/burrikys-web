var express = require('express');
var path = require('path');
var gzip = require('compression');

const app =  express();

app.use(gzip());
app.use('/public', express.static(path.resolve('public')));

app.get('/', function (req, res) {
  res.sendFile(path.resolve('public/index.html'));
});

app.listen(process.env.PORT || 3000, function () {
  console.log(`La aplicación corre en el puerto ${process.env.PORT || 3000}`);
});
