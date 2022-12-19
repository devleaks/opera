#flight #aircraft
## Aircraft
An Aircraft is entity that reprensent a precise frame.
An aircraft has
- A registration
- An optional initial registration or serial number
- An ICAO24 bit address, often presented as a 6 hexadecimal character suite,
- but most importantly, has an Aircraft Type (*with performance* data associated to it).
It can also contain other properties like its seating configuration or the amount of cargo bays.


## Aircraft Type
The Aircraft Type is a named entity.
Common aircraft types in ICAO DOC8643 are loaded, together with their IATA code if available.

There is a Aircraft Type equivalence, to link similar aircrafts together, either through their IATA code or their ICAO code.

## Aircraft Type with Performances
Common aircraft types used for civil aviation are loaded together with their performances as extracted from Eurocontrol Aircraft Performance Database.


## Aircraft Class
Each Aircraft Type with Performance is assigned a class (Letters A (small) to F (A380)) based on their wingspan and length.
An Aircraft Class is a Aircraft Type with Performance for a group of similar aircrafts representing similar physical characteristics and performances.
When characteristics for an aircraft are not found in its Aircraft Type with Performance, data is looked up in its Aircraft Class.

```python
# ws = wing span in meters
    try_class = "A"
    if ws > 78:
        try_class = "F"
    elif ws > 65:
        try_class = "E"
    elif ws > 50:
        try_class = "D"
    elif ws > 40:
        try_class = "C"
    elif ws > 32:
        try_class = "B"
```
