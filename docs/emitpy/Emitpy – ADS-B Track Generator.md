#intro
Emitpy is a supporting software for the Airport Opera project.

The goal of the Airport Opera project is to *non-invasively* monitor an airport from ADS-B messages produced by aicrafts and airport ground support vehicles.

Emitpy generates synthetic ADS-B messages as they would be produced by ADS-B emitter(s) like, in the context of airports, aircrafts and airport ground support vehicles. Emitpy generates such messages in a highly realistic way.

The primary goal is to produce sets of reproducible, deterministic, realistic ADS-B data (or _«messages»_) for software that process or use them, for development purpose. The generated data is developer controlled and can exhibit particular properties or challenges to developers.

## The Managed Airport

The core entity of emitpy is the airport being managed, aptly called the *«[[Managed Airport]]»*.
Emitpy will generate artificial activity on the ground of that airport.

There are two types of track data that can be produced on the ground of that airport:
- Aircraft tracks
- Ground support vehicle tracks

Aircraft tracks are generated for both arrival and departure flights. In either case, the flight is simulated to/from the *Managed Airport* from/to the remote airport.
The generated flight path is realistic, it follows airport terminal procedures and routes; vertical navigation is respected; on the ground taxi in and out is simulated to/from a parking position from/to the runway.

Ground support vehicle tracks are generated for a selected number of service vehicles (fuel, catering, pushback, etc.). Ground vehicles move on airport service roads. They are scheduled to serve aircraft turnaround operations. When an aircraft reaches a parking, a small fleet of service vehicles will move towards the aircraft to provide their services, and leave their position when done. Baggage trolleys, for example, will run back and forth between the side of the aircraft to the baggage processing area.

Finally, emitpy provides a sophisticated mechanism to broadcast those ADS-B messages on one or more output queues in a time-controlled way.

Start a tour of the emitpy application with the central entity, the [[Managed Airport]].