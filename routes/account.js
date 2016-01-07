//Dependencies
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var sessions = require('client-sessions');
var bcrypt = require('bcryptjs');//to encrypt passwords

//Database
var db = require('../database/db');
mongoose.connect(db.distant);

//Models
var User = require('../models/User');

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
router.use(bodyParser.json());


//Sessions



//routes
router.get('/', function(req, res){
  res.json({text : "account"});
});

router.post('/', function(req, res){ //Account creation
  console.log(req.body);
  var data = req.body.userID;
  var error = "";
  var created = false; //Default at false so that if there is still an error, the user knows it failed.

  //First we check if the string is smaller than 3 characters (minimum for userName)
  if(data.length<=2){
    // console.log("username too small");
    error = "Username is smaller than 3 characters !";
    res.json({
      created : created,
      error : error
    });
  }else if(req.body.password.length<=7){ //Then we check if password is smaller than 8 characters (same idea)
    // console.log("password too small");
    error = "Password is smaller than 8 characters !";
    res.json({
      created : created,
      error : error
    });
  }else{
    User.find({'userName' : new RegExp(data, 'i')}, function(err, users){
        if(users.length!=0){
          error = "There is already a user with that name, please choose another one";
          res.json({
            created : created,
            error : error
          });
        }else{
          var newUser = new User();
          var hash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
          newUser.userName= req.body.userID;
          newUser.userPassword = hash;
          newUser.gifs = [];
          newUser.save(function(err){
            if(err){
              console.log(err);
              error = err;
              res.json({
                created : created,
                error : error
              });
            }else{
              // console.log("User created successfully : "+newUser);
              created = true;
              res.json({
                created : created,
                error : error
              });
            }
          });
        }
    });
  }
});

router.post('/login', function(req,res){
	User.findOne({name : req.body.userName}, function(err, user){
		if(!user){
			res.json({
        logged : false,
        error : "There is no user with this name in our database"
      })
		}else{
			if(bcrypt.compareSync(req.body.password,user.userPassword)){
        req.session.user = user; //set-cookie : session="{email : '...', etc...}"
				res.json({
          logged : true
        });
			}else{
				res.json({
          logged : false,
          error : "This username exists, but the password is wrong."
        });
			}
		}
	});
});

//Export for require in server.js
module.exports = router;
