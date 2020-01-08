// Routes
// homepage:
// get all lounges for display
var db = require("../models");
module.exports = function (app) {
    var newSongTitle = [];
    // get all lounges for display

    app.get("/api/lounges", function (req, res) {

        db.Lounge.findAll({}).then(function (dbLounge) {
            res.json(dbLounge);
        });
    });
    // get a lounge by name
    app.get("/api/lounges/:name", function (req, res) {
        db.Lounge.findAll({
            where: {
                category: req.params.name
            }
        })
            .then(function (dbLounge) {
                res.json(dbLounge);
            });
    });


    // add a new lounge
    app.post("api/lounges", function (req, res) {
        db.Lounge.create({
            name: req.body.name,
            created: req.user.id
        }).then(function (dbLounge) {
            res.json(dbLounge)
        });
    });

    // create a playlist
    app.post("api/playlists", function (req, res) {
        db.Playlist.create({
            lounge_id: req.lounge.id
        }).then(function (dbPlaylist) {
            res.json(dbPlaylist)
        })
    });

    // // add a song to a playlist
    // app.post("api/songs", function (req, res) {
    //     let newSong = {
    //     newSongTitle: req.body,
    //     newVotes: 0
    //     }
    //     // newSong (newSongTitle, newVotes);
    //     newSongTitle.push(newSong);


    //     writeFileAsync("../models/song.json", JSON.stringify(newSong)).then(function () {
    //         console.log("Songupdated");
    //     });


        // add a new user
        app.post("api/users", function (req, res) {
            db.User.create({
                username: req.body.username,
                password: req.body.password
            }).then(function (dbUser) {
                res.json(dbUser)
            });
        });
        // get all users in a lounge
        app.get("/api/lounge/:id", function (req, res) {

            db.User.findAll({
                include: [{
                    model: Session,
                    where: {
                        lounge_id: req.params.id
                    }
                }],
            }).then(function (dbSession) {
                res.json(dbSession);
            });
        });
        // get all users
        app.get("/api/users", function (req, res) {

            db.User.findAll({}).then(function (dbUser) {
                res.json(dbUser);
            });
        });
        // get one lounge by id (from click)
        app.get("/api/lounges/:id", function (req, res) {
            db.Lounge.findOne({
                where: {
                    id: req.params.id
                },
                include: [db.User]
            }).then(function (dbLounge) {
                res.json(dbLounge);
            });
        });


        // add a song to the playlist
        app.post("api/playlist", function (req, res) {
            db.Playlist.add({
                Song:
                {
                    title: req.body.title,
                    source: req.body.source,
                    votes: 0,
                    user_id: req.params.id
                }
            }).then(function (dbPlaylist) {
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
                .then(function (dbSong) {
                    res.json(dbSong);
                });
        });

        // add an upvote to a song
        // this.Song.findOne(
        //     { status: 1 },
        //     {
        //         where: { id: req.params.id },
        //     }).then(function (vote) {
        //         return vote.update({ status: 1 });
        //     }).then(function (vote) {
        //         res.sendStatus(200);
        //     });
        // add an upvote take 2
        // app.put({ Song.decrement(['votes', '1'], { where: { id: song_id } });});

        // // add a downvote to a song

        // Song.decrement(['votes', '1'], { where: { id: song_id } });

        // app.put("api/song", function (req, res) {

        // });


    };
