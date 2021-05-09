const express = require("express");
const dotenv = require('dotenv')

const {getCoords} = require("../controllers/geocoding");

const router = express.Router();


router.route("/").get(getCoords);






module.exports = router;