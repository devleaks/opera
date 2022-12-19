#service 
A Service is a container entity that represents the movement of an airport ground service vehicle or equipment.

## Service Type
The Service provided has a core type like Fuel, Catering, Water, Sewage, Pushback, Cargo...

The type of service determine the type of vehicle that will be used. A given service can be served by different vehicle model. For example, a Fuel service can be provided by a Hydrant-type of fuel service vehicle when an aircraft is docked at a jetway, or by a Fuel Tanker truck when an aircraft is tied down at a remote parking.

The scheduling of the service is either directly supplied at service creation, or planned according to the Flight Service schedule.

## Equipment
The Equipment is used to perform the service.

### Equipment Type and Model
An Equipent has a *type* (Equipment Type) that is associated to the service it allows to perform, and an equipment (or vehicle) *model* that determine its capacties.
A Equipment continuously maintain its position. At the start of the emitpy application, the vehicle is located at a Service Depot for that service type.

## Service Depot
A Service Depot is a location from where all service vehicles start.
If the service requires visit to the depot, service vehicle movements are created between the depot and the service location (ramp). For example, after servicing one aircraft, the Catering truck heads back to the Catering depot.
Service Depots have a type, very much like services: Fuel, Catering, etc.
Example of service depots:
- Fuel
- Catering
- Baggage handling facility

A service of a given type (Baggage) may have more than one depot location.


## Service Rest Area
Service Rest Areas are locations where service vehicles go when they do not serve any aircraft.


## Service Movement
A Service Movement is the movement of a service vehicle that serves a flight.
1. The movement **starts** from the "current position" of the service vehicle (stored in the vehicle).
2. The service vehicle then goes to its service location on the ramp. The movement occurs on the network of the Managed Airport service roads. The service vehicle stays at the ramp for the duration of the service.
3. The duration of the service is either fixed or dependant on the service *quantity*.
4. At the enf of the service, the vehicle goes to either a Service Depot or Service Rest Area. This destination is the "end of service" position and is maintained in the vehicle. The next time the vehicle is requested for service, it will start from that position.

![[service-movement.png]]

### Ramp Service Location
A Ramp is a rectangular area that will host an aircraft and service vehicles around the aircraft.
The service vehicles stop at very precise locations around the aircraft. For a given Aircraft Type, there is a Ramp Service Location Profile that determine the precise location of the service vehicle relative to the aircraft nose tip. Example of a profile position: 12 meters from nose tip, 4.5 meters on left side, vehicle orientation 70° (from aircraft axis).
There is such a ramp service position for each service type. If a ramp service location is not found for a given aircraft type, the center of the ramp is used for all service vehicle types.

![[ramp-service-position.png]]

## Service Duration
The total service duration is composed of
- The service setup time
- The service time
- The service cleanup time (default to the same time as service setup time.)

The service time is either fixed (Service always takes the same time, as specified in the Service Type) or dependant on two parameters: A service quantity and a service time per quantity.

In addition, a service may require a pause (idle time) before the service starts and another pause after the service ends. During the pause times, the service vehicle remains on a parking area close to the service area.

## Service Scheduling
When the movement of a service vehicle has been created, it is possible to start the movement at any time. The following request is commonly done:
- Start a service at a given time
- End a service at a given time
- Arrive at ramp at a given time

