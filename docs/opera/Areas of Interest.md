
# Areas of Interest


- Runway
- Taxiway segment (buffer of `taxiway_width`  around the 2 point segment)
- Service road segment  (buffer of `service_road_with` (contant) around the 2 point segment)
- Ramp
- Apron
- Terminal
- Service depot
- GSE Parking
- Checkpoints
- Airport areas
- Aerodrome
- TMO and more

# Collection of Areas of Interest

Individual areas of interest are grouped in "functional" categories.
- Ramps
- Taxiways
- Service roads
- Aprons
- GSE Parkings
- Airport sections

Finally, areas of interest my be grouped by other crriteria such as
- Frequently visited area
- Areas in same vicinity (proximity), like neighboring areas

# Area of Interest Identification and Grouping
Most, if not all objects in Opera are identified by [[Identity|4 identifiers]]. These identifiers can be used to group and organize areas of interests in collections.

For example, the four identifiers can be used as such

| orgId   | classId | typeId  | name      | description                               |
| ------- | ------- | ------- | --------- | ----------------------------------------- |
| airport | aeroway | runway  | 34L       | A runway                                  |
| airport | aeroway | runway  |           | *all* runways                             |
| airport | aeroway | apron   |           | *all* aprons                              |
| airport | aeroway | environ | TMO       | Circular zone 10 miles around the airport |
| airport | aeroway | ramp    | E17       | Aircraft parking E17                      |
| airport | service | depot   | Catering1 | First catering restaurant                |
| airport        |service         |depot         |Fuel           |Main airport fuel depot                                           |
