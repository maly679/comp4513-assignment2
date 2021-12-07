require('dotenv').config(); 
const express = require('express'); 
const connector = 
 require('../handlers/dataConnector.js').connect(); 
 
const UserModel = require('..//User.js'); 
UserModel.findOne({ email: "zpochet2@apple.com" }, (err, data) => 
{ 
 if (err) { 
 console.log('user not found'); 
 } else { 
 console.log('-- User found ---'); 
 console.log(data); 
 } 
}); 
