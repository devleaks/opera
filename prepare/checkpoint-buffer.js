// {
//     "type": "module"
// }

import fs from "fs"
import { circle } from "@turf/turf"

// const turf = require("@turf/turf");

const jsonstring = fs.readFileSync("check-pois.geojson", "utf8");
const fc = JSON.parse(jsonstring);

// Buffer around taxiways
// const fc2 = buffer(fc, 0.010, {steps: 2, units: 'kilometers'});
let fc2 = []
// try to name them, otherwise use OSM internal name
const id_root = "OTHH:service:checkpoint:";
let cnt = 1
fc.features.forEach(f => {
    let f2 = circle(f, 0.020, {steps: 6, units: 'kilometers'})
    let fid = id_root;
    fid += "CP-"+cnt;
    cnt++;
    f2.id = fid
    f2.properties.emitpy_aoi_id = fid
    f2.properties["stroke"] = "#7b219f";
    f2.properties["stroke-width"] = 1;
    f2.properties["stroke-opacity"] = 1;
    f2.properties["fill"] = "#7b219f";
    f2.properties["fill-opacity"] = 0.10;
    fc2.push(f2)
})

fc2 = {
    type: "FeatureCollection",
    features: fc2
}

fs.writeFileSync("checkpoints-buffer.geojson", JSON.stringify(fc2, true, 2));
