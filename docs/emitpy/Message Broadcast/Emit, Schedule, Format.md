#output #emit
A movement is a time-ordered collection of positions that represent the displacement of a vehicle. Each position is associated with properties like speed of the vehicle at the position.
Geometry-wise, it can be considered as a augmented LineString.
A movement has no absolute time. All times in a movement are relative to the start of the movement. A movement can then be scheduled to occur at any time. The movement will never change, only the time at which it occurs. Deciding the time at which the movement will occur is the purpose of the movement scheduling.

## Emit

### Emit Frequency
Emit is the process of broadcasting position information for a Movement at regular time interval.
Emit starts from a Movement. It follows the movement, taking into account the movement times and speeds, and insert emission marks at regular time interval. The time interval is a parameter of the Emit process. It can be as frequent as every second, or as infrequent as every 10 or 30 minutes.
The result of the Emit process is a new collection of time-ordered positions, positions where the emission of the position will occurs. Geometry-wise, it can be considered as another LineString where there is exactly the same time interval between each position if we consider that the LineString represents a movement of a vehicle.

The same movement can be emitted several times with different emission parameters.

The result of Emit, the new LineString, is also relative-time based, with the time zero at the beginning of the Movement.

The Movement LineString and the Emit LineString have the same path.

During the Emit process, [[Movement#Mark|Marks]] are preserved with their precise time location.

### Emit Frequency Limit
When the emit frequency is higher than every 10 seconds, emission will only occur if the vehicle is in the vicinity of the Managed Airport.
Typically, when simulating the echo of a radar ping, ground radar broadcast the position of vehicle every second. This can produce a significant amount of data, both during the movement and emission generation process and during the broadcast of the messages on an output queue.
Example:
- 8 moving aicrafts
- 20 parked aircrafts all being services by 4 service vehicles

approximately generate 100 messages per second.
For a intercontinental 8 hour flight, we will not generate positions every second. We will only generate positions every second if the aircraft is less than 3 or 5 nautical miles from the simulated radar.

## Schedule
Schedule is the process of setting an absolute time of emission for each Emit.
To schedule an Emit, it is necessary to supply a Mark and the date/time at which the Mark is reached.
For example, for a flight, we can schedule the emission such that the touch-down time is a very precise date/time. For a service, we can schedule de service such as the end of the service terminates 15 minutes before the departure time.

## Format
The Format process generates the simulated message from data avaialble in emitpy.
In the course of building the movement, data is accumulated at each point: position, speeds, timing information, aircraft used, service vehicle type...
A standard ADS-B message does not contain all this data. There is therefore an additional step to select which data will be supplied, and in which format.

### Default Format
The default format is text, each point is published as a GeoJSON Feature point with all data as name,value pair properties. Structured properties can optionally be flattened into a simpler structure.

Formatted messages are then stored for later [[Broadcast|broadcast]].