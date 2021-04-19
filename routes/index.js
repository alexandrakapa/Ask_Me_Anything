var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const createError = require('http-errors');
const secret ="secret_combination";
const passport = require('passport');
// const res = require("express");
const LocalStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const Extract_jwt = require('passport-jwt').ExtractJwt;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
passport.use('signin',new LocalStrategy(function(username,password,done){
  if(username !="nikosgiorg" || password != "admintest"){
    return done(null,false);
  }
  return done(null,{username:username});
}));

passport.use('token',new JWTstrategy({
    secretOrKey: secret,
    jwtFromRequest:Extract_jwt.fromAuthHeaderAsBearerToken()
},function (token,done){
    return done(null,token.username)
    }
));

router.post('/signin',passport.authenticate('signin',{session:false}), function(req, res, next) {

    console.log(req.user);
    res.json({
      token: jwt.sign(req.user, secret, { expiresIn: 3600 })
    })

});

router.get('/auth',passport.authenticate('token',{session:false}),
    function (req,res){
    // console.log("here");
    res.json({user:req.user});
    });
module.exports = router;
