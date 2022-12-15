// h3  v3 vs v4
const h3 = require("h3-js");

doha = {
    "type": "Feature",
    "properties": {},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [51.47388441158009,25.32319417155682],
            [51.47388441158009,25.227768110704005],
            [51.58363440926871,25.227768110704005],
            [51.58363440926871,25.32319417155682],
            [51.47388441158009,25.32319417155682]
        ]]
    }
};

// v4
// Get the set of hexagons within a polygon
const polygon = doha.geometry.coordinates[0];

const hexagons = h3.polygonToCells(polygon, 7);
console.log(hexagons);
// They are the same as V3
// [
//   '871f5bdacffffff', '871f5bd32ffffff',
//   '871f5bda0ffffff', '871f5aa4dffffff',
//   '871f5bd14ffffff', '871f5bd33ffffff',
//   '871f5bda1ffffff', '871f5aa48ffffff',
//   '871f5bdaeffffff', '871f5aa49ffffff',
//   '871f5bd16ffffff', '871f5bd10ffffff',
//   '871f5bda3ffffff', '871f5bda4ffffff',
//   '871f5aa4bffffff', '871f5bd12ffffff',
//   '871f5bda5ffffff'
// ]


// Get the outline of a set of hexagons, as a GeoJSON-style MultiPolygon
const coordinates = hexagons.map( (f) => h3.cellToBoundary(f, false) );
console.log(coordinates);

// Build a FeatureCollection for display at geojson.io
const fc = {
    type: "FeatureCollection",
    features: [
        doha,
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [coordinates]
            }
        }
    ]
};
console.log(fc);
require('fs').writeFile('out4.geojson', JSON.stringify(fc), (error) => {
    if (error) {
        throw error;
    }
});
console.log("Feature collection saved in out4.geojson");
// Output: First hexagon only:


