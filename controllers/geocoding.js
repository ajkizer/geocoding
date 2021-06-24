const asyncHandler = require("../middleware/asyncHandler");

const axios = require("axios");


//@desc     Get coordinates from location in USA
//@route    GET /api/v1/coords
//@access   Public



exports.geoCodeByLocation = asyncHandler(async(req, res, next) => {
    const {location, address} = req.query;
    let LOCATION_URL;

    if(req.query.reverse) {
       LOCATION_URL = `${process.env.REVERSE_URL}${location}`

        if(!location) {
            return res.status(400).json({success: false, data: "please provide coordinates"})
        }

     
        let geoData = await axios.get(LOCATION_URL);
        res.status(200).json({success: true, data: geoData.data})

    } else {

        LOCATION_URL = `${process.env.LOCATION_URL}`

        if(!address) {
            return res.status(400).json({success: false, data: "please provide address"})
        }
            LOCATION_URL = `${LOCATION_URL}${address}`
            let geoData = await axios.get(LOCATION_URL);
            let coords = (geoData.data.results[0].locations[0].displayLatLng);
            res.status(200).json({success: true, coords});
        }  

    } )