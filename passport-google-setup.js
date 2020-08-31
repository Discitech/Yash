const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require('../models/User');


passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});



const options = {
  clientID: '27380449493-6vk447h4cssm4692m9t941d5h7mih06f.apps.googleusercontent.com',
  clientSecret: '3kL_wLF2lEA8riXPRb3maTeM',
  callbackURL: 'auth/google/redirect'
};


passport.use(new GoogleStrategy(options,
	(accessToken, refreshToken, profile, done) => {

		User.findOne({googleId: profile.id}).then((currentUser) => {
			if(currentUser){
				console.log('user is',currentUser);
				done(null,currentUser);
			} else{
				new User({
			       name: profile.displayName,
			       googleId: profile.profile.id,
			        googleThumbnail: profile._json.image.url
		            }).save().then((newUser) => {
		            	console.log('new user created' + newUser);
		            	done(null,newUser);
		         });

			}
		});
   })
);