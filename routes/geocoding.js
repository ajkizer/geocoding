const express = require("express");
const dotenv = require('dotenv')

const { geoCodeByLocation} = require("../controllers/geocoding");

const router = express.Router();

router.route("/").get(geoCodeByLocation);





module.exports = router;