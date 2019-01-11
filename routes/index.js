var path = require("path");
var router = require("express").Router();
var apiRoutes  = require("./apiRoutes.js")

router.use("/api", apiRoutes);
//   router.get("/api/EVENTS", function(req, res) {
// res.sendFile(path.join(__dirname, "../public/events.html"));
// });
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// router.get("/api/EVENTS", )
module.exports = router;
