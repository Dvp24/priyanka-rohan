const router = require("express").Router();
const eventRoutes = require("./event");
const rsvpRoutes = require("./rsvp");

// Book routes
router.use("/events", eventRoutes);
router.use("/rsvp",rsvpRoutes)

module.exports = router;
