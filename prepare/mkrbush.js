// {
//     "type": "module"
// }

import fs from "fs"
import geojsonRbush from "geojson-rbush"

var tree = geojsonRbush();
const jsonstring = fs.readFileSync("aprons.geojson", "utf8");
const fc = JSON.parse(jsonstring);

// Clean FeatureCollection, only keep geometry and id
fc.features.forEach(function(f) {
    f.id = "airport:aeroway:apron:" + f.properties.name
    f.properties = {}
})

tree.load(fc);
const exported = tree.toJSON();
fs.writeFileSync("aprons.json", JSON.stringify(exported));
