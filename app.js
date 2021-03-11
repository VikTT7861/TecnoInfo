//jshint esversion: 6

/************** npm packages ************************/

const express = require('express');
const app = express();
/************** npm packages ************************/


/************** static folder access ****************/

app.use(express.static("static"));

/************** static folder access ****************/


/************** redirection templates Spanish ***************/

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/templates/espanol.html');
});

app.get('/espanol', function(req, res) {
  res.sendFile(__dirname + '/templates/espanol.html');
});

app.get('/wifiApEsp', function(req, res) {
  res.sendFile(__dirname + '/templates/wifiApEsp.html');
});

app.get('/softwareEsp', function(req, res) {
  res.sendFile(__dirname + '/templates/softwaresp.html');
});

app.get('/antenas', function(req, res) {
  res.sendFile(__dirname + '/templates/antenas.html');
});

app.get('/ovnisEsp', function(req, res) {
  res.sendFile(__dirname + '/templates/ovnisEsp.html');
});

app.get('/servidores', function(req, res) {
  res.sendFile(__dirname + '/templates/serveridores.html');
});

app.get('/acercaDe', function(req, res) {
  res.sendFile(__dirname + '/templates/acercaDe.html');
});

/************** redirection templates Spanish ***************/


/************** redirection templates English ***************/

app.get('/english', function(req, res) {
  res.sendFile(__dirname + '/templates/english.html');
});

app.get('/ramEng', function(req, res) {
  res.sendFile(__dirname + '/templates/ramEng.html');
});

app.get('/wifiApIng', function(req, res) {
  res.sendFile(__dirname + '/templates/wifiApIng.html');
});

app.get('/softwareIng', function(req, res) {
  res.sendFile(__dirname + '/templates/softwareIng.html');
});

app.get('/antennas', function(req, res) {
  res.sendFile(__dirname + '/templates/antennas.html');
});

app.get('/ovnisIng', function(req, res) {
  res.sendFile(__dirname + '/templates/ovnisIng.html');
});

app.get('/servers', function(req, res) {
  res.sendFile(__dirname + '/templates/servers.html');
});

app.get('/aboutUs', function(req, res) {
  res.sendFile(__dirname + '/templates/aboutUs.html');
});

/************** redirection templates English ***************/


/************** listen port for running server ***************/

app.listen(3000, function() {
  console.log("Server running at port 3000");
});