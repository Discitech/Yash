const router = express.Router();
const passport = require('passport');

//auth login
router.get('/login',(req,res,next) => {
	res.render('login');
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
	scope:['profile']
}));

module.exports = router;