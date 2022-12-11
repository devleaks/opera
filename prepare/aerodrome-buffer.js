// {
//     "type": "module"
// }

import fs from "fs"
import { center, circle } from "@turf/turf"

// const turf = require("@turf/turf");

const jsonstring = fs.readFileSync("aerodrome.geojson", "utf8");
const fc = JSON.parse(jsonstring);

// Buffer around taxiways
// const fc2 = buffer(fc, 0.010, {steps: 2, units: 'kilometers'});
let fc2 = fc.features
// try to name them, otherwise use OSM internal name
const id_root = "OTHH:aerodrome:approach:";
let c = center(fc.features[0]);
console.log(c.geometry.coordinates)
const circles = {
    "TMO": 10,
    "R20": 20,
    "R50": 50,
    "R100": 100
};
Object.entries(circles).forEach(([akey, value]) => {
    let f2 = circle(c, value * 1.852, {steps: 64, units: 'kilometers'});
    let fid = id_root + akey;
    f2.id = fid;
    f2.properties.emitpy_aoi_id = fid;
    // colors
    f2.properties["stroke"] = akey == "TMO" ? "#A00000" : "#000080";
    f2.properties["stroke-width"] = 1;
    f2.properties["stroke-opacity"] = 1;
    // f2.properties["fill"] = null;
    f2.properties["fill-opacity"] = 0.01;

    fc2.push(JSON.parse(JSON.stringify(f2)));
})





fs.writeFileSync("aerodrome-buffer.geojson", JSON.stringify(fc, true, 2));
