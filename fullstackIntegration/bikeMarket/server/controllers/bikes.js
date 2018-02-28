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

    newBike: function(request, response){
        let possibleSession = request.session;
        if (possibleSession.id){
            var brandNewbike = new Bike(request.body)
            //currentUser pulled from login fxn. Need same name
            brandNewbike._user = possibleSession.currentUser
            brandNewbike.save(function(error){
                if(error){
                    console.log("--------error saving---------")
                    return response.json(error)
                }
                else {
                    console.log("====SAVED BIKE====")
                    request.session.bike = brandNewbike
                    return response.json(brandNewbike)               
                }
            }
        )}
        else{
            console.log("------TO CREATE A RELATIONSHIP, NEED A SIGNED IN USER======")
            return response.json({ error : "no one is logged in"})
        }
        
    },
    showBike:function(request, response){
        let possibleSession = request.session;
        console.log('-----------INSIDE MONGOOSE: SHOWBIKE FXN---------')
        if (possibleSession.id){
            Bike.find({}).populate('_user').exec(function (error, DBreply)
                {
                if (error){
                    console.log("=====problem getting all bikes======")
                    return response.json(error)
                }
                else{
                    console.log("====got all the bikess======")
                    console.log('Database says:', DBreply)
                    return response.json(DBreply)
                    
                }
            }            
        )}
        else{
            console.log("------ NEED A SIGNED IN USER======")
            return response.json({ error : "no one is logged in"})
        }
        
    },
    editBike:function(request, response){
        console.log('-----------INSIDE MONGOOSE: editBike FXN---------')
        // console.log(request)
        // console.log(request.body)
        console.log(request.body._id)
        console.log("NEW CONSOLE LOG=============", request.body.title)
        
        // Bike.find({_id:request.body.id}, function (err, bike) {
            // below maybe _id:myBike._id? 
        Bike.find({_id: request.body._id}, function (err, bike) {
            
            if (err){
                console.log("===========new code block to handle parent err fxn=====");
                return response.json(err)
            }
            else {
                Bike.update(bike[0], 
                    {title : request.body.title,
                    desc : request.body.desc,
                    location: request.body.location,
                    price : request.body.price,
                    }, function (error) {
                        if (error){
                            console.error("error in editbike save");
                            return response.json(error)
                        }
                        else{
                            return response.json("save success -kk")
                        }

                    })
                 // above has more control over changes. If findOneAndUpdate then less changes can be made, and saving is auto
                // {new: true} is supposed to return the updated document
                console.log(bike);
               
                // console.log("where?:here in bike controller:editBike", request.body);
                
                // bike.title = request.body.title;
                // bike.desc = request.body.desc;
                // bike.location = request.body.location;
                // bike.price = request.body.price;
                // // below: not a fxn: Bike.save
                // bike.save(function (error, bike){
                // })
            }
        } )
        
    },
    eraseBike:function(request, response){
        console.log('-----------INSIDE MONGOOSE: eraseBike FXN---------')
        console.log(request.body)
        Bike.remove({ _id: request.body._id }, function (error) {
            if (error) {
                console.log('===ERROR DELETING DOCUMENT===')
                return response.json(error)
            } else {
                console.log('===SUCCESSFULLY DELETED DOCUMENT===')
                return response.json({ deleted: true })
            }
        })
    },        


    // Syntax issue below
    // bike.title = request.body.title,
    // bike.desc = request.body.desc,
    // bike.location = request.body.location,
    // bike.price = request.body.price
    // Right below
    // bike.title = request.body.title;
    // bike.desc = request.body.desc;
    // bike.location = request.body.location;
    // bike.price = request.body.price;




}   