import express from 'express';
import passport from 'passport';
	import { Strategy as LocalStrategy } from 'passport-local';
import myFunc from './../config/pass.js';
import mongoose from 'mongoose';
import BodyParser from 'body-parser';
import session from 'express-session'; 
const router = express.Router();
const app = express();


mongoose.connect('mongodb://localhost/testpassport');


var Schema = mongoose.Schema;
var UserSchema = new Schema({
	username:{type : String},
	password : {type : String}
})
var User = mongoose.model('User', UserSchema);
//console.log(passport);
myFunc(passport,User,LocalStrategy);

//console.log("asdf",myFunc)

/* GET index page. */
// router.get('/', (req, res, next) => {
//   res.render('index', {
//     title: 'Express'
//   });
// });


router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Express'
  });
});

router.post('/hello',passport.authenticate('local'),(req,res) => {
	res.jsonp(req.authInfo);
})

app.post('/update',function(req,res) {
	console.log("hello ji");
	// var usr11 = new User({"username":"laxmantest000071","password":"321321321321"});
	// usr11.save(function(response){
	// 	res.jsonp(response);
	// })
	// User.findOneAndUpdate({"username": "laxmantest000071"},{$set:{"password": "00000000"}}).exec(function(resp){
	// 	res.send(resp);
	// })
	res.send("hello");
})

export default router;
