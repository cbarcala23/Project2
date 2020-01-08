var db = require("../models");
module.exports = function(app) {



// lounge:
// add a playlist
app.post("api/playlist", function (req, res) {
    db.Playlist.create(req.body).then(function (dbPlaylist) {
        res.json(dbPlaylist)
    });
});
// add a song to the playlist
app.post("api/playlist", function (req, res) {
    db.Playlist.add(req.body).then(function (dbPlaylist) {
        res.json(dbPlaylist)
    });
});
// user adds a song
app.post("api/song", function (req, res) {
    console.log(req.body);
    db.Song.create({
      title: req.body.title,
      source: req.body.source,
      upvotes: 0,
      downvotes: 0,
      user_id: req.params.user_id
    })
      .then(function(dbSong) {
        res.json(dbSong);
      });
});

    // add an upvote to a song
    this.Song.findOne(
        {status: 1},
        { 
          where: {id : req.params.id},
      }).then(function (vote) {
        return vote.update({status: 1});
      }).then(function (vote) {
          res.sendStatus(200);
      });
// add an upvote take 2
      this.song.update({ field: sequelize.literal('upvote + 1') }, { where: { id: song_id } });

    // add a downvote to a song
    this.Song.findOne(
        {status: 0},
        { 
          where: {id : req.params.id},
      }).then(function (vote) {
        return vote.update({status: +1});
      }).then(function (vote) {
          res.sendStatus(200);
      });

      Song.decrement(['upvote', '1'], { where: { id: song_id } });

    }
    // get most upvoted songs
    // get downvotes for a song