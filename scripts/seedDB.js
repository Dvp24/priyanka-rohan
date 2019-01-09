const mongoose = require("mongoose");
const db = require("../models");
// const RSVP = require("./models/rsvp.js");


// This file empties the Books collection and inserts the books below

// mongoose.connect(
//   process.env.MONGODB_URI ||
//   "mongodb://localhost/wedweb"
// );
mongoose.connect("mongodb://localhost/wedweb", { useNewUrlParser: true });


const rsvpListSeed = [
  {
    firstName: "Dhanashree",
    lastName: "Phalak",
    peopleCount: 1,
    status: "Attending",
    date: new Date(Date.now()),
  },
  {
    firstName: "Shivani",
    lastName: "Choudhary",
    peopleCount: 1,
    status: "May be",
    date: new Date(Date.now())
  },
  {
    firstName: "Bhagyashree",
    lastName: "abc",
    peopleCount: 1,
    status: "Not Attending",
    date: new Date(Date.now())
  }
]
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

// RSVP.insermany(rsvpListSeed)
//   .then(function(dbdb) {
//     // If saved successfully, print the new Example document to the console
//     console.log(dbdb);
//   })
//   .catch(function(err) {
//     // If an error occurs, log the error message
//     console.log(err.message);
//   })
  
function initDB() {
  db.RSVP
  .remove({})
  .then(() => db.RSVP.insertMany(rsvpListSeed))
  .then(data => {
    console.log(data.length + " records inserted!");
  })
  .catch(err => {
    console.error(err);
  });
}

module.exports = {
  init: initDB,
}