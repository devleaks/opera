Observable vehicle are recorded and their movement is reported.

## Key
The key of an observable vehicle is its ICAO 24 bit transponder address.

## Recorded Data
### Vehicle
Vehicle type
- Aircraft
- Service
- Mission

### Position
When a vehicle broadcast its position, the following information is recorded:
- timestamp of *reception* of message by Opera
- ICAO address
- position (latitude, longitude)
- altitude if available
- speed if available
- timestamp of *emission* of message if available

Key: `vehicle:lastpos:icao24`

## Position Analysis

### Areas
In addition to the preceeding data, the following is immediately associated with the vehicle:
- Inside:
	- Timestamp
	- (Airport) areas of interest (identifiers) where the vehicle is inside.
- Crossed:
	- (current timestamp, time elapsed since last timestamp)
	- (Airport) areas of interest (identifiers) that intersect the line between the last known position and the current position. 


### Stopped
We determine if the vehicle is moving or stopped.
(Algorithm needs refinement.)

### H3
We record the [H3](https://h3geo.org) index (level 14, 6sq.meter resolution for hexagons) where the vehicle is located.