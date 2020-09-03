const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require('../models/User.js');
const FacebookStrategy = require('passport-facebook');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
 User.findById(id).then((user) =>{
 	done(null,user);
 });
});



const options = {
  clientID: '27380449493-6vk447h4cssm4692m9t941d5h7mih06f.apps.googleusercontent.com',
  clientSecret: '3kL_wLF2lEA8riXPRb3maTeM',
  callbackURL: 'auth/google/redirect'
};

const options1 = {
    clientID: '2781868808712728',
    clientSecret: '6ad1723bc457f3f76ca00e3c09ec3c7b',
    callbackURL: "auth/facebook/redirect"
};

passport.use(new GoogleStrategy(options,
	(accessToken, refreshToken, profile,email,done) => {

		User.findOne({googleId: profile.id}).then((currentUser) => {
			if(currentUser){
				console.log('user is',currentUser);
				done(null,currentUser);
			} else{
				new User({
				//email: 'write path',
			       name: profile.displayName,
			       googleId: profile.id,
		            }).save().then((newUser) => {
		            	console.log('new user created' + newUser);
		            	done(null,newUser);
		         });

			}
		});
   })
);


passport.use(new FacebookStrategy(options1,
  function(accessToken, refreshToken, profile,done) {
    	User.findOne({facebookId: profile.id}).then((currentUser) => {
			if(currentUser){
				console.log('user is',currentUser);
				done(null,currentUser);
			} else{
				new User({
				   email: profile.emails[0].value,
			       name: profile.name.givenName + ' ' + profile.name.familyName,
			       facebookId: profile.id,
		            }).save().then((newUser) => {
		            	console.log('new user created' + newUser);
		            	done(null,newUser);
		         });

			}
		});
  }
));