// Routes
// homepage:
// get all lounges for display
var db = require("../models");
module.exports = function(app) {
    // get all lounges for display

    app.get("/api/lounges", function (req, res) {

    db.Lounge.findAll({}).then(function (dbLounge) {
        res.json(dbLounge);
    });
});
// get a lounge by name
app.get("/api/lounges/:name", function(req, res) {
    db.Lounge.findAll({
      where: {
        category: req.params.name
      }
    })
      .then(function(dbLounge) {
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
        // find all users? not sure how to specify
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

};
