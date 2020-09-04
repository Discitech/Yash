const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require('../models/User.js');
const FacebookStrategy = require('passport-facebook');
const GitHubStrategy = require('passport-github2');

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
    callbackURL: 'http://localhost:5000/auth/facebook/redirect'
};

const options2 = {
    clientID: '163d14c11c081c80f94a',
    clientSecret: 'cfe1d6de5ef4641c09a15ce4d82fcc59bc9bc7fe',
    callbackURL: 'http://localhost:5000/auth/github/redirect'
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
  (accessToken, refreshToken, profile,done) => {
    	User.findOne({facebookId: profile.id}).then((currentUser) => {
			if(currentUser){
				console.log('user is',currentUser);
				done(null,currentUser);
			} else{
				console.log(profile);
				new User({
				   email: profile.emails[0].value,
			       name: profile.name.givenName + ' ' + profile.name.familyName,
			       facebookId: profile.id,
		            }).save().then((newUser) => {
		            	console.log('new user created' + newUser);
		            	done(null,newUser);
		         })
		          .catch((error) => {
		console.log(error);
	})

			}
		});
		
  }
));

passport.use(new GitHubStrategy(options2,
  (accessToken, refreshToken, profile, done) => {
   console.log(profile);
     	User.findOne({githubId: profile.id}).then((currentUser) => {
			if(currentUser){
				console.log('user is',currentUser);
				done(null,currentUser);
			} else{
				console.log(profile);
				new User({
				  name: profile.username,
			      // name: profile.name.givenName + ' ' + profile.name.familyName,
			       githubId: profile.id,
		            }).save().then((newUser) => {
		            	console.log('new user created' + newUser);
		            	done(null,newUser);
		         })
		          .catch((error) => {
		console.log(error);
	})

			}
		});
   
  }
));