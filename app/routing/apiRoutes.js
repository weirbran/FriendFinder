var friendData = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  // Below code handles when a user submits their survey and thus submits data to the server.

  app.post("/api/friends", function(req, res) {
    var userData = req.body;

    // converts each of user's scores to integers
    for (var i = 0; i < userData.scores.length; i++) {
      userData.scores[i] = parseInt(userData.scores[i]);
    }

    var matchIndex = 0;

    var minimumDifference = 0;

    // loops through each of the friend objects in the friends array
    for (var i = 0; i < friendData.length; i++) {
      var totalDifference = 0;

      // loops through each of the friend's scores
      for (var j = 0; j < friendData[i].scores.length; j++) {
        // calculates each friend score to each user score and sums the total difference
        var difference = Math.abs(userData.scores[j] - friendData[i].scores[j]);
        totalDifference += difference;
      }

      // finds the index of the score with the most difference
      if (totalDifference <= minimumDifference) {
        matchIndex = i;
        minimumDifference = totalDifference;
      }
    }

    //compares each of the scores first, then return the index of the value with the lowest score

    console.log(matchIndex);

    res.send(friendData[matchIndex]);

    friendData.push(userData);
  });
};
