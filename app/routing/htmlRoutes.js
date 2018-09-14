// We need to include the path package to get the correct file path for our html
var path = require("path");

module.exports = function(app) {
  // handles when users "visit" a page; in each case, they are shown an HTML page of content

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  //can also be used instead of the above to default to home
  // app.use(function (req, res){
  //   res.sendFile(path.join(__dirname, "..public/home.html"))
  // })
};
