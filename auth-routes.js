const utils = require('../lib/utils');
const express = require('express');
const router = express.Router();
const passport = require('passport');


router.get('/login',(req,res,next) => {
	res.send('this time fail')
});


router.get('/logout',(req,res,next) => {
	res.send('logging out');
	
});


router.post('/google/redirect',passport.authenticate('google'),(req,res) => {
	  const {user} = req.user;
   if(user){
   	const jwt = utils.issueJWT(user);
	res.json({ success: true, user: user, token: jwt.token, expiresIn: jwt.expires});
   } else{
   	res.status(401).json({ success: false, msg: "you enetred the wrong password"});
   }
	
});


router.get('/google',passport.authenticate('google',{ scope:['profile']}));
router.get('/facebook',passport.authenticate('facebook'));
router.get('/github',passport.authenticate('github'));

router.post('/facebook/redirect',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect home.
   const {user} = req.user;
   if(user){
     	const jwt = utils.issueJWT(user);
	    res.json({ success: true, user: user, token: jwt.token, expiresIn: jwt.expires});
   } else
   {
   	res.status(401).json({ success: false, msg: "you enetred the wrong password"});
   }
	
});
 


router.post('/github/redirect',
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
   
      const {user} = req.user;
   if(user){
   	const jwt = utils.issueJWT(user);
	res.json({ success: true, user: user, token: jwt.token, expiresIn: jwt.expires});
   } else{
   	res.status(401).json({ success: false, msg: "you enetred the wrong password"});
   }
  });
 


module.exports = router;