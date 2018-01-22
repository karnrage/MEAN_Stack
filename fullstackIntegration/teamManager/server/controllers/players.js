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
            name: req.body.name,
            position: req.body.position
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
    },

    deletePlayer: function (req, res) {
        console.log(req.body)
        Player.remove({ _id: req.body._id }, function (error) {
            if (error) {
                console.log('===ERROR DELETING DOCUMENT===')
                return res.json(error)
            } else {
                console.log('===SUCCESSFULLY DELETED DOCUMENT===')
                return res.json({ deleted: true })
            }
        })
        // console.log(req.body)
        // Player.remove({_id: req.body.id}, function(error){
        //     console.log("made it to the remove controller")
        //     return res.json({deleted: true})
        //     // OR return res.json({'deleted': true})
        // })    
    }

    // deletePlayer: function (req, res) {
    //     const sess = req.session;
    //     if (sess.id) {
    //         Player.remove({ _id: req.body.id }, function (error) {
    //             if (error) {
    //                 console.log('===ERROR DELETING DOCUMENT===')
    //                 return res.json(error)
    //             } else {
    //                 console.log('===SUCCESSFULLY DELETED DOCUMENT===')
    //                 return res.json({ deleted: true })
    //             }
    //         })
    //     } else {
    //         console.log('===USER IS NOT SIGNED IN===')
    //         return res.json({ Error: 'User is not signed in' })
    //     }
    // }

  

}