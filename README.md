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
