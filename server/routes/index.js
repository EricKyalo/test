const express = require("express");
const router = express.Router();


// get route
router.get("/", (req, res) => {
    res.render("index")
})

module.exports = router;