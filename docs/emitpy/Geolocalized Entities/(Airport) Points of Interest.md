#geo
To enhance movement realism, emitpy needs a few named points of interest as destination.
It is not possible to find those points in any database.
We recommand using a tool like geojson.io to create a GeoJSON FeatureCollection with all named point. Point must be attached a few GeoJSON Feature properties to properly identify them.

# Service Roads

## Service Depot
For a give service, a depot is the location from which all service vehicle will start.
There may be more than one depot for a given service.
A depot may be used by one type of service only.

## Service Rest Area
A Rest Area is a point where service vehicle go when they do not provide a service. Alternatively, they may also go to a depot.
There may more than one rest area for a given service.
A given rest area may be used for different services.

## Mission Checkpoint
A Checkpoint is a named point of interest on the service road network.
There currently is only one type of check point.
It is possible to name them in such a way that they exhibit some category.
For example: security:gate:west-5, or cargo:custom:landside-4.


# Aeroways

## Runway Exit
Runway exits are difficult to identify (need network analysis).
For smiplification, it is advisable to provide a list of runway exits on either side of the runway.
When an aircraft ends its landing roll and reaches a speed of about 50km/h (~ 30kn) or less, it may exit the runway towards the network of taxiways.
Runway exit points are named after the runway: RW34L:exit:5L is the same as RW16R:exit:3R
