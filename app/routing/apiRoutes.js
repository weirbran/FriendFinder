var friendData = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    var userData = req.body;

    for (var i = 0; i < userData.scores.length; i++) {
      userData.scores[i] = parseInt(userData.scores[i]);
    }

    console.log(userData);
    console.log(friendData);

    var matchIndex = 0;

    var minimumDifference = 50;

    for (var i = 0; i < friendData.length; i++) {
      var totalDifference = 0;

      for (var j = 0; j < friendData[i].scores.length; j++) {
        var difference = Math.abs(userData.scores[j] - friendData[i].scores[j]);
        totalDifference += difference;
      }

      if (totalDifference <= minimumDifference) {
        matchIndex = i;
        minimumDifference = totalDifference;
      }
    }

    //compare each of the scores first, then return the index of the value with the lowest score

    console.log(matchIndex);

    res.send(friendData[matchIndex]);

    friendData.push(userData);
  });
};
