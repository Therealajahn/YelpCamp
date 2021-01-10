# YelpCamp
My version of Colt Steel's YelpCamp, a project from his 2021 Udemy course.

# Step 1: Creating a basic Express App
 Initialize file with a package.json
 `npm init`  
 
 Install express, mongoose, and ejs
 `npm i express mongoose ejs`  
 
 Add app.js file to project
 `touch app.js`  
 
 In app.js include express
  `const express = require("express");`  
  
 Define express as app
   `const app = express();`  
   
 Define path  
  `const path = require("path");`  
  
 Set Template engine 
  `app.set("view engine", "ejs");`  
  
 Join Absolute File Url (__dirname) to "views" to get Embeddeed Javascript Template   
  `app.set("views", path.join(__dirname, "views"));`  
 
 Route GET request to root URL of app  
  `app.get("/", (req, res) => {
   res.render("home");
  });`  
  
 Assign app to port 3000 and log a message to confirm the app is working 
  `app.listen(3000, () => {
     console.log("Serving on port 3000");
   });`
 
 
 
