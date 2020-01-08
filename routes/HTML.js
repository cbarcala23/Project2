var db = require("../models");
module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../main.html"));
      });
    
      app.get("/lounge", function(req, res) {
        res.sendFile(path.join(__dirname, "../lounge.html"));
      });
    
      // blog route loads blog.html
    //   app.get("/blog", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/blog.html"));
    //   });
    
    //   // authors route loads author-manager.html
    //   app.get("/authors", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/author-manager.html"));
    //   });



    
}