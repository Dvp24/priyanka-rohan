// Our newest addition to the dependency family
var mongoose = require("mongoose");

// Get a reference to the mongoose Schema constructor
const Schema = mongoose.Schema;

var rsvpSchema = new Schema({

  firstName: {
    type:String,
    required: true
  },
  lastName: {
    type:String,
    required: true
  },
  peopleCount: {
    type: Number,
    required: true
  },
  status: {
    type:String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

var RSVP = mongoose.model("RSVP", rsvpSchema);
module.exports = RSVP;
  
  