#airport #business 
The Airport Manager is a containing entity that is responsible for managing resources used by the simulation.

The Airport Manager contains
- The fleet of service vehicles, grouped by service vehicle types (catering, fuel, etc.), their usage and availability for service,
- All ramp allocations for turnaround operations,
- All runways allocations for take-offs and landings.

It registers usage of resources like runways, ground vehicles or ramps.

The Airport Manager contains reference data for the simulation:
- Operating airlines and their air routes to/from the Managed Airport
- A directory of all companies operating at the Managed Airport (airlines, handlers, or other services like firefighting, custom, or police.)

