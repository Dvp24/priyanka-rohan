const express = require("express");

const mongoose = require("mongoose");
const RSVP = require("./models/rsvp.js");
const EVENT = require("./models/event.js")

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
app.use(express.static("public"));
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/wedweb", { useNewUrlParser: true });

// trying seed
const rsvpListSeed = [{
    firstName: "Dhanashree",
    lastName: "Phalak",
    peopleCount: 1,
    status: "Attending",
    date: new Date(Date.now()),
  }];
  const eventListSeed = [
    {
      eventName: "Bridal Shower",
      date: "JUNE 17 2019",
      locationName: "Akbar Palace"
    },
    {
      eventName: "Sangeet",
      date: "JUNE 22 2019",
      locationName: " Palace"
    },{
      eventName: "Wedding",
      date: "November 1 2019",
      locationName: "legacy castle"
    },
  ]

RSVP.create(rsvpListSeed)
  .then(function(dbdb) {
    // If saved successfully, print the new Example document to the console
    console.log(dbdb);
  })
  .catch(function(err) {
    // If an error occurs, log the error message
    console.log(err.message);
  })
  
EVENT.create(eventListSeed)
  .then(function(dbdb) {
    // If saved successfully, print the new Example document to the console
    console.log(dbdb);
  })
  .catch(function(err) {
    // If an error occurs, log the error message
    console.log(err.message);
  })
  




// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
