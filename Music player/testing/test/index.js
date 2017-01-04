'use strict';

var test = require('tape');
var request = require('supertest');
var app = require('../server');


test('Correct songs returned', function (t) {
  request(app)
    .get('/playlist')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      var expectedMusic = [
          { "id": 21, "title": "Halahula", "artist": "Untitled artist", "duration": 545, "path": "c:/music/halahula.mp3" },
          { "id": 412, "title": "No sleep till Brooklyn", "artist": "Beastie Boys", "duration": 312.12, "path": "c:/music/beastie boys/No sleep till Brooklyn.mp3" }
      ];

      t.error(err, 'No error');
      t.same(res.body, expectedMusic, 'Music as expected');
      t.ok(res.body.every(function(item){
        return item.hasOwnProperty("id");
      }), 'ID is ok');
      t.ok(res.body.every(function(item){
        return item.hasOwnProperty("title");
      }), 'Title is ok');
      t.ok(res.body.every(function(item){
        return item.hasOwnProperty("path");
      }), 'Path is ok');
      t.end();
    });
});

test('404 on ghhgfhfg', function (t) {
  request(app)
    .get('/ghhgfhfg')
    .expect(404)
    .end(function (err, res) {
      t.error(err, 'No error');
      t.end();
    });
});

var cucc = "blabla";

test('Test of posting new playlists', function (t) {
  request(app)
    .post('/playlist')
    .send(cucc)
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {

      t.error(err, 'No error');
      t.ok(res.body.hasOwnProperty("playlist"), 'Playlist as expected');
      t.same(typeof(res.body),"object");
      t.end();
    });
});


test('Test of deleting playlist', function (t) {
  request(app)
    .delete('/playlist/cigar')
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function (err, res) {
      t.error(err, 'No error');
      t.end();
    });
});

test('Test of getting the tracks', function (t) {
  request(app)
    .get('/playlist-tracks')
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function (err, res) {
      t.error(err, 'No error');
      t.end();
    });
});

test('Test of getting the right playlist', function (t) {
  request(app)
    .get('/playlist-tracks/Chill')
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function (err, res) {
      t.error(err, 'No error');
      t.end();
    });
});

test('Test of posting the right playlist', function (t) {
  request(app)
    .post('/playlist-tracks/Chill')
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function (err, res) {
      t.error(err, 'No error');
      t.end();
    });
});

test('Test of deleting the right track in the right playlist', function (t) {
  request(app)
    .delete('/playlist-tracks/playlist_id/Chill')
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function (err, res) {
      t.error(err, 'No error');
      t.end();
    });
});
