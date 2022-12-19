Practically, currently, the emitpy generator can be used from two end points.

# Python EmitApp Class
First, there is a wrapping EmitApp python class that loads all necessary entities and offer a limited number of entry points to generate flights and ground support equipment movements.

- do_flight
- do_service
- do_flight_service
- do_schedule
- do_mission

And their deletion counter parts


All function parameters are strings.


# REST API
As an alternative to this python class that can directly be used in python scripts (numerous examples are provided in the `bin` directory), emitpy proposes a very simple direct REST API to execute the very same calls. The REST API also has numerous information end points to get, for example, a list of valid aircraft type or fuel vehicle models. Those information end points can be used to build user interfaces. A Postman file has example of API call and there is also a script of direct calls to the API to exemplify its use. 

# Examples

## Single Flight

## Turnaround

## Flight Table

## Day Activity

