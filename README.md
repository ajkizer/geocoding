# Geocoding Service

## Starting the App

- Install dependencies with `npm install`

  Dependencies:
   ```
    "axios": "^0.21.1",
    "cors": "^2.8.5",
    "dotenv": "^9.0.1",
    "express": "^4.17.1",
    "express-rate-limit": "^5.2.6",
    "helmet": "^4.6.0",
    "morgan": "^1.10.0"
    ```
- To start app in development mode, run the command `npm run dev`

## Environment Variables

For development, environment variables are stored in the root directory under `/config/config.env`

List of Environment Variables
  - LOCATION_URL: mapquest api URL for geocoding
  - REVERSE_URL: mapquest api URL for reverse geocoding
  - OPEN_WEATHER_API_KEY: api key for open weather
  - OPEN_WEATHER_URL: One call api URL for retreiving weather by latitude and longitude.
    - ex: `https://api.openweathermap.org/data/2.5/onecall?lat=LAT&lon=LON&appid=API_KEY`

## Routes

**Geocoding** 

`/locations?address={address}`

Example Request: 

`GET - https://geocoding-service.herokuapp.com/api/v1/locations?address=sapang+palay+bulacan+philippines`
  
  
```
  
  {
    "success": true,
    "coords": {
        "lat": 14.83502,
        "lng": 121.02814
    }
}
```

Query Parameters:
- address *(required)*: `String`

*****

**Reverse Geocoding** 

`/locations?location={location}&reverse=true`

Example Request: 

`GET - https://geocoding-service.herokuapp.com/api/v1/locations?location=14.83502,121.02814&reverse=true`

```
{
    "success": true,
    "data": {
        "street": "Santa Maria - San Jose Road",
        "adminArea6": "",
        "adminArea6Type": "Neighborhood",
        "adminArea5": "San Jose del Monte",
        "adminArea5Type": "City",
        "adminArea4": "",
        "adminArea4Type": "County",
        "adminArea3": "Bulacan",
        "adminArea3Type": "State",
        "adminArea1": "PH",
        "adminArea1Type": "Country",
        "postalCode": "3022",
        "geocodeQualityCode": "B1AAA",
        "geocodeQuality": "STREET",
        "dragPoint": false,
        "sideOfStreet": "N",
        "linkId": "0",
        "unknownInput": "",
        "type": "s",
        "latLng": {
            "lat": 14.8389,
            "lng": 121.027491
        },
        "displayLatLng": {
            "lat": 14.8389,
            "lng": 121.027491
        },
        "mapUrl": "http://www.mapquestapi.com/staticmap/v5/map?key=Lm7wCvE6DkJGabAwaFiHFZJzGXFdJ2Vy&type=map&size=225,160&locations=14.8389002,121.0274905|marker-sm-50318A-1&scalebar=true&zoom=15&rand=214959575"
    }
}
```

Query Parameters:
- location *(required)*: `[latitude: String, longitude: String]`
- reverse *(required)*: Boolean
  - if reverse is not added or is set to `false`, the response will not contain the correct information.

*****

**Weather** `/weather?address={address}`

Example Request: `GET - https://geocoding-service.herokuapp.com/api/v1/weather??address=sapang+palay+bulacan+philippines`

```

{
    "success": true,
    "data": {
        "lat": 14.8389,
        "lon": 121.0275,
        "timezone": "Asia/Manila",
        "timezone_offset": 28800,
        "current": {
            "dt": 1624503291,
            "sunrise": 1624483685,
            "sunset": 1624530500,
            "temp": 302.9,
            "feels_like": 305.51,
            "pressure": 1010,
            "humidity": 60,
            "dew_point": 294.3,
            "uvi": 9.84,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 2.48,
            "wind_deg": 209,
            "wind_gust": 2.61,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ]
        },
        "queryInfo": {
            "street": "Santa Maria - San Jose Road",
            "city": "San Jose del Monte",
            "state": "Bulacan",
            "country": "PH"
        }
    }
}
```
