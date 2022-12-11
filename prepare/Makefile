#

.SUFFIXES: .js

.js:

all: airport-buffer.geojson aerodrome-buffer.geojson aprons-buffer.geojson checkpoints-buffer.geojson \
     ramps-buffer.geojson runways-buffer.geojson service-buffer.geojson serviceroads-buffer.geojson taxiways-buffer.geojson


airport-buffer.geojson: airport.geojson airport-buffer.js
	node airport-buffer.js

aerodrome-buffer.geojson: aerodrome.geojson aerodrome-buffer.js
	node aerodrome-buffer.js

aprons-buffer.geojson: aprons.geojson apron-buffer.js
	node apron-buffer.js

checkpoints-buffer.geojson: check-pois.geojson checkpoint-buffer.js
	node checkpoint-buffer.js

ramps-buffer.geojson: ramps.geojson ramp-buffer.js
	node ramp-buffer.js

runways-buffer.geojson: runways.geojson runway-buffer.js
	node runway-buffer.js

service-buffer.geojson: service-pois.geojson service-buffer.js
	node service-buffer.js

serviceroads-buffer.geojson: serviceroads.geojson svcroads-buffer.js
	node svcroads-buffer.js

taxiways-buffer.geojson: taxiways.geojson taxiway-buffer.js
	node taxiway-buffer.js


data: data-aerodrome.geojson data-flight.geojson data-service.geojson data-mission.geojson

data-aerodrome.geojson: aerodrome-buffer.geojson
	cp aerodrome-buffer.geojson data-aerodrome.geojson

data-flight.geojson: runways-buffer.geojson taxiways-buffer.geojson aprons-buffer.geojson ramps-buffer.geojson
	node concat.js runways-buffer.geojson taxiways-buffer.geojson aprons-buffer.geojson ramps-buffer.geojson
	mv out.geojson data-flight.geojson

data-service.geojson: serviceroads-buffer.geojson aprons-buffer.geojson service-buffer.geojson ramps-buffer.geojson airport-buffer.geojson
	node concat.js serviceroads-buffer.geojson aprons-buffer.geojson service-buffer.geojson ramps-buffer.geojson airport-buffer.geojson
	mv out.geojson data-service.geojson

data-mission.geojson: checkpoints-buffer.geojson
	cp checkpoints-buffer.geojson data-mission.geojson


../data/aerodrome.geojson: data-aerodrome.geojson
	cp data-aerodrome.geojson ../data/aerodrome.geojson

../data/flight.geojson: data-flight.geojson
	cp data-flight.geojson ../data/flight.geojson

../data/service.geojson: data-service.geojson
	cp data-service.geojson ../data/service.geojson

../data/mission.geojson: data-mission.geojson
	cp data-mission.geojson ../data/mission.geojson


install: ../data/aerodrome.geojson ../data/flight.geojson ../data/service.geojson ../data/mission.geojson
