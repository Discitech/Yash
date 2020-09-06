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
router.post('/google/redirect',passport.authenticate('google'),(req,res) => {
	const {user} = req.body;
	const jwt = utils.issueJWT(user);
	res.json({ success: true, user: user, token: jwt.token, expiresIn: jwt.expires});
});

//auth with google
router.post('/google',passport.authenticate('google',{
	scope:['profile']
}));

router.post('/facebook/redirect',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect home.
   const {user} = req.body;
	const jwt = utils.issueJWT(user);
	res.json({ success: true, user: user, token: jwt.token, expiresIn: jwt.expires});
  });
 
router.post('/facebook',passport.authenticate('facebook'));

router.post('/github/redirect',
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect home.
    const {user} = req.body;
	const jwt = utils.issueJWT(user);
	res.json({ success: true, user: user, token: jwt.token, expiresIn: jwt.expires});
  });
 
router.get('/github',passport.authenticate('github'));

module.exports = router;