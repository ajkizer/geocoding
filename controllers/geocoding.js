const asyncHandler = require("../middleware/asyncHandler");

const axios = require("axios");




//@desc     Get coordinates from location in USA
//@route    GET /api/v1/coords
//@access   Public

exports.getCoords = asyncHandler(async(req, res, next) => {
    const {house, street, city, state} = req.query;
 
    const geoString = `${house}+${street.split(" ").join("+")}+${city},${state}`
    const URL = `${process.env.LOCATION_URL}${geoString}`

    let geoData = await axios.get(URL);

    coords = (geoData.data.results[0].locations[0].displayLatLng);
    res.status(200).json({success: true, coords})
})