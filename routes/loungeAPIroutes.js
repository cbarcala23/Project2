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
      source: req.body.source
    })
      .then(function(dbSong) {
        res.json(dbSong);
      });
});
    // add an upvote to a song
    // add a downvote to a song
    // get most upvoted songs
    // get downvotes for a song