const express = require("express");
const router = express.Router();
const wonderController = require("../controllers/wonderController");

router.get("/", (req, res) => res.redirect("/wonder/index"));
router.get("/wonder/index", wonderController.index);

module.exports = router;
