const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes");

//using article model for accesing article collection
const Article = require("./models/articleModel.js");

//connect to mongo db
mongoose.connect("mongodb://localhost/nytreact");

//setting up middleware and templating engine
 app.use(bodyParser.urlencoded({extended: false}));
 app.use(bodyParser.json());
 
//routes
//  require("./routes/apiroutes.js")(app, Article); come look at this if not working
 app.use("/api", apiRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

 app.listen(PORT, function() {
   console.log("Listening on port ", PORT)
 })
