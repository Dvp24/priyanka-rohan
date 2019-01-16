const router = require("express").Router();
const rsvpController = require("../../controllers/rsvpController.js");

router
  .route("/")
  .get(rsvpController.findAll)
  
module.exports = router;
