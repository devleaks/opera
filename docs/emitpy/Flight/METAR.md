#flight #environment
METAR is fetched for the departing or arrival airport to determine the runway in use (QFU).

Ideally, the (historical) METAR should be fetched for the scheduled or estimated time of departure or arrival at the airport. However, historical METAR are difficult to get (€ or limited access). Therefore, it always is the METAR at the date/time of execution of the flight creation that is used.

(In the application, METAR are cached and never fetched twice.)