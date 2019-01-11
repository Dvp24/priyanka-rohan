const express = require("express");

const mongoose = require("mongoose");
const RSVP = require("./models/rsvp.js");
const EVENT = require("./models/event.js");
const seeds = require("./scripts/seedDB.js");
const routes = require("./routes")
const app = express();
const PORT = process.env.PORT || 3003;

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

// Start the API server
app.listen(PORT, function() {
  seeds.init();
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
