const express = require("express");
const app = express();
const path = require("path");

//set template engine
app.set("view engine", "ejs");
// set path to views folder (join absolute file url to 'views')
app.set("views", path.join(__dirname, "views"));
//request data from root url of app  
app.get("/", (req, res) => {
  //render home template  
  res.render("home");
});
//assign and listen for app at port 3000
app.listen(3000, () => {
  console.log("Serving on port 3000");
});




