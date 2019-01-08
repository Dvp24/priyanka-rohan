const router = require("express").Router();
const eventsController = require("../controllers/eventsController.js");

router
  .get("/api/EVENTS", eventsController.findAll)

  module.exports = router;
