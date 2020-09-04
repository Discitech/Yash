const express = require('express');
const router = express.Router();
const passport = require('passport');

//auth login
router.get('/login',(req,res,next) => {
	res.send('this time fail')
});

//auth logout
router.get('/logout',(req,res,next) => {
	res.send('logging out');
	//req.logout(;);
	//res.redirect('/');
});

//create redirect
router.get('/google/redirect',passport.authenticate('google'),(req,res,next) => {
	res.send('redirect the thing to the page');
});

//auth with google
router.get('/google',passport.authenticate('google',{
	scope:['profile','email']
}));

router.get('/facebook/redirect',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.send('here we have to redirect')
  });
 
router.get('/facebook',passport.authenticate('facebook'));

router.get('/github/redirect',
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.send('here we have to redirect')
  });
 
router.get('/github',passport.authenticate('github'));

module.exports = router;