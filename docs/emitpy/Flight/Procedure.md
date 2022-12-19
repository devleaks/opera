#flight #airspace 
Coded Instrument Flight Procedures are read from FAA data files and exposed as flight segments usable by emitpy.

The following entities are created:
- Terminal (an airport)
- RWY (a runway, if available, two opposite runways are paired, like 34L and 16R)
- SID
- STAR
- APPCH

Also, available in the Airspace structure are
- Fixes
- Holding positions and patterns

For an airport involved in a flight, those procedures are loaded "on demand" ([[Airport#AirportWithProcedures]]). (I.e. all procedures are not loaded for all airports.)
