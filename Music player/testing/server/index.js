'use strict';

var express = require('express');
var app = express();
var music = [
    { "id": 21, "title": "Halahula", "artist": "Untitled artist", "duration": 545, "path": "c:/music/halahula.mp3" },
    { "id": 412, "title": "No sleep till Brooklyn", "artist": "Beastie Boys", "duration": 312.12, "path": "c:/music/beastie boys/No sleep till Brooklyn.mp3" }
];
var doggy = [];

app.get('/playlist', function (req, res) {
  res.json(music);
});

app.post('/playlist', function (req, res) {
  var newPlayist = {"playlist" : "blabla"}
  res.json(newPlayist);
});

app.delete('/playlist/:id', function (req, res) {
  console.log(req.params.id);
  console.log("dsfdf");
  res.json(music);
});

app.get('/playlist-tracks', function (req, res) {
  res.json(music);
});

app.get('/playlist-tracks/:playlist_id', function (req, res) {
  res.json(music);
});

app.post('/playlist-tracks/:playlist_id', function (req, res) {
  res.json(music);
});

app.delete('/playlist-tracks/:playlist_id/:track_id', function (req, res) {
  res.json(music);
});

module.exports = app;
