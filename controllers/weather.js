const axios = require("axios");
const asyncHandler = require("../middleware/asyncHandler")



exports.getWeather = asyncHandler(async(req, res, next) => {
    const {location, address} = req.query;
    const LOCATION_URL = `${process.env.LOCATION_URL}`

    
    let OPEN_WEATHER_URL = `${process.env.OPEN_WEATHER_URL}`
    let locationArr;
    let queryInfo;



    
    OPEN_WEATHER_URL = OPEN_WEATHER_URL.replace("API_KEY", process.env.OPEN_WEATHER_API_KEY)


    if(address) {
        let geoData = await axios.get(`${LOCATION_URL}${address}`);
        let coords = (geoData.data.results[0].locations[0].displayLatLng);


        //populate location info
        const {street, adminArea5, adminArea3, adminArea1} =  geoData.data.results[0].locations[0];
        queryInfo = {
            street,
            city: adminArea5,
            state: adminArea3,
            country: adminArea1,
        }

        OPEN_WEATHER_URL = OPEN_WEATHER_URL.replace('LAT', coords.lat).replace("LON", coords.lng)
        
    } else if(location) {
        locationArr = location.split(',');
        OPEN_WEATHER_URL = OPEN_WEATHER_URL.replace("LAT", locationArr[0]).replace("LON", locationArr[1])
    } else {
        return res.json({success: false, data: "Please add either coordinates or address"})
    }



    //check if minutely and daily weather data need to be populated.
    
    if(!req.query.minutely){
        OPEN_WEATHER_URL = `${OPEN_WEATHER_URL}&exclude=minutely`
    } 
    
    if(!req.query.daily){
        OPEN_WEATHER_URL = `${OPEN_WEATHER_URL},daily`
    }





    //retrieves weather data
    const {data} = await axios.get(OPEN_WEATHER_URL)
    data.queryInfo = queryInfo
    
    data.queryInfo = queryInfo;
    res.status(200).json({success: true, data})
})
