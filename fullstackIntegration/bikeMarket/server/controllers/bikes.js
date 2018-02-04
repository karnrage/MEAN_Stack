var mongoose = require('mongoose');
var Bike = mongoose.model('Bike');

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
    // showPlayers: function (req, res) {
    //     // var players = Player.find({}).sort('-createdAt').exec(function (err, players) { DO NOT NEED TO SET EQUAL TO VARIABLE, BEING CALLED IN (err, players)
    //     Player.find({}).sort('-createdAt').exec(function (err, players) {
    //         if (err) {
    //             console.log(err);
    //             return null;
    //         }
    //         return res.json(players);
    //     });
    // },

    // newPlayer: function (req, res) {
    //     var player = new Player({
    //         name: req.body.name,
    //         position: req.body.position
    //     });
    //     console.log(player);
    //     player.save(function (err, result) {
    //         if (err) {
    //             console.log("There were errors in the submission");
    //             console.log(err);
    //             return err;
    //         }
    //         else {
    //             // db save was successful
    //             console.log("successfully added a document!");
    //             return res.json(result);
    //         }
    //     });
    // },

    // deletePlayer: function (req, res) {
    //     console.log(req.body)
    //     Player.remove({ _id: req.body._id }, function (error) {
    //         if (error) {
    //             console.log('===ERROR DELETING DOCUMENT===')
    //             return res.json(error)
    //         } else {
    //             console.log('===SUCCESSFULLY DELETED DOCUMENT===')
    //             return res.json({ deleted: true })
    //         }
    //     })
      
    // },

    
    // changeState: function (req, res) {
       
    //     Player.find({ _id: req.params.id }, function (err, player) {
    //         console.log(req.params.id);
    //         console.log(player);
    //          console.log("here in controller", req.body);
    //          // above is empty on termincal because body is for post request
    //          console.log("here in controller", req.params);
    //         if (err) {
    //             console.log('===ERR changing state===')
    //             return res.json(err)
    //         } else {
    //             if (req.params.game === 'g1'){
    //                 // CHANGED BELOW TO state, STILL NO CHANGE
    //                 Player.update(player[0], {g1 : req.params.state}, function(err){
    //                     console.log("THIS IS THE NEW STATE");
    //                     console.log(req.params.state);
    //                     console.log(player[0]);
    //                     console.log("this is the PLAYER");
    //                     if (err){
    //                         res.json({'err': 'err saving'})
    //                         console.log('===FAILED SAVE g1 status===')
    //                     } else {
    //                         res.json({'ok': 'everything good'})
    //                         console.log('===SUCCESSFULLY g1 status===')
    //                     }
    //                 })
    //             }
    //             if (req.params.game === 'g2'){
    //                 Player.update(player[0], {g2 : req.params.state}, function(err){
    //                     if (err){
    //                         res.json({'error': 'error saving'})
    //                         console.log('===FAILED SAVE G2 status===')                            
    //                     } else {
    //                         res.json({'ok': 'everything good'})
    //                         console.log('===SUCCESSFULLY G2 status===')
    //                     }
    //                 })
    //             }
    //             if (req.params.game === 'g3'){
    //                 Player.update(player[0], {g3 : req.params.state}, function(err){
    //                     if (err){
    //                         res.json({'error': 'error saving'})
    //                         console.log('===FAILED SAVE G3 status===')                            
    //                     } else {
    //                         res.json({'ok': 'everything good'})
    //                         console.log('===SUCCESSFULLY G3 status===')
    //                     }
    //                 })
    //             }
            
    //         }
    //     })

    // }

}   