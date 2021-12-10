const path = require('path');
require('dotenv').config({path: path.join(__dirname, '.env')});
const express = require('express');
const session = require('express-session'); 
const cors = require('cors');
const cookieParser = require('cookie-parser'); 
const flash = require('express-flash'); 
const passport = require('passport'); 
const helper = require('./handlers/helper.js'); 
require('./utils/dataConnector.js').connect(); 
require('./scripts/auth.js'); 
// create an express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const Play = require("./models/Plays");
const User = require("./models/Users");
app.set('views', './views'); 
app.set('view engine', 'ejs'); 
/* --- middleware section --- */ 

app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
  );
  
  app.use(
    session({
      secret: "secretcode",
      resave: true,
      saveUninitialized: true,
    })
    );
    app.use(cookieParser("secretcode"));
    app.use(passport.initialize());
    app.use(passport.session());
    
    app.use(flash()) 
    
    
    const corsOptionsDelegate = (req, callback) => {
      var corsOptions;
      if (whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };
      } else {
        corsOptions = { origin: false };
      }
      callback(null, corsOptions);
    };
    
    const corsWithOptions = cors(corsOptionsDelegate);
    app.route('/')
    .options(corsWithOptions, helper.ensureAuthenticated, (req, res) => { res.sendStatus(200); })
    .get(cors(), (req, res)=>{
      res.redirect('http://localhost:3000')
    });
    
    // use the route handlers
    const userRouter = require("./handlers/userRouter.js");
    const playRouter = require("./handlers/playRouter.js");
    playRouter.handleAllPlays(app, Play);
    playRouter.handleSinglePlay(app, Play);
    userRouter.handleSingleUser(app, User);
    
    app.get('/login', (req, res) => { 
      res.render('login.ejs', {message: req.flash('error')} ); 
    }); 
    
    app.post('/login', async (req, resp, next) => { 
      // use passport authentication to see if valid login
      passport.authenticate('localLogin', 
      { successRedirect: '/', 
      failureRedirect: '/login', 
      failureFlash: true })(req, resp, next); 
    }); 
    app.get('/logout', helper.ensureAuthenticated, function (req, res){
      req.session.destroy(function (err) {
        res.redirect('/login'); //Inside a callback… bulletproof!
      });
    });
    
    app.get("/user", helper.ensureAuthenticated, (req, res) => {
      
      res.send(req.user); 
      // The req.user stores the entire user that has been authenticated inside of it.
    });
    
    // customize the 404 error with our own middleware function
    app.use(function (req, res, next) {
      res.status(404).send("Sorry can't find that!")
    });
    
    const port = process.env.port;
    app.listen(port, function () {
      console.log("Server running at port= " + port);
    });
    