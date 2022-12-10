// {
//     "type": "module"
// }

import fs from "fs"
import { buffer, destination, lineString, polygon, featureCollection } from "@turf/turf"

// const turf = require("@turf/turf");

const jsonstring = fs.readFileSync("ramps.geojson", "utf8");
const fc = JSON.parse(jsonstring);

// Buffer around taxiways
//const fc2 = buffer(fc, 0.035, {units: 'kilometers'});
let fc2 = []

// try to name them, otherwise use OSM internal name
const id_root = "OTHH:aeroway:ramp:";
fc.features.forEach(f => {
    let fid = id_root;
    if (f.properties.hasOwnProperty("name")) {
        fid += f.properties.name;
    }
    const w = 0.035
    let p1 = destination(f.geometry.coordinates, 0.020, f.properties.orientation, {units: 'kilometers'})
    let p2 = destination(f.geometry.coordinates, 0.070, f.properties.orientation + 180, {units: 'kilometers'})

    let c1 = destination(p1.geometry.coordinates, w, f.properties.orientation + 90, {units: 'kilometers'})
    let c2 = destination(p1.geometry.coordinates, w, f.properties.orientation - 90, {units: 'kilometers'})
    let c3 = destination(p2.geometry.coordinates, w, f.properties.orientation + 90, {units: 'kilometers'})
    let c4 = destination(p2.geometry.coordinates, w, f.properties.orientation - 90, {units: 'kilometers'})

    let f2 = polygon([[c1.geometry.coordinates, c2.geometry.coordinates, c4.geometry.coordinates, c3.geometry.coordinates, c1.geometry.coordinates]], f.properties)
    f2.id = fid
    f2.properties.emitpy_aoi_id = fid
    f2.properties["stroke"] = "#3a88fe";
    f2.properties["stroke-width"] = 1;
    f2.properties["stroke-opacity"] = 1;
    f2.properties["fill"] = "#3a88fe";
    f2.properties["fill-opacity"] = 0;
    // let f3 = buffer(f2, 0.030, {steps: 2, units: 'kilometers'});
    // f3.id = fid
    // f3.properties.emitpy_aoi_id = fid
    // fc2.push(f)
    fc2.push(f2)
})

fc2 = featureCollection(fc2)

fs.writeFileSync("ramps-buffer.geojson", JSON.stringify(fc2, true, 2));
