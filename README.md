# Geocoding Service

## Routes

**Geocoding** `/locations?address={address}`

Example Request: `GET - https://geocoding-service.herokuapp.com/api/v1/locations?address=sapang+palay+bulacan+philippines`
  
  
```
  
  {
    "success": true,
    "coords": {
        "lat": 14.83502,
        "lng": 121.02814
    }
}
```





**Reverse Geocoding** `/locations?location={location}&reverse=true`

Example Request: `GET - https://geocoding-service.herokuapp.com/api/v1/locations?location=14.83502,121.02814&reverse=true`

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
