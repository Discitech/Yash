const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const {MONGOURI} =require('./config')
const PORT = 5000 || process.env.PORT;
const contact = require('./routes/contact.js');
const {SECRET} = require('./config');
const passport = require('passport');
const user = require('./routes/user.js');
const User = require('../models/User');
const path = require('path');
const authRoutes = require('./routes/auth-routes.js');
const passportSetGoogle = require('./passport/passport-google-setup');
const cookieSession = require('cookie-session');


app.use(cookieSession({
	maxAge: 24*60*60*1000,
	keys: ['edkfbguyherbuhfbhirbhfibnhei']
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(MONGOURI,{
	useNewUrlParser:true,
	useUnifiedTopology:true
});

mongoose.connection.on('connected',() => {console.log('connected to mongodb');});

mongoose.connection.on('error',(error) => {console.log('not connected to mongodb',error);});

mongoose.set("userCreateIndex",true);

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./passportjs/passport')(passport);

app.use(passport.initialize());


app.use('/',user);

app.use('/auth',authRoutes);


app.use('/contact',contact);

//app.use('/',auth);

app.listen(PORT,() => {console.log('server is running on',PORT);});