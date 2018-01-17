var mongoose = require('mongoose');
var Player = mongoose.model('Player');

mongoose.Promise = global.Promise;

function createError(_path, _message) {
    var errors = [];
    var err = {
        path: _path,
        message: _message
    }
    errors.push(err);
    return errors;
}

module.exports = {
    showPlayers: function (req, res) {
        // var players = Player.find({}).sort('-createdAt').exec(function (err, players) { DO NOT NEED TO SET EQUAL TO VARIABLE, BEING CALLED IN (err, players)
        Player.find({}).sort('-createdAt').exec(function (err, players) {
            if (err) {
                console.log(err);
                return null;
            }
            return res.json(players);
        });
    },

    newPlayer: function (req, res) {
        var player = new Player({
            name: req.body.name
        });
        console.log(player);
        player.save(function (err, result) {
            if (err) {
                console.log("There were errors in the submission");
                console.log(err);
                return err;
            }
            else {
                // db save was successful
                console.log("successfully added a document!");
                return res.json(result);
            }
        });
    }
}